import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    // Hero Section
    <div className="text-white flex justify-center items-center h-[calc(100dvh-70px)] bg-gradient-to-r from-[#7f7fd5] via-[#86a8e7] to-[#91eae4]">
      <div className="text-center">
        <h1 className="font-extrabold text-7xl">BLOGUS</h1>
        <h1 className="font-semibold text-2xl">
          Posting hal yang kau pikirkan!
        </h1>
      </div>
    </div>
  );
}
