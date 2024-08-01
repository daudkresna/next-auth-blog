"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ title }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-400 text-white p-2 rounded-sm hover:bg-blue-500 ease-linear duration-300"
      disabled={pending}
    >
      {pending ? "Loading..." : title}
    </button>
  );
};

export default SubmitButton;
