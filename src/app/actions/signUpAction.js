"use server";
import { z } from "zod";
import prisma from "../libs/db";
import { revalidatePath } from "next/cache";

export const createUser = async (formData) => {
  // USER SCHEMA UNTUK VALIDASI
  const User = z.object({
    name: z
      .string()
      .min(5, { message: "Nama harus lebih dari 5 huruf" })
      .max(30, { message: "Nama harus kurang dari 30 huruf" }),
    email: z.string().email({ message: "Email kurang tepat" }),
    password: z.string().min(5, { message: "Password terlalu pendek" }),
  });

  // inisialisasi bcrypt dengan salt
  const bcrypt = require("bcrypt");
  const salt = 10;
  const genSalt = await bcrypt.genSalt(salt);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Validasi User Baru
  const validUser = User.safeParse(data);
  if (!validUser.success) {
    // let errors = {};
    let errors = "";
    validUser.error?.issues.forEach((issue) => {
      //   errors[issue.path[0]] = issue.message;
      errors = errors + issue.message + "." + "\n";
    });
    console.log(errors);
    return errors;
  }

  // Pembuatan user baru kedalam
  const hashedPassword = await bcrypt.hash(data.password, genSalt);
  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      hashedPassword: hashedPassword,
    },
  });
  revalidatePath("/");
};
