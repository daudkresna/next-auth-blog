import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const page = async () => {
  const session = await getServerSession(authOptions);
  const id = session.user.id;
  const res = await fetch(`${process.env.BASE_URL}user/${id}/posts`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <h1>POSTINGANKU</h1>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default page;
