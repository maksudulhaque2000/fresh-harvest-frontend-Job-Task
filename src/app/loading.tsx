import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#749B3F] mb-4"></div>
      <p className="text-4xl font-semibold text-red-800-700">Loading products...</p>
      <p className="text-md text-gray-500 mt-2">Please wait while we fetch the freshest items.</p>
    </div>
  )
}
