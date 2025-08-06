import { useRouter } from 'next/router'

export default function Result() {
  const router = useRouter()
  const { hook } = router.query

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Viral Hook</h1>
      <p className="bg-white p-4 rounded shadow w-full max-w-xl text-center">{hook}</p>
      <button onClick={() => router.push('/generate')} className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
        Generate Another
      </button>
    </div>
  )
}
