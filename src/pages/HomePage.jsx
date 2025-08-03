import { useState, useEffect } from 'react'

function HomePage({ onSurpriseMe, setCurrentPage }) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [greeting, setGreeting] = useState('')
  const [ageStats, setAgeStats] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0
  })

  // Update time and greeting
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      
      const hour = now.getHours()
      if (hour < 12) setGreeting('Good Morning')
      else if (hour < 17) setGreeting('Good Afternoon')
      else setGreeting('Good Evening')
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Calculate age statistics
  useEffect(() => {
    const calculateAge = () => {
      const now = new Date()
      const birthDate = new Date(now.getFullYear() - 14, 0, 1) // Assuming 14 years old
      
      const diffTime = Math.abs(now - birthDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60))
      const diffMinutes = Math.ceil(diffTime / (1000 * 60))
      
      // Calculate years and months
      const years = 14
      const months = years * 12
      
      setAgeStats({
        years: years,
        months: months,
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes
      })
    }
    
    calculateAge()
    const ageTimer = setInterval(calculateAge, 60000) // Update every minute
    
    return () => clearInterval(ageTimer)
  }, [])

  const features = [
    {
      icon: '📸',
      title: 'Memory Lane',
      description: 'Relive our precious moments together',
      color: 'from-pink-400 to-rose-400',
      path: '/memories'
    },
    {
      icon: '📖',
      title: 'My Journal',
      description: 'Write your thoughts and feelings',
      color: 'from-blue-400 to-indigo-400',
      path: '/journal'
    },
    {
      icon: '✨',
      title: 'Cheer Me Up!',
      description: 'Get personalized compliments and encouragement',
      color: 'from-purple-400 to-pink-400',
      path: '/compliments'
    },
    {
      icon: '🎮',
      title: 'Mini Games',
      description: 'Have fun with interactive games',
      color: 'from-green-400 to-teal-400',
      path: '/games'
    }
  ]

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-rose-200 rounded-full opacity-40 animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            {/* Animated Welcome Message */}
            <div className="mb-8">
              <div className="text-2xl md:text-3xl font-light text-gray-600 mb-2 animate-fade-in">
                {greeting}, Beautiful! 💕
              </div>
              <div className="text-sm text-gray-500 animate-fade-in-delay">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </div>
            </div>

            {/* Age Milestone Section */}
            <div className="mb-12">
              <div className="card max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-handwriting text-gray-800 mb-6">
                    You've Lived an Amazing Life! 🌟
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {/* Years */}
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.years}
                      </div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">Years</div>
                    </div>
                    
                    {/* Months */}
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.months.toLocaleString()}
                      </div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">Months</div>
                    </div>
                    
                    {/* Days */}
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.days.toLocaleString()}
                      </div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">Days</div>
                    </div>
                    
                    {/* Hours */}
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.hours.toLocaleString()}
                      </div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">Hours</div>
                    </div>
                    
                    {/* Minutes */}
                    <div className="group">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.minutes.toLocaleString()}
                      </div>
                      <div className="text-sm md:text-base text-gray-600 font-medium">Minutes</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-sm text-gray-500">
                    And every single moment has been precious! 💖
                  </div>
                </div>
              </div>
            </div>

            {/* Main Hero Content */}
            <div className="card max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500">
              <div className="relative">
                {/* Floating Hearts Animation */}
                <div className="absolute -top-4 -left-4 text-2xl animate-bounce">💖</div>
                <div className="absolute -top-2 -right-4 text-xl animate-bounce delay-100">💝</div>
                <div className="absolute -bottom-4 left-1/4 text-lg animate-bounce delay-200">💕</div>
                
                <div className="text-8xl md:text-9xl mb-6 animate-float">
                  ✨
                </div>
                
                <h1 className="text-5xl md:text-6xl font-handwriting text-gray-800 mb-6 leading-tight">
                  Welcome to Our
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                    Special Place
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  A digital sanctuary filled with love, memories, and little surprises 
                  <span className="block text-pink-500 font-semibold">just for you</span>
                </p>
                
                {/* Enhanced Surprise Me Button */}
                <div className="relative">
                  <button
                    className={`px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 transform ${
                      isHovered 
                        ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white shadow-2xl scale-110 rotate-1' 
                        : 'bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 text-gray-700 hover:shadow-xl hover:scale-105'
                    } relative overflow-hidden group`}
                    onClick={onSurpriseMe}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      <span className="text-2xl">🎁</span>
                      <span>Surprise Me!</span>
                      <span className="text-2xl">🎁</span>
                    </span>
                    
                    {/* Button Shine Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${
                      isHovered ? 'animate-shine' : ''
                    }`}></div>
                  </button>
                  
                  {/* Sparkle Effects */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-2 -left-2 text-yellow-400 animate-ping">✨</div>
                      <div className="absolute -top-2 -right-2 text-pink-400 animate-ping delay-100">💫</div>
                      <div className="absolute -bottom-2 left-1/3 text-purple-400 animate-ping delay-200">⭐</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Feature Cards Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-handwriting text-gray-800 mb-4">
            Explore Your Special Space
          </h2>
          <p className="text-lg text-gray-600">
            Choose your adventure or let us surprise you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative"
              onClick={() => {
                setCurrentPage(feature.path.split('/')[1])
                window.location.href = feature.path
              }}
            >
              {/* Card with enhanced hover effects */}
              <div className="card cursor-pointer transform transition-all duration-500 hover:scale-110 hover:shadow-2xl group-hover:rotate-1 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-700">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Special Message Section */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="card transform hover:scale-105 transition-all duration-500">
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 text-3xl animate-bounce">💝</div>
            <div className="absolute -top-4 -right-6 text-2xl animate-bounce delay-300">💖</div>
            <div className="absolute -bottom-6 left-1/4 text-2xl animate-bounce delay-500">💕</div>
            
            <div className="text-4xl mb-6">✨</div>
            <h2 className="text-3xl md:text-4xl font-handwriting text-gray-800 mb-6">
              A Special Message for You
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-4">
              <p>
                Every moment with you is a treasure that I hold close to my heart. 
                Your smile lights up my world, and your love makes every day special.
              </p>
              <p className="text-pink-600 font-semibold">
                You are amazing, beautiful, and so very loved! 💕
              </p>
              <p className="text-sm text-gray-500">
                This space is filled with little surprises to brighten your day and remind you of how special you are.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 0.6s ease-in-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  )
}

export default HomePage 