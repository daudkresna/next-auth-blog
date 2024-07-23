"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="px-4 py-2 bg-green-300 rounded-md my-2 font-semibold hover:bg-green-400 ease-in-out duration-300"
    >
      Log In
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-green-300 rounded-md my-2 font-semibold hover:bg-green-400 ease-in-out duration-300"
    >
      Log Out
    </button>
  );
};
