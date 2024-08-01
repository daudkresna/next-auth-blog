import prisma from "../db";

export async function getUserById(userId) {
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      email: true,
      name: true,
    },
    where: {
      id: userId,
    },
  });
  return user;
}
