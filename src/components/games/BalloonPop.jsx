import { useState, useEffect } from 'react'
import Confetti from '../Confetti'

function BalloonPop({ onBack }) {
  const [balloons, setBalloons] = useState([])
  const [poppedCount, setPoppedCount] = useState(0)
  const [showMessage, setShowMessage] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  const messages = [
    "You're absolutely amazing! ✨",
    "Your smile lights up my world! 💫",
    "You're stronger than you know! 💪",
    "Every day with you is a gift! 🎁",
    "You make everything better! 🌟",
    "You're my favorite person! 💕",
    "You're capable of amazing things! 🚀",
    "You're beautiful inside and out! 🌸",
    "You bring so much joy to my life! 😊",
    "You're absolutely perfect! 👑",
    "You're my best friend forever! 👯‍♀️",
    "You're loved beyond measure! 💖"
  ]

  const balloonColors = [
    'bg-red-400', 'bg-pink-400', 'bg-purple-400', 'bg-blue-400', 
    'bg-green-400', 'bg-yellow-400', 'bg-orange-400', 'bg-indigo-400'
  ]

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const gameBalloons = messages.map((message, index) => ({
      id: index,
      message,
      color: balloonColors[index % balloonColors.length],
      isPopped: false,
      x: Math.random() * 60 + 20, // 20-80%
      y: Math.random() * 60 + 20, // 20-80%
      size: Math.random() * 20 + 60, // 60-80px
      animationDelay: Math.random() * 2
    }))
    
    setBalloons(gameBalloons)
    setPoppedCount(0)
    setShowMessage(null)
    setGameComplete(false)
  }

  const popBalloon = (balloon) => {
    if (balloon.isPopped) return

    const updatedBalloons = balloons.map(b => 
      b.id === balloon.id ? { ...b, isPopped: true } : b
    )
    setBalloons(updatedBalloons)
    setPoppedCount(poppedCount + 1)
    setShowMessage(balloon.message)
    setShowConfetti(true)

    setTimeout(() => {
      setShowMessage(null)
      setShowConfetti(false)
    }, 3000)

    // Check if all balloons are popped
    if (poppedCount + 1 === messages.length) {
      setTimeout(() => {
        setGameComplete(true)
      }, 1000)
    }
  }

  if (gameComplete) {
    return (
      <div className="text-center space-y-8">
        <div className="card max-w-2xl mx-auto">
          <div className="text-6xl mb-4">🎈</div>
          <h2 className="text-3xl font-handwriting text-gray-800 mb-4">
            All Balloons Popped!
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            You found all {messages.length} sweet messages!
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Each message is true - you're absolutely wonderful! 💕
          </p>
          <div className="space-y-3">
            <button onClick={initializeGame} className="btn-primary">
              Play Again! 🎈
            </button>
            <button onClick={onBack} className="btn-secondary">
              Back to Games
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Game Info */}
      <div className="card max-w-md mx-auto text-center">
        <div className="text-lg font-medium mb-2">
          Pop the balloons to find sweet messages!
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Popped: {poppedCount}</span>
          <span className="text-sm text-gray-600">Total: {messages.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-gradient-to-r from-pink-200 to-fuchsia-200 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(poppedCount / messages.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative h-96 bg-gradient-to-b from-sky-100 to-blue-200 rounded-2xl overflow-hidden">
        {balloons.map((balloon) => (
          <button
            key={balloon.id}
            onClick={() => popBalloon(balloon)}
            disabled={balloon.isPopped}
            className={`absolute transform transition-all duration-500 ${
              balloon.isPopped 
                ? 'opacity-0 scale-0' 
                : 'hover:scale-110 cursor-pointer animate-bounce-slow'
            }`}
            style={{
              left: `${balloon.x}%`,
              top: `${balloon.y}%`,
              width: `${balloon.size}px`,
              height: `${balloon.size}px`,
              animationDelay: `${balloon.animationDelay}s`
            }}
          >
            <div className={`w-full h-full rounded-full ${balloon.color} shadow-lg relative`}>
              {/* Balloon string */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
              {/* Balloon shine */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-60"></div>
            </div>
          </button>
        ))}
      </div>

      {/* Message Display */}
      {showMessage && (
        <div className="card max-w-2xl mx-auto text-center animate-pulse">
          <div className="text-4xl mb-4">💝</div>
          <p className="text-xl text-gray-700 font-medium">
            {showMessage}
          </p>
        </div>
      )}

      {/* Instructions */}
      <div className="card max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-handwriting text-gray-800 mb-2">
          How to Play
        </h3>
        <p className="text-gray-600">
          Click on the floating balloons to pop them and reveal sweet messages! 
          Each balloon contains a special message just for you! 💕
        </p>
      </div>

      {showConfetti && <Confetti />}
    </div>
  )
}

export default BalloonPop 