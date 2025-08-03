function FloatingDoodles() {
  const doodles = [
    { emoji: '🌸', top: '10%', left: '5%', delay: '0s', animation: 'animate-float-1', size: 'text-2xl' },
    { emoji: '✨', top: '20%', right: '10%', delay: '1s', animation: 'animate-float-2', size: 'text-3xl' },
    { emoji: '💕', top: '60%', left: '8%', delay: '2s', animation: 'animate-float-3', size: 'text-2xl' },
    { emoji: '🌟', top: '80%', right: '15%', delay: '3s', animation: 'animate-float-1', size: 'text-3xl' },
    { emoji: '🎀', top: '40%', left: '15%', delay: '4s', animation: 'animate-float-2', size: 'text-2xl' },
    { emoji: '💖', top: '70%', right: '5%', delay: '5s', animation: 'animate-float-3', size: 'text-3xl' },
    { emoji: '🌺', top: '30%', right: '20%', delay: '6s', animation: 'animate-float-1', size: 'text-2xl' },
    { emoji: '💫', top: '90%', left: '20%', delay: '7s', animation: 'animate-float-2', size: 'text-3xl' },
    { emoji: '🦋', top: '15%', left: '25%', delay: '8s', animation: 'animate-float-3', size: 'text-xl' },
    { emoji: '🌈', top: '75%', left: '30%', delay: '9s', animation: 'animate-float-1', size: 'text-2xl' },
    { emoji: '🎈', top: '50%', right: '25%', delay: '10s', animation: 'animate-float-2', size: 'text-xl' },
    { emoji: '🍭', top: '85%', right: '30%', delay: '11s', animation: 'animate-float-3', size: 'text-2xl' },
    { emoji: '🎪', top: '25%', left: '40%', delay: '12s', animation: 'animate-float-1', size: 'text-xl' },
    { emoji: '🎨', top: '65%', right: '40%', delay: '13s', animation: 'animate-float-2', size: 'text-2xl' },
    { emoji: '🎭', top: '45%', left: '50%', delay: '14s', animation: 'animate-float-3', size: 'text-xl' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {doodles.map((doodle, index) => (
        <div
          key={index}
          className={`absolute ${doodle.animation} ${doodle.size} opacity-25 hover:opacity-60 transition-opacity duration-300`}
          style={{
            top: doodle.top,
            left: doodle.left,
            right: doodle.right,
            animationDelay: doodle.delay,
          }}
        >
          {doodle.emoji}
        </div>
      ))}
      
      {/* Additional animated elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-200 rounded-full animate-sparkle opacity-40"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-pink-150 rounded-full animate-sparkle opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-pink-100 rounded-full animate-sparkle opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-pink-50 rounded-full animate-sparkle opacity-40" style={{animationDelay: '3s'}}></div>
      
      {/* Floating hearts */}
      <div className="absolute top-1/6 right-1/6 text-pink-300 animate-heartbeat opacity-40">💗</div>
      <div className="absolute top-2/3 left-1/6 text-pink-250 animate-heartbeat opacity-40" style={{animationDelay: '1s'}}>💖</div>
      <div className="absolute top-1/2 right-1/2 text-pink-200 animate-heartbeat opacity-40" style={{animationDelay: '2s'}}>💝</div>
    </div>
  )
}

export default FloatingDoodles 