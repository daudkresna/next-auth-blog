import React from "react";
import RegisterForm from "../components/forms/registerForm";

const page = () => {
  return (
    <div className="min-h-[calc(100dvh-70px)] w-full flex justify-center items-center bg-gradient-to-r from-[#7f7fd5] via-[#86a8e7] to-[#91eae4]">
      <RegisterForm />
    </div>
  );
};

export default page;
