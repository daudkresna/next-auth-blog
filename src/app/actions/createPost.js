"use server";

import { PrismaClient } from "@prisma/client";
import prisma from "../libs/db";
import { revalidatePath } from "next/cache";

export const createPost = async (id, formData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const post = await prisma.post.create({
    data: {
      title: title,
      description: description,
      authorId: id,
    },
  });
  if (!post) {
    return {
      status: "ERROR",
      message: post,
    };
  }
  revalidatePath(`/myposts`);
  return post;
};
