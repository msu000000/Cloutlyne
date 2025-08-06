import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Generate() {
  const [topic, setTopic] = useState('')
  const router = useRouter()

  const handleGenerate = async () => {
    const res = await axios.post('/api/generate', { topic })
    const hook = res.data.hook
    router.push(`/result?hook=${encodeURIComponent(hook)}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Enter Topic</h1>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="e.g. AI tools for marketing"
        className="border p-2 rounded w-80 mb-4"
      />
      <button onClick={handleGenerate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate
      </button>
    </div>
  )
}
