"use server";
import { z } from "zod";

export const createUser = async (formData) => {
  const User = z.object({
    name: z
      .string()
      .min(5, { message: "Nama harus lebih dari 5 huruf" })
      .max(10, { message: "Nama harus kurang dari 10 huruf" }),
    email: z.string().email({ message: "Email kurang tepat" }),
    password: z.string().min(5, { message: "Password terlalu pendek" }),
  });
  const bcrypt = require("bcrypt");
  const salt = 10;
  //   const name = formData.get("name");
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  const genSalt = await bcrypt.genSalt(salt);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  //   const hashedPassword = await bcrypt.hash(data.password, genSalt);
  //   const match = await bcrypt.compare(formData.get("password"), data.password);
  console.log(data);

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
};
