import { useState } from 'react'

function TestComponent() {
  const [isVisible, setIsVisible] = useState(true)
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`])
  }

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Component Test
      </h2>
      
      <div className="space-y-4">
        {/* Visibility Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            {isVisible ? 'Hide' : 'Show'} Content
          </button>
          <span className="text-sm text-gray-600">
            {isVisible ? 'Content is visible' : 'Content is hidden'}
          </span>
        </div>

        {/* Conditional Rendering */}
        {isVisible && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Dynamic Content
            </h3>
            <p className="text-gray-600">
              This content appears and disappears based on the toggle button above.
            </p>
          </div>
        )}

        {/* List Management */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            List Management
          </h3>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <span className="text-gray-700">{item}</span>
                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-2 py-1 rounded transition-colors duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addItem}
            className="mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestComponent 