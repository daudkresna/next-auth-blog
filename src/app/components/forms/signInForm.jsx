"use client";
import { signIn } from "next-auth/react";
import React from "react";
import SubmitButton from "../buttons/submitButton";
import Link from "next/link";

const SignInForm = () => {
  const handleLogin = (formData) => {
    const password = formData.get("password");
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className="bg-white px-12 py-6">
      <h1 className="font-bold text-center text-xl mb-6">Sign In Page</h1>
      <form action={handleLogin} className="flex flex-col gap-4">
        <label htmlFor="email" className="text-sm text-slate-500">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="your-email"
          className="border-2 border-slate-300 p-2 rounded-lg"
        />
        <label htmlFor="password" className="text-sm text-slate-500">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 border-slate-300 p-2 rounded-lg"
        />
        <SubmitButton title="Sign In" />
      </form>
      <Link href="/register">
        <h3 className="mt-4 text-xs text-center text-slate-400 hover:text-slate-600">
          belum punya akun? buat disini
        </h3>
      </Link>
    </div>
  );
};

export default SignInForm;
