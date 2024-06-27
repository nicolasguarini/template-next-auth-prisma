import { auth, signIn, signOut } from "@/lib/auth"

export async function AuthButton() {
  const session = await auth()

  if (!session?.user) return (
    <form action={async () => {
      "use server"
      await signIn()
    }}>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</button>
    </form>
  ) 
  
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>Signed in: {session.user.email}</div>
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign out</button>
      </form>
    </div>
  )
}