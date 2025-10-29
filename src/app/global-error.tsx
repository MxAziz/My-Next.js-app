'use client'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-600">Something went terribly wrong 😵</h1>
        <p className="text-gray-700 mt-4">{error?.message}</p>
        <button
          onClick={() => reset()}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Reload App
        </button>
      </body>
    </html>
  )
}
