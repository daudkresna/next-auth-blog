import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
  if (!posts) {
    return NextResponse.json({
      status: 404,
      message: "Tidak ada data",
    });
  }
  return NextResponse.json({ posts });
}
