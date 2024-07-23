import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const slug = params.slug;
  console.log(slug);
  return NextResponse.json({
    message: "OKEE",
  });
}
