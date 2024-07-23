import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { LoginButton, LogoutButton } from "./authButton";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="px-8 py-2 w-full h-[70px] flex justify-between items-center">
      <div>
        <Link href="/">GouBLOG</Link>
      </div>
      <div className="w-full">
        <ul className="flex justify-end items-center gap-8">
          {session ? (
            <>
              <li>
                <Link
                  href="/posts"
                  className="hover:text-slate-400 ease-in-out duration-300"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/myposts"
                  className="hover:text-slate-400 ease-in-out duration-300"
                >
                  My Posts
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-slate-400 ease-in-out duration-300"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-slate-400 ease-in-out duration-300"
                >
                  About
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/about"
                className="hover:text-slate-400 ease-in-out duration-300"
              >
                About
              </Link>
            </li>
          )}

          <li>{session ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
