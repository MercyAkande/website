export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">AF</div>
            <div>
              <h1 className="text-lg font-semibold">Automated Feeder — Project</h1>
              <p className="text-sm text-gray-500">Computer vision + ML for fair, individualized pet feeding</p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-3">Project Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          An automated feeder that uses computer vision and machine learning to distinguish between different pets in the same household. 
          Each pet is recognized individually, and the system dispenses the right food, ensuring fairness and tailored nutrition.
        </p>
      </main>
    </div>
  )
}
