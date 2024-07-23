"use client";

import { createUser } from "@/app/actions/signUpAction";
import React, { useState } from "react";

const RegisterForm = () => {
  const [responses, setResponse] = useState("");
  return (
    <div className="bg-white px-12 py-6">
      <h1 className="font-bold text-center text-xl mb-6">Register Page</h1>
      <form
        action={async (formData) => {
          const valUser = await createUser(formData);
          setResponse(valUser);
          console.log(responses);
        }}
        className="flex flex-col gap-4"
      >
        <label htmlFor="name" className="text-sm text-slate-500">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="your-name"
          className="border-2 border-slate-300 p-2 rounded-lg"
        />
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
          Register
        </button>
        <pre className="text-sm font-bold text-red-400">{responses}</pre>
      </form>
    </div>
  );
};

export default RegisterForm;
