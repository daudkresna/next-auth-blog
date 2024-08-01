import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { LoginButton, LogoutButton } from "./authButton";
import NavItem from "./navItem";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="px-8 py-2 w-full h-[70px] flex justify-between items-center">
      <div>
        <Link href="/" className="text-xl">
          GouBLOG
        </Link>
      </div>
      <div className="w-full">
        <ul className="md:flex sm:flex justify-end items-center gap-8 hidden">
          {session ? (
            <>
              <NavItem title="Posts" link="posts" />
              <NavItem title="My Posts" link="myposts" />
              <NavItem title="Profile" link="profile" />
            </>
          ) : (
            <NavItem title="About" link="about" />
          )}

          <li>{session ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
