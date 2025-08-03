import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MemoryLane from './pages/MemoryLane'
import CustomJournal from './pages/CustomJournal'
import ComplimentGenerator from './pages/ComplimentGenerator'
import MiniGames from './pages/MiniGames'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const pages = [
    { id: 'home', name: 'Home', path: '/' },
    { id: 'memories', name: 'Memory Lane', path: '/memories' },
    { id: 'journal', name: 'My Journal', path: '/journal' },
    { id: 'compliments', name: 'Cheer Me Up!', path: '/compliments' },
    { id: 'games', name: 'Mini Games', path: '/games' }
  ]

  const getRandomPage = () => {
    const availablePages = pages.filter(page => page.id !== 'home')
    const randomIndex = Math.floor(Math.random() * availablePages.length)
    return availablePages[randomIndex]
  }

  const handleSurpriseMe = () => {
    const randomPage = getRandomPage()
    setCurrentPage(randomPage.id)
    window.location.href = randomPage.path
  }

  return (
    <Router>
      <div className="min-h-screen animated-bg relative overflow-hidden">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onSurpriseMe={handleSurpriseMe}
                  setCurrentPage={setCurrentPage}
                />
              } 
            />
            <Route 
              path="/memories" 
              element={<MemoryLane />} 
            />
            <Route 
              path="/journal" 
              element={<CustomJournal />} 
            />
            <Route 
              path="/compliments" 
              element={<ComplimentGenerator />} 
            />
            <Route 
              path="/games" 
              element={<MiniGames />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </Router>
  )
}

export default App 