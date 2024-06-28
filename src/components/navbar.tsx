import { Session } from "next-auth";
import AuthButton from "./client-auth-button";

export default function Navbar(props: { session: Session | null }) {
  return (
    <nav className="flex items-center justify-between gap-4 p-8">
      <a href="/" className="text-2xl font-bold">
        Home
      </a>
      <AuthButton session={props.session} />
    </nav>
  );
}