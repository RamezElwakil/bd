import { useState, useEffect } from 'react'

function ComplimentGenerator() {
  const [currentTime, setCurrentTime] = useState(new Date())

  // Family birthdays
  const familyBirthdays = [
    {
      name: 'Mama',
      date: new Date(new Date().getFullYear(), 7, 18), // August 18th (month is 0-indexed)
      emoji: '👩‍🦰',
      color: 'from-pink-400 to-rose-400'
    },
    {
      name: 'Papa',
      date: new Date(new Date().getFullYear(), 9, 27), // October 27th
      emoji: '👨‍🦱',
      color: 'from-blue-400 to-indigo-400'
    },
    {
      name: 'Ramez',
      date: new Date(new Date().getFullYear(), 9, 18), // October 18th
      emoji: '👦',
      color: 'from-green-400 to-teal-400'
    },
    {
      name: 'Logy',
      date: new Date(new Date().getFullYear(), 9, 1), // October 1st
      emoji: '👧',
      color: 'from-purple-400 to-pink-400'
    },
    {
      name: 'Judy',
      date: new Date(new Date().getFullYear(), 6, 26), // July 26th
      emoji: '👩',
      color: 'from-yellow-400 to-orange-400'
    }
  ]

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Calculate countdown for a birthday
  const calculateCountdown = (birthday) => {
    const now = new Date()
    let nextBirthday = new Date(birthday)
    
    // If birthday has passed this year, calculate for next year
    if (nextBirthday < now) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
    }
    
    const diffTime = nextBirthday - now
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000)
    
    return {
      days: diffDays,
      hours: diffHours,
      minutes: diffMinutes,
      seconds: diffSeconds,
      isToday: diffDays === 0 && diffHours === 0 && diffMinutes === 0,
      isPast: diffTime < 0
    }
  }

  // Sort birthdays by upcoming date
  const sortedBirthdays = familyBirthdays
    .map(birthday => ({
      ...birthday,
      countdown: calculateCountdown(birthday.date)
    }))
    .sort((a, b) => a.countdown.days - b.countdown.days)

  return (
    <div className="min-h-screen pb-20">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="card max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🎂</div>
            <h1 className="text-4xl font-handwriting text-gray-800 mb-4">
              Birthday Countdown
            </h1>
            <p className="text-lg text-gray-600">
              Countdown to our family's special days!
            </p>
          </div>
        </div>

        {/* Current Time */}
        <div className="text-center">
          <div className="card max-w-md mx-auto">
            <div className="text-2xl font-mono text-gray-700">
              {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: true 
              })}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>

        {/* Birthday Countdowns */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedBirthdays.map((person, index) => {
              const { countdown } = person
              const isNext = index === 0 && countdown.days > 0
              
              return (
                <div key={person.name} className="group">
                  <div className={`card transform transition-all duration-300 hover:scale-105 ${
                    countdown.isToday ? 'ring-4 ring-yellow-400 animate-pulse' : ''
                  }`}>
                    <div className="text-center">
                      {/* Person Info */}
                      <div className="text-4xl mb-3">{person.emoji}</div>
                      <h3 className="text-2xl font-handwriting text-gray-800 mb-2">
                        {person.name}
                      </h3>
                      <div className="text-sm text-gray-500 mb-4">
                        {person.date.toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>

                      {/* Countdown Display */}
                      {countdown.isToday ? (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-lg">
                          <div className="text-2xl font-bold mb-2">🎉 TODAY! 🎉</div>
                          <div className="text-lg">Happy Birthday!</div>
                        </div>
                      ) : countdown.isPast ? (
                        <div className="bg-gradient-to-r from-gray-400 to-gray-500 text-white p-4 rounded-lg">
                          <div className="text-lg">Birthday has passed</div>
                          <div className="text-sm">See you next year!</div>
                        </div>
                      ) : (
                        <div className={`bg-gradient-to-r ${person.color} text-white p-4 rounded-lg`}>
                          <div className="text-lg font-semibold mb-2">
                            {countdown.days} days
                          </div>
                          <div className="text-sm">
                            {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                          </div>
                          {isNext && (
                            <div className="text-xs mt-2 opacity-75">
                              Next birthday! 🎂
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


      </div>
    </div>
  )
}

export default ComplimentGenerator 