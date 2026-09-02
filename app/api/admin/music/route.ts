import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const file =
      typeof body.file === "string"
        ? body.file.trim()
        : "";

    const cover =
      typeof body.cover === "string"
        ? body.cover.trim()
        : "";

    const artist =
      typeof body.artist === "string"
        ? body.artist.trim()
        : "";

    const genre =
      typeof body.genre === "string"
        ? body.genre.trim()
        : "";

    const description =
      typeof body.description === "string"
        ? body.description.trim()
        : "";

    const translation =
      typeof body.translation === "string"
        ? body.translation.trim()
        : "";

    const pageStyle =
      typeof body.pageStyle === "string"
        ? body.pageStyle.trim()
        : "";

    const duration =
      typeof body.duration === "number" &&
      Number.isFinite(body.duration) &&
      body.duration >= 0
        ? Math.round(body.duration)
        : null;

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Music title is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "Music file is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!cover) {
      return NextResponse.json(
        {
          success: false,
          message: "Cover image is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (duration === null) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Music duration could not be detected.",
        },
        {
          status: 400,
        }
      );
    }

    const music = await prisma.music.create({
      data: {
        name,
        file,
        cover,
        artist: artist || null,
        genre: genre || null,
        description: description || null,
        translation:
          translation || null,
        duration,
        pageStyle:
          pageStyle || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Music created successfully.",
      music,
    });
  } catch (error) {
    console.error(
      "CREATE MUSIC ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create music.",
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      {
        status: 500,
      }
    );
  }
}