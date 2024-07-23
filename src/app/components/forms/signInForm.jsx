"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignInForm = () => {
  return (
    <div className="bg-white px-12 py-6">
      <h1 className="font-bold text-center text-xl mb-6">Sign In Page</h1>
      <form
        action={(formData) => {
          signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: true,
            callbackUrl: "/",
          });
        }}
        className="flex flex-col gap-4"
      >
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
        <button type="submit" className="bg-blue-300 p-2 rounded-sm">
          Sign In
        </button>
        {/* <pre className="text-sm font-bold text-red-400">{responses}</pre> */}
      </form>
    </div>
  );
};

export default SignInForm;
