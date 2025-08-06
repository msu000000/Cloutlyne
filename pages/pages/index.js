import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const router = useRouter()

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' })
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome to Cloutline</h1>
        <button onClick={signInWithGoogle} className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign in with Google
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome {session.user.email}</h1>
      <button
        onClick={() => router.push('/generate')}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Generate Hook
      </button>
      <button
        onClick={() => supabase.auth.signOut()}
        className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}
