const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const main = async () => {
  const test = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: {
      id: "1",
      email: "test@test.com",
      name: "test123",
      hashedPassword: "pelerkuda",
      posts: {
        create: {
          postId: "1",
          title: "Check out Prisma with Next.js",
          description: "https://www.prisma.io/nextjs",
        },
      },
    },
  });
  console.log({ test });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
