import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const slug = params.slug;
  const post = await prisma.user.findUnique({
    where: {
      id: slug[0],
    },
    select: {
      id: true,
      email: true,
      name: true,
      posts: {
        select: {
          title: true,
          description: true,
          createdAt: true,
          postId: true,
        },
      },
    },
  });
  console.log(post);
  if (!post) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  const slug = params.slug;
  const body = await request.json();

  console.log(new Date(), body);
  const updatedUser = await prisma.user.update({
    select: {
      name: true,
      id: true,
      email: true,
    },
    where: {
      id: slug[0],
    },
    data: {
      name: body.name,
      updatedAt: new Date(),
    },
  });

  if (!updatedUser) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
  return NextResponse.json(updatedUser);
}
