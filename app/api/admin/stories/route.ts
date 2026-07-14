import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const story = await prisma.story.create({
      data: {
        title: body.title,
        slug: body.slug,
        description: body.description,
        content: body.content,
        cover: body.cover,
        music: body.music || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Story created successfully.",
      story,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create story.",
      },
      {
        status: 500,
      }
    );
  }
}