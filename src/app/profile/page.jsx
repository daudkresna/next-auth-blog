import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { getUserById } from "../libs/helpers/getUserById";
import { EditUserForm } from "../components/forms/editUserForm";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const id = session.user.id;
  const { email, name } = await getUserById(id);
  return (
    <div className="flex w-full justify-center items-center min-h-[calc(100dvh-70px)] bg-gray-300">
      <EditUserForm email={email} name={name} id={session.user.id} />
    </div>
  );
};

export default page;
