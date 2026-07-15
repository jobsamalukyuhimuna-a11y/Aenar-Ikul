import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("CREATE STORY DATA:", body);

    if (
      !body.title ||
      !body.slug ||
      !body.description ||
      !body.content ||
      !body.cover
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        {
          status: 400,
        }
      );
    }

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
    console.error("CREATE STORY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create story.",
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}