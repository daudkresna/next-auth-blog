import React from "react";
import SignInForm from "../components/forms/signInForm";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-[calc(100dvh-70px)] w-full flex justify-center items-center bg-gradient-to-r from-[#7f7fd5] via-[#86a8e7] to-[#91eae4]">
      <div>
        <SignInForm title="Sign In" />
      </div>
    </div>
  );
};

export default page;
