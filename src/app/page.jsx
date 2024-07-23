import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { LoginButton, LogoutButton } from "./components/authButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="text-center">
      <h1 className="font-extrabold">Hello World</h1>
      {session ? <LogoutButton /> : <LoginButton />}

      <h1>{JSON.stringify(session)}</h1>
    </div>
  );
}
