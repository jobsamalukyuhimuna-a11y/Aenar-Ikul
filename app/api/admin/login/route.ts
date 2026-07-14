import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required." },
        { status: 400 }
      );
    }

    const admin = await prisma.admin.findUnique({
      where: {
        username,
      },
    });

    if (!admin) {
      return NextResponse.json(
        { message: "Invalid username or password." },
        { status: 401 }
      );
    }

    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid username or password." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful.",
      admin: {
        id: admin.id,
        username: admin.username,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}