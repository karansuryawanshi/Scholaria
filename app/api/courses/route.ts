// Server side

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // userId from auth
    // Title from user Input
    const { userId } = await auth();
    const { title } = await req.json();

    console.log("[api userId]",userId)

    if (!userId) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    // sending data to db
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[courses]", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
