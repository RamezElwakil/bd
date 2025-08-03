import { useState } from 'react'

function MemoryLane() {
  // Real memories with actual pictures from jbd folder
  const memories = [
    {
      id: 1,
      image: '/jbd/Screenshot 2025-08-01 155736.png',
      borderColor: 'border-pink-400'
    },
    {
      id: 2,
      image: '/jbd/Screenshot 2025-08-01 155339.png',
      borderColor: 'border-blue-400'
    },
    {
      id: 3,
      image: '/jbd/Screenshot 2025-08-01 155345.png',
      borderColor: 'border-purple-400'
    },
    {
      id: 4,
      image: '/jbd/Screenshot 2025-08-01 153252.png',
      borderColor: 'border-green-400'
    },
    {
      id: 5,
      image: '/jbd/Screenshot 2025-08-01 153128.png',
      borderColor: 'border-yellow-400'
    },
    {
      id: 6,
      image: '/jbd/Screenshot 2025-08-01 153118.png',
      borderColor: 'border-rose-400'
    },
    {
      id: 7,
      image: '/jbd/Screenshot 2025-08-01 153015.png',
      borderColor: 'border-indigo-400'
    },
    {
      id: 8,
      image: '/jbd/Screenshot 2025-08-01 152925.png',
      borderColor: 'border-teal-400'
    },
    {
      id: 9,
      image: '/jbd/Screenshot 2025-08-01 152828.png',
      borderColor: 'border-orange-400'
    },
    {
      id: 10,
      image: '/jbd/Screenshot 2025-08-01 151929.png',
      borderColor: 'border-pink-500'
    },
    {
      id: 11,
      image: '/jbd/Screenshot 2025-08-01 151750.png',
      borderColor: 'border-purple-500'
    },
    {
      id: 12,
      image: '/jbd/Screenshot 2025-08-01 151648.png',
      borderColor: 'border-blue-500'
    },
    {
      id: 13,
      image: '/jbd/Screenshot 2025-08-01 151508.png',
      borderColor: 'border-green-500'
    },
    {
      id: 14,
      image: '/jbd/Screenshot 2025-08-01 151433.png',
      borderColor: 'border-yellow-500'
    },
    {
      id: 15,
      image: '/jbd/Screenshot 2025-08-01 151416.png',
      borderColor: 'border-rose-500'
    },
    {
      id: 16,
      image: '/jbd/Screenshot 2025-08-01 151400.png',
      borderColor: 'border-indigo-500'
    },
    {
      id: 17,
      image: '/jbd/Screenshot 2025-08-01 151103.png',
      borderColor: 'border-teal-500'
    },
    {
      id: 18,
      image: '/jbd/Screenshot 2025-08-01 150919.png',
      borderColor: 'border-orange-500'
    },
    {
      id: 19,
      image: '/jbd/Screenshot 2025-08-01 150152.png',
      borderColor: 'border-pink-600'
    },
    {
      id: 20,
      image: '/jbd/Screenshot 2025-08-01 145713.png',
      borderColor: 'border-purple-600'
    },
    {
      id: 21,
      image: '/jbd/Screenshot 2025-08-01 145703.png',
      borderColor: 'border-blue-600'
    },
    {
      id: 22,
      image: '/jbd/Screenshot 2025-08-01 145640.png',
      borderColor: 'border-green-600'
    },
    {
      id: 23,
      image: '/jbd/٢٠١٥٠٣٠٧_١٩٣٨٢٣.jpg',
      borderColor: 'border-yellow-600'
    },
    { id: 24, image: '/picccc/Screenshot 2025-08-03 074213.png', borderColor: 'border-red-400' },
    { id: 25, image: '/picccc/Screenshot 2025-08-03 074126.png', borderColor: 'border-pink-400' },
    { id: 26, image: '/picccc/Screenshot 2025-08-03 074101.png', borderColor: 'border-purple-400' },
    { id: 27, image: '/picccc/Screenshot 2025-08-03 073730.png', borderColor: 'border-blue-400' },
    { id: 28, image: '/picccc/Screenshot 2025-08-03 073645.png', borderColor: 'border-green-400' },
    { id: 29, image: '/picccc/Screenshot 2025-08-03 073541.png', borderColor: 'border-yellow-400' },
    { id: 30, image: '/picccc/Screenshot 2025-08-03 073524.png', borderColor: 'border-orange-400' },
    { id: 31, image: '/picccc/Screenshot 2025-08-03 073516.png', borderColor: 'border-pink-500' },
    { id: 32, image: '/picccc/Screenshot 2025-08-03 073445.png', borderColor: 'border-purple-500' },
    { id: 33, image: '/picccc/Screenshot 2025-08-03 073249.png', borderColor: 'border-blue-500' },
    { id: 34, image: '/picccc/Screenshot 2025-08-03 073210.png', borderColor: 'border-green-500' },
    { id: 35, image: '/picccc/Screenshot 2025-08-03 072923.png', borderColor: 'border-yellow-500' },
    { id: 36, image: '/picccc/Screenshot 2025-08-03 072913.png', borderColor: 'border-orange-500' },
    { id: 37, image: '/picccc/Screenshot 2025-08-03 072852.png', borderColor: 'border-red-500' },
    { id: 38, image: '/picccc/Screenshot 2025-08-03 072808.png', borderColor: 'border-pink-600' },
    { id: 39, image: '/picccc/Screenshot 2025-08-03 072759.png', borderColor: 'border-purple-600' },
    { id: 40, image: '/picccc/Screenshot 2025-08-03 072747.png', borderColor: 'border-blue-600' },
    { id: 41, image: '/picccc/Screenshot 2025-08-03 072724.png', borderColor: 'border-green-600' },
    { id: 42, image: '/picccc/Screenshot 2025-08-03 072716.png', borderColor: 'border-yellow-600' },
    { id: 43, image: '/picccc/Screenshot 2025-08-03 072703.png', borderColor: 'border-orange-600' },
    { id: 44, image: '/picccc/Screenshot 2025-08-03 072646.png', borderColor: 'border-red-600' },
    { id: 45, image: '/picccc/Screenshot 2025-08-03 072547.png', borderColor: 'border-pink-700' },
    { id: 46, image: '/picccc/Screenshot 2025-08-03 072204.png', borderColor: 'border-purple-700' },
    { id: 47, image: '/picccc/Screenshot 2025-08-03 072100.png', borderColor: 'border-blue-700' },
    { id: 48, image: '/picccc/Screenshot 2025-08-03 072024.png', borderColor: 'border-green-700' },
    { id: 49, image: '/picccc/Screenshot 2025-08-03 072016.png', borderColor: 'border-yellow-700' },
    { id: 50, image: '/picccc/Screenshot 2025-08-03 072012.png', borderColor: 'border-orange-700' },
    { id: 51, image: '/picccc/Screenshot 2025-08-03 072001.png', borderColor: 'border-red-700' },
    { id: 52, image: '/picccc/Screenshot 2025-08-03 071952.png', borderColor: 'border-pink-800' }
  ]

  return (
    <div className="min-h-screen pb-20">
      {/* Top Title Section */}
      <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-rose-100 py-12 mb-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-7xl mb-6 animate-bounce">📸</div>
          <h1 className="text-5xl md:text-6xl font-handwriting text-gray-800 mb-4">
            Memory Lane
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Some silly photos of yours! 😄
          </p>
          <div className="text-lg text-gray-500">
            Scroll down to see all the fun! 🎉
          </div>
        </div>
      </div>

      <div className="space-y-8">

        {/* Picture Gallery */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {memories.map((memory) => (
              <div key={memory.id} className="group">
                <div className={`relative overflow-hidden rounded-lg ${memory.borderColor} border-4 shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  <img 
                    src={memory.image} 
                    alt={`Memory ${memory.id}`}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoryLane