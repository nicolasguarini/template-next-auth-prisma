import { AuthButton } from "@/components/server-auth-button";
import { getAllUsers } from "@/server/userQueries";
import Image from "next/image";

export default async function Home() {
  const users = await getAllUsers()

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h1 className="text-4xl font-bold">Template with Tailwind, TypeScript, Prisma, and Auth.js.</h1>

      <AuthButton />

      <div>
        <h2 className="text-2xl font-bold py-2">GetAllUsers() Query</h2>

        {users?.map((user) => (
          <div key={user.id}>
            <h2>{user.name} - {user.email}</h2>
          </div>
        ))}
      </div>

      
    </main>
  );
}
