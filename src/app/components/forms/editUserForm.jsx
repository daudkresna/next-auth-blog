"use client";

import React, { useState } from "react";
import SubmitButton from "../buttons/submitButton";
import { editUser } from "@/app/libs/data/editUser";
import { useSession } from "next-auth/react";

export const EditUserForm = ({ id, name, email }) => {
  const { update } = useSession();
  const [userName, setUserName] = useState(name);
  const handleUpdate = async (e) => {
    e.preventDefault();
    update({ name: userName });
    const updatedUser = await editUser(id, userName);
    setUserName(updatedUser.name);
  };
  return (
    <form
      onSubmit={handleUpdate}
      className="flex flex-col gap-4 bg-white p-8 rounded-lg border-gray-400 border-2"
    >
      <input type="text" name="id" id="id" value={id} hidden readOnly />
      <label htmlFor="name">Nama</label>
      <input
        type="text"
        name="name"
        id="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="border-2 p-2 border-gray-200 disabled:border-gray-200 disabled:bg-white"
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        disabled
        readOnly
        className="border-2 p-2 border-gray-200 disabled:border-gray-200 disabled:bg-white"
      />
      <SubmitButton title={"Edit User"} />
    </form>
  );
};
