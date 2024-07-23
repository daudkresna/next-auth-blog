import { z } from "zod";
export const User = z.object({
  name: z
    .string()
    .min(5, { message: "TIDAK CUKUP HURUFNYA BOS" })
    .max(10, { message: "KELEBIHAN HURUFNYA BOS" }),
  email: z.string().email({ message: "YANG BENER EMAILNYA BOS" }),
  password: z.string().min(5, { message: "PASSWORDNYA KEPENDEKAN BOS" }),
});
