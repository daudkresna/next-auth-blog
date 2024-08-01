"use server";

import { revalidatePath } from "next/cache";

export const editUser = async (userId, userName) => {
  const res = await fetch(`${process.env.BASE_URL}user/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
    }),
  });
  const data = await res.json();
  console.log("Data", data);
  revalidatePath("/profile", "page");
  return data;
};
