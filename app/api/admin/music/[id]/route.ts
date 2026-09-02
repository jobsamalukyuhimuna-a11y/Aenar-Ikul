import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(
  _req: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const musicId = Number(id);

    if (!Number.isInteger(musicId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid music ID.",
        },
        {
          status: 400,
        }
      );
    }

    const existingMusic =
      await prisma.music.findUnique({
        where: {
          id: musicId,
        },
      });

    if (!existingMusic) {
      return NextResponse.json(
        {
          success: false,
          message: "Music not found.",
        },
        {
          status: 404,
        }
      );
    }

    await prisma.music.delete({
      where: {
        id: musicId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Music deleted successfully.",
    });
  } catch (error) {
    console.error(
      "DELETE MUSIC ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete music.",
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