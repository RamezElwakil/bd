import { useState, useEffect } from 'react'

function CustomJournal() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [showMonthPicker, setShowMonthPicker] = useState(false)
  const [diaryEntries, setDiaryEntries] = useState({})
  const [moodColors, setMoodColors] = useState({})
  const [comments, setComments] = useState({})

  // Mood color options
  const moodOptions = [
    { name: 'Amazing', color: 'bg-green-500', text: 'text-green-500', border: 'border-green-500' },
    { name: 'Great', color: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-500' },
    { name: 'Good', color: 'bg-yellow-500', text: 'text-yellow-500', border: 'border-yellow-500' },
    { name: 'Okay', color: 'bg-orange-500', text: 'text-orange-500', border: 'border-orange-500' },
    { name: 'Bad', color: 'bg-red-500', text: 'text-red-500', border: 'border-red-500' },
    { name: 'Terrible', color: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500' }
  ]

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    
    const days = []
    // Add empty days for padding
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }

  // Get month name
  const getMonthName = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  // Get date key for storage
  const getDateKey = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  }

  // Load saved data
  useEffect(() => {
    const savedDiary = localStorage.getItem('diaryEntries')
    const savedMoods = localStorage.getItem('moodColors')
    const savedComments = localStorage.getItem('dayComments')
    
    if (savedDiary) setDiaryEntries(JSON.parse(savedDiary))
    if (savedMoods) setMoodColors(JSON.parse(savedMoods))
    if (savedComments) setComments(JSON.parse(savedComments))
  }, [])

  // Save data
  const saveData = (newDiary, newMoods, newComments) => {
    localStorage.setItem('diaryEntries', JSON.stringify(newDiary))
    localStorage.setItem('moodColors', JSON.stringify(newMoods))
    localStorage.setItem('dayComments', JSON.stringify(newComments))
  }

  // Handle mood selection
  const handleMoodSelect = (mood) => {
    if (!selectedDate) return
    
    const dateKey = getDateKey(selectedDate)
    const newMoods = { ...moodColors, [dateKey]: mood }
    setMoodColors(newMoods)
    saveData(diaryEntries, newMoods, comments)
  }

  // Handle diary entry
  const handleDiaryEntry = (entry) => {
    if (!selectedDate) return
    
    const dateKey = getDateKey(selectedDate)
    const newDiary = { ...diaryEntries, [dateKey]: entry }
    setDiaryEntries(newDiary)
    saveData(newDiary, moodColors, comments)
  }

  // Handle comment
  const handleComment = (comment) => {
    if (!selectedDate) return
    
    const dateKey = getDateKey(selectedDate)
    const newComments = { ...comments, [dateKey]: comment }
    setComments(newComments)
    saveData(diaryEntries, moodColors, newComments)
  }

  // Navigate months
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate)
    if (direction === 'next') {
      newDate.setMonth(newDate.getMonth() + 1)
    } else {
      newDate.setMonth(newDate.getMonth() - 1)
    }
    setCurrentDate(newDate)
  }

  // Check if date is today
  const isToday = (day) => {
    const today = new Date()
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear()
  }

  // Check if date is selected
  const isSelected = (day) => {
    return selectedDate && 
           day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear()
  }

  const days = getDaysInMonth(currentDate)
  const selectedDateKey = selectedDate ? getDateKey(selectedDate) : null
  const selectedMood = selectedDateKey ? moodColors[selectedDateKey] : null
  const selectedDiary = selectedDateKey ? diaryEntries[selectedDateKey] : ''
  const selectedComment = selectedDateKey ? comments[selectedDateKey] : ''

  return (
    <div className="min-h-screen pb-20">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="card max-w-2xl mx-auto">
            <div className="text-6xl mb-4">📖</div>
            <h1 className="text-4xl font-handwriting text-gray-800 mb-4">
              My Daily Journal
            </h1>
            <p className="text-lg text-gray-600">
              Track your mood and write about your day
            </p>
          </div>
        </div>

        {/* Month Navigation */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => changeMonth('prev')}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                ←
              </button>
              <h2 className="text-2xl font-handwriting text-gray-800">
                {getMonthName(currentDate)}
              </h2>
              <button 
                onClick={() => changeMonth('next')}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                →
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-6">
              {/* Day headers */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {days.map((day, index) => {
                if (!day) {
                  return <div key={index} className="p-2"></div>
                }

                const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                const dateKey = getDateKey(date)
                const mood = moodColors[dateKey]
                const hasEntry = diaryEntries[dateKey] || comments[dateKey]

                return (
                  <div key={index} className="relative">
                                         <button
                       onClick={() => setSelectedDate(date)}
                       className={`w-full p-2 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                         isToday(day) 
                           ? 'border-pink-400 bg-pink-50' 
                           : isSelected(day)
                           ? 'border-blue-400 bg-blue-50'
                           : mood
                           ? `${mood.color} border-white text-white`
                           : 'border-gray-200 bg-white hover:border-gray-300'
                       }`}
                     >
                       <div className="text-center">
                         <div className={`text-sm font-medium ${mood ? 'text-white' : 'text-gray-700'}`}>{day}</div>
                         {hasEntry && (
                           <div className={`text-xs mt-1 ${mood ? 'text-white' : 'text-gray-500'}`}>📝</div>
                         )}
                       </div>
                     </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Selected Day Details */}
        {selectedDate && (
          <div className="max-w-4xl mx-auto px-4">
            <div className="card">
              <div className="mb-6">
                <h3 className="text-2xl font-handwriting text-gray-800 mb-2">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                
                {/* Mood Selection */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">How was your day?</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {moodOptions.map((mood) => (
                      <button
                        key={mood.name}
                        onClick={() => handleMoodSelect(mood)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                          selectedMood?.name === mood.name
                            ? `${mood.border} ${mood.color} text-white`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-medium">{mood.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Comment */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Quick Comment</h4>
                  <textarea
                    value={selectedComment}
                    onChange={(e) => handleComment(e.target.value)}
                    placeholder="Write a quick comment about your day..."
                    className="w-full p-3 border-2 border-gray-200 rounded-lg resize-none focus:border-pink-300 focus:outline-none"
                    rows="2"
                  />
                </div>

                {/* Diary Entry */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">Diary Entry</h4>
                  <textarea
                    value={selectedDiary}
                    onChange={(e) => handleDiaryEntry(e.target.value)}
                    placeholder="Write about your day in detail..."
                    className="w-full p-3 border-2 border-gray-200 rounded-lg resize-none focus:border-pink-300 focus:outline-none"
                    rows="6"
                  />
                </div>

                {/* Save Button */}
                <button
                  onClick={() => setSelectedDate(null)}
                  className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Month Picker Button */}
        <div className="text-center">
          <button
            onClick={() => setShowMonthPicker(!showMonthPicker)}
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            {showMonthPicker ? 'Hide Month Picker' : 'Choose Different Month'}
          </button>
        </div>

        {/* Month Picker */}
        {showMonthPicker && (
          <div className="max-w-4xl mx-auto px-4">
            <div className="card">
              <h3 className="text-xl font-handwriting text-gray-800 mb-4">Choose Month</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {Array.from({ length: 12 }, (_, i) => {
                  const monthDate = new Date(currentDate.getFullYear(), i, 1)
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentDate(monthDate)
                        setShowMonthPicker(false)
                      }}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                        currentDate.getMonth() === i
                          ? 'border-pink-400 bg-pink-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {monthDate.toLocaleDateString('en-US', { month: 'short' })}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomJournal 