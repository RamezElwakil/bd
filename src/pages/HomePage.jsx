import { useState, useEffect } from 'react'

function HomePage({ onSurpriseMe, setCurrentPage }) {
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

  // Calculate age statistics - more accurate calculation
  useEffect(() => {
    const calculateAge = () => {
      const now = new Date()
      // Set actual birth date - July 26, 2011
      const birthDate = new Date(2011, 6, 26) // Note: month is 0-indexed, so 6 = July
      
      // Calculate exact age
      const diffTime = Math.abs(now - birthDate)
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
      const diffMinutes = Math.floor(diffTime / (1000 * 60))
      const diffSeconds = Math.floor(diffTime / 1000)
      
      // Calculate years more accurately
      const years = Math.floor(diffDays / 365.25)
      const months = Math.floor(diffDays / 30.44)
      const weeks = Math.floor(diffDays / 7)
      
      setAgeStats({
        years: years,
        months: months,
        weeks: weeks,
        days: diffDays,
        hours: diffHours,
        minutes: diffMinutes,
        seconds: diffSeconds
      })
    }
    
    calculateAge()
    const ageTimer = setInterval(calculateAge, 1000) // Update every second for more dynamic display
    
    return () => clearInterval(ageTimer)
  }, [])

  const features = [
    {
      icon: '📸',
      title: 'Memory Lane',
      description: 'Check out these embarrassing photos I dug up',
      color: 'from-blue-400 to-indigo-500',
      path: '/memories'
    },
    {
      icon: '📖',
      title: 'My Journal',
      description: 'Write stuff down, I promise not to read it',
      color: 'from-indigo-400 to-purple-500',
      path: '/journal'
    },
    {
      icon: '🎂',
      title: 'Birthday Countdown',
      description: 'See upcoming family birthdays',
      color: 'from-purple-400 to-blue-500',
      path: '/compliments'
    },
    {
      icon: '🎮',
      title: 'Mini Games',
      description: 'I bet I can still beat you at these',
      color: 'from-blue-500 to-indigo-600',
      path: '/games'
    }
  ]

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      {/* Floating Background Elements - Blue Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-indigo-100 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-blue-100 rounded-full opacity-20 animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            {/* Animated Welcome Message - Brother's Style */}
            <div className="mb-8">
              <div className="text-2xl md:text-3xl font-light text-gray-700 mb-2 animate-fade-in flex items-center justify-center">
                <span className="mr-2">{greeting},</span>
                <span className="font-medium bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Sis!</span>
                <span className="ml-2 text-2xl">🤜🤛</span>
              </div>
              <div className="text-sm text-gray-500 animate-fade-in-delay flex items-center justify-center">
                <span className="mr-1">It's</span>
                <span className="font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true 
                  })}
                </span>
                <span className="ml-1">on your special day</span>
              </div>
            </div>

            {/* Age Milestone Section - Redesigned with brother's perspective */}
            <div className="mb-12">
              <div className="card max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-20"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-400 opacity-20"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-400 opacity-20"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
                    <span className="font-handwriting">The Epic Journey of</span>
                    <span className="block text-3xl md:text-5xl bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mt-1">My Little Sister</span>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 italic">"From annoying me as a kid to becoming someone I'm actually proud of"</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {/* Years */}
                    <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.years}
                      </div>
                      <div className="text-sm md:text-base text-gray-700 font-medium">Years of Existence</div>
                    </div>
                    
                    {/* Weeks */}
                    <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.weeks?.toLocaleString() || Math.floor(ageStats.days/7).toLocaleString()}
                      </div>
                      <div className="text-sm md:text-base text-gray-700 font-medium">Weeks of Chaos</div>
                    </div>
                    
                    {/* Days */}
                    <div className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.days.toLocaleString()}
                      </div>
                      <div className="text-sm md:text-base text-gray-700 font-medium">Days of Adventure</div>
                    </div>
                    
                    {/* Hours */}
                    <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {ageStats.hours.toLocaleString()}
                      </div>
                      <div className="text-sm md:text-base text-gray-700 font-medium">Hours of Mayhem</div>
                    </div>
                  </div>
                  
                  {/* Live counter section */}
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-4 shadow-inner mt-4">
                    <p className="text-gray-700 mb-2 font-medium">Your life in real-time:</p>
                    <div className="flex justify-center space-x-2 text-xl font-mono">
                      <div className="bg-white rounded-md px-2 py-1 shadow">{Math.floor(ageStats.seconds / 86400).toString().padStart(2, '0')}</div>
                      <div className="text-gray-700">:</div>
                      <div className="bg-white rounded-md px-2 py-1 shadow">{Math.floor((ageStats.seconds % 86400) / 3600).toString().padStart(2, '0')}</div>
                      <div className="text-gray-700">:</div>
                      <div className="bg-white rounded-md px-2 py-1 shadow">{Math.floor((ageStats.seconds % 3600) / 60).toString().padStart(2, '0')}</div>
                      <div className="text-gray-700">:</div>
                      <div className="bg-white rounded-md px-2 py-1 shadow animate-pulse">{(ageStats.seconds % 60).toString().padStart(2, '0')}</div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">days : hours : minutes : seconds</p>
                  </div>
                  
                  <div className="mt-6 text-gray-700 font-medium">
                    And somehow, you've managed to become pretty awesome along the way.
                    <span className="block text-sm text-blue-600 mt-1 font-normal">- Your occasionally impressed brother</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Hero Content Removed */}
          </div>
        </div>
      </div>

      {/* Enhanced Feature Cards Section - Brother's Style */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Check Out What I Made</span>
          </h2>
          <p className="text-lg text-gray-700">
            Click around and see what's cool, or hit that surprise button if you're feeling lucky
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

      {/* Special Message Section Removed */}

      {/* Custom CSS for animations */}
      <style>{`
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