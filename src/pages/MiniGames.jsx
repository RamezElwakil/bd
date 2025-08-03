import { useState } from 'react'
import FlappyBirdGame from '../components/FlappyBirdGame'
import MatchingGame from '../components/games/MatchingGame'

function MiniGames() {
  const [currentGame, setCurrentGame] = useState('menu')

  if (currentGame === 'flappy') {
    return (
      <div className="min-h-screen pb-20">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="card max-w-2xl mx-auto">
              <div className="text-6xl mb-4">🎮</div>
              <h1 className="text-4xl font-handwriting text-gray-800 mb-4">
                Flappy Sister
              </h1>
              <p className="text-lg text-gray-600">
                Help your sister fly through the pipes!
              </p>
            </div>
          </div>

          {/* Game Container */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="card">
              <div className="text-center p-4">
                <button
                  onClick={() => setCurrentGame('menu')}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors mb-4"
                >
                  ← Back to Games
                </button>
                
                <FlappyBirdGame />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentGame === 'matching') {
    return (
      <div className="min-h-screen pb-20">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="card max-w-2xl mx-auto">
              <div className="text-6xl mb-4">🖼️</div>
              <h1 className="text-4xl font-handwriting text-gray-800 mb-4">
                Match the Pictures!
              </h1>
              <p className="text-lg text-gray-600">
                Find matching pairs of our silly pictures!
              </p>
            </div>
          </div>

          {/* Game Container */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="card">
              <div className="text-center p-4">
                <button
                  onClick={() => setCurrentGame('menu')}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors mb-4"
                >
                  ← Back to Games
                </button>
                
                <MatchingGame />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main games menu
  return (
    <div className="min-h-screen pb-20">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="card max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🎮</div>
            <h1 className="text-4xl font-handwriting text-gray-800 mb-4">
              Mini Games
            </h1>
            <p className="text-lg text-gray-600">
              Have fun with these interactive games!
            </p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Flappy Sister */}
            <div 
              className="card cursor-pointer hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
              onClick={() => setCurrentGame('flappy')}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🦅</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Flappy Sister</h3>
                <p className="text-gray-600">Help your sister fly through the pipes!</p>
              </div>
            </div>

            {/* Match the Pictures */}
            <div 
              className="card cursor-pointer hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
              onClick={() => setCurrentGame('matching')}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🧩</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Match the Pictures</h3>
                <p className="text-gray-600">Test your memory with matching pictures!</p>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="card opacity-50">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">More Games Coming!</h3>
                <p className="text-gray-600">Stay tuned for more fun games!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniGames 