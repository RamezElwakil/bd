import { useEffect, useRef } from 'react'

function FlappyBirdGame() {
  const canvasRef = useRef(null)
  const gameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set responsive canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement
      const maxWidth = Math.min(container.clientWidth - 40, 400)
      const maxHeight = Math.min(window.innerHeight * 0.7, 600)
      
      // Maintain aspect ratio (276:414)
      const aspectRatio = 276 / 414
      let width = maxWidth
      let height = width / aspectRatio
      
      if (height > maxHeight) {
        height = maxHeight
        width = height * aspectRatio
      }
      
      canvas.width = width
      canvas.height = height
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Original game variables
    let frames = 0
    let dx = 2
    const state = {
      curr: 0,
      getReady: 0,
      Play: 1,
      gameOver: 2,
    }

    // Audio setup
    const SFX = {
      start: new Audio('/JS-Flappy-Bird-master/sfx/start.wav'),
      flap: new Audio('/JS-Flappy-Bird-master/sfx/flap.wav'),
      score: new Audio('/JS-Flappy-Bird-master/sfx/score.wav'),
      hit: new Audio('/JS-Flappy-Bird-master/sfx/hit.wav'),
      die: new Audio('/JS-Flappy-Bird-master/sfx/die.wav'),
      played: false,
    }

    // Ground object
    const gnd = {
      sprite: new Image(),
      x: 0,
      y: 0,
      draw: function () {
        this.y = parseFloat(canvas.height - this.sprite.height)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(this.sprite, this.x, this.y)
      },
      update: function () {
        if (state.curr != state.Play) return
        this.x -= dx
        this.x = this.x % (this.sprite.width / 2)
      },
    }

    // Background object
    const bg = {
      sprite: new Image(),
      x: 0,
      y: 0,
      draw: function () {
        const y = parseFloat(canvas.height - this.sprite.height)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(this.sprite, this.x, y)
      },
    }

    // Pipe object
    const pipe = {
      top: { sprite: new Image() },
      bot: { sprite: new Image() },
      gap: 85,
      moved: true,
      pipes: [],
      draw: function () {
        const ctx = canvas.getContext('2d')
        for (let i = 0; i < this.pipes.length; i++) {
          let p = this.pipes[i]
          ctx.drawImage(this.top.sprite, p.x, p.y)
          ctx.drawImage(
            this.bot.sprite,
            p.x,
            p.y + parseFloat(this.top.sprite.height) + this.gap
          )
        }
      },
      update: function () {
        if (state.curr != state.Play) return
        if (frames % 100 == 0) {
          this.pipes.push({
            x: parseFloat(canvas.width),
            y: -210 * Math.min(Math.random() + 1, 1.8),
          })
        }
        this.pipes.forEach((pipe) => {
          pipe.x -= dx
        })

        if (this.pipes.length && this.pipes[0].x < -this.top.sprite.width) {
          this.pipes.shift()
          this.moved = true
        }
      },
    }

    // Bird object
    const bird = {
      winSprite: new Image(),
      loseSprite: new Image(),
      rotatation: 0,
      x: 50,
      y: 100,
      speed: 0,
      gravity: 0.125,
      thrust: 3.6,
      frame: 0,
      draw: function () {
        const ctx = canvas.getContext('2d')
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotatation * Math.PI / 180)
        
        // Use lose.png when game is over and bird has hit the ground
        const isDead = state.curr === state.gameOver && this.y + 15 >= canvas.height - 50
        const sprite = isDead ? this.loseSprite : this.winSprite
        
        if (sprite.complete) {
          const w = sprite.width
          const h = sprite.height
          ctx.drawImage(sprite, -w / 2, -h / 2)
        } else {
          // Fallback if image not loaded
          ctx.fillStyle = isDead ? '#FF4444' : '#FF6B6B'
          ctx.beginPath()
          ctx.arc(0, 0, 15, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = 'white'
          ctx.font = '20px Arial'
          ctx.textAlign = 'center'
          ctx.fillText(isDead ? '😢' : '👧', 0, 5)
        }
        
        ctx.restore()
      },
      update: function () {
        let r = 15 // Use fixed radius for collision detection
        switch (state.curr) {
          case state.getReady:
            this.rotatation = 0
            this.y += frames % 10 == 0 ? Math.sin(frames * Math.PI / 180) : 0
            break
          case state.Play:
            this.y += this.speed
            this.setRotation()
            this.speed += this.gravity
            if (this.y + r >= gnd.y || this.collisioned()) {
              state.curr = state.gameOver
            }
            break
          case state.gameOver:
            if (this.y + r < gnd.y) {
              this.y += this.speed
              this.setRotation()
              this.speed += this.gravity * 2
            } else {
              this.speed = 0
              this.y = gnd.y - r
              this.rotatation = 90
              if (!SFX.played) {
                SFX.die.play()
                SFX.played = true
              }
            }
            break
        }
      },
      flap: function () {
        if (this.y > 0) {
          SFX.flap.play()
          this.speed = -this.thrust
        }
      },
      setRotation: function () {
        if (this.speed <= 0) {
          this.rotatation = Math.max(-25, (-25 * this.speed) / (-1 * this.thrust))
        } else if (this.speed > 0) {
          this.rotatation = Math.min(90, (90 * this.speed) / (this.thrust * 2))
        }
      },
      collisioned: function () {
        if (!pipe.pipes.length) return false
        let x = pipe.pipes[0].x
        let y = pipe.pipes[0].y
        let r = 15 // Fixed radius for collision
        let roof = y + parseFloat(pipe.top.sprite.height)
        let floor = roof + pipe.gap
        let w = parseFloat(pipe.top.sprite.width)
        if (this.x + r >= x) {
          if (this.x + r < x + w) {
            if (this.y - r <= roof || this.y + r >= floor) {
              SFX.hit.play()
              return true
            }
          } else if (pipe.moved) {
            UI.score.curr++
            SFX.score.play()
            pipe.moved = false
          }
        }
        return false
      },
    }

    // UI object
    const UI = {
      getReady: { sprite: new Image() },
      gameOver: { sprite: new Image() },
      tap: [{ sprite: new Image() }, { sprite: new Image() }],
      score: {
        curr: 0,
        best: 0,
      },
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      frame: 0,
      draw: function () {
        const ctx = canvas.getContext('2d')
        switch (state.curr) {
          case state.getReady:
            this.y = parseFloat(canvas.height - this.getReady.sprite.height) / 2
            this.x = parseFloat(canvas.width - this.getReady.sprite.width) / 2
            this.tx = parseFloat(canvas.width - this.tap[0].sprite.width) / 2
            this.ty = this.y + this.getReady.sprite.height - this.tap[0].sprite.height
            ctx.drawImage(this.getReady.sprite, this.x, this.y)
            ctx.drawImage(this.tap[this.frame].sprite, this.tx, this.ty)
            break
          case state.gameOver:
            this.y = parseFloat(canvas.height - this.gameOver.sprite.height) / 2
            this.x = parseFloat(canvas.width - this.gameOver.sprite.width) / 2
            this.tx = parseFloat(canvas.width - this.tap[0].sprite.width) / 2
            this.ty = this.y + this.gameOver.sprite.height - this.tap[0].sprite.height
            ctx.drawImage(this.gameOver.sprite, this.x, this.y)
            ctx.drawImage(this.tap[this.frame].sprite, this.tx, this.ty)
            break
        }
        this.drawScore()
      },
      drawScore: function () {
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = "#FFFFFF"
        ctx.strokeStyle = "#000000"
        switch (state.curr) {
          case state.Play:
            ctx.lineWidth = "2"
            ctx.font = "35px Arial"
            ctx.fillText(this.score.curr, canvas.width / 2 - 5, 50)
            ctx.strokeText(this.score.curr, canvas.width / 2 - 5, 50)
            break
          case state.gameOver:
            ctx.lineWidth = "2"
            ctx.font = "40px Arial"
            let sc = `SCORE :     ${this.score.curr}`
            try {
              this.score.best = Math.max(
                this.score.curr,
                localStorage.getItem("best")
              )
              localStorage.setItem("best", this.score.best)
              let bs = `BEST  :     ${this.score.best}`
              ctx.fillText(sc, canvas.width / 2 - 80, canvas.height / 2 + 0)
              ctx.strokeText(sc, canvas.width / 2 - 80, canvas.height / 2 + 0)
              ctx.fillText(bs, canvas.width / 2 - 80, canvas.height / 2 + 30)
              ctx.strokeText(bs, canvas.width / 2 - 80, canvas.height / 2 + 30)
            } catch (e) {
              ctx.fillText(sc, canvas.width / 2 - 85, canvas.height / 2 + 15)
              ctx.strokeText(sc, canvas.width / 2 - 85, canvas.height / 2 + 15)
            }
            break
        }
      },
      update: function () {
        if (state.curr == state.Play) return
        this.frame += frames % 10 == 0 ? 1 : 0
        this.frame = this.frame % this.tap.length
      },
    }

    // Load all images
    gnd.sprite.src = "/JS-Flappy-Bird-master/img/ground.png"
    bg.sprite.src = "/JS-Flappy-Bird-master/img/BG.png"
    pipe.top.sprite.src = "/JS-Flappy-Bird-master/img/toppipe.png"
    pipe.bot.sprite.src = "/JS-Flappy-Bird-master/img/botpipe.png"
    UI.gameOver.sprite.src = "/JS-Flappy-Bird-master/img/go.png"
    UI.getReady.sprite.src = "/JS-Flappy-Bird-master/img/getready.png"
    UI.tap[0].sprite.src = "/JS-Flappy-Bird-master/img/tap/t0.png"
    UI.tap[1].sprite.src = "/JS-Flappy-Bird-master/img/tap/t1.png"
    bird.winSprite.src = "/jbd/win.png"
    bird.loseSprite.src = "/jbd/lose.png"

    // Event listeners
    const handleClick = () => {
      switch (state.curr) {
        case state.getReady:
          state.curr = state.Play
          SFX.start.play()
          break
        case state.Play:
          bird.flap()
          break
        case state.gameOver:
          state.curr = state.getReady
          bird.speed = 0
          bird.y = 100
          pipe.pipes = []
          UI.score.curr = 0
          SFX.played = false
          break
      }
    }

    const handleKeyDown = (e) => {
      if (e.keyCode == 32 || e.keyCode == 87 || e.keyCode == 38) {
        e.preventDefault()
        handleClick()
      }
    }

    canvas.addEventListener('click', handleClick)
    window.addEventListener('keydown', handleKeyDown)

    // Game loop
    function gameLoop() {
      update()
      draw()
      frames++
    }

    function update() {
      bird.update()
      gnd.update()
      pipe.update()
      UI.update()
    }

    function draw() {
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = "#30c0df"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      bg.draw()
      pipe.draw()
      bird.draw()
      gnd.draw()
      UI.draw()
    }

    // Start the game loop
    const gameInterval = setInterval(gameLoop, 20)

    // Cleanup
    return () => {
      clearInterval(gameInterval)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('keydown', handleKeyDown)
      canvas.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Flappy Sister</h1>
        <p className="text-white">Click or press Space to flap!</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-2xl p-4">
        <canvas
          ref={canvasRef}
          className="border-2 border-gray-800 rounded-lg"
          style={{
            background: '#30c0df',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>
    </div>
  )
}

export default FlappyBirdGame 