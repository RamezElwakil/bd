import { Link, useLocation } from 'react-router-dom'

function Navigation({ currentPage, setCurrentPage }) {
  const location = useLocation()

  const navItems = [
    { id: 'home', name: 'Home', path: '/', icon: '🏠' },
    { id: 'memories', name: 'Memories', path: '/memories', icon: '📸' },
    { id: 'journal', name: 'Journal', path: '/journal', icon: '📝' },
    { id: 'compliments', name: 'Cheer Up', path: '/compliments', icon: '💝' },
    { id: 'games', name: 'Games', path: '/games', icon: '🎮' },
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2 px-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-pink-500 bg-pink-50 scale-110'
                  : 'text-gray-600 hover:text-pink-400 hover:scale-105'
              }`}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation 