import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const character = await prisma.character.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        images: {
          orderBy: {
            sortOrder: "asc",
          },
        },
        musics: true,
      },
    });

    if (!character) {
      return NextResponse.json(
        {
          success: false,
          message: "Character not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      character,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load character.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    await prisma.characterImage.deleteMany({
      where: {
        characterId: Number(id),
      },
    });

    await prisma.characterMusic.deleteMany({
      where: {
        characterId: Number(id),
      },
    });

    const character = await prisma.character.update({
      where: {
        id: Number(id),
      },

      data: {
        name: body.name || null,
        slug: body.slug || null,
        title: body.title || null,
        description: body.description || null,

        image: body.image || null,
        music: body.music || null,

        kingdom: body.kingdom || null,
        race: body.race || null,
        status: body.status || null,
        universe: body.universe || null,
        quote: body.quote || null,

        images: {
          create:
            body.images?.map(
              (image: string, index: number) => ({
                image,
                sortOrder: index,
              })
            ) || [],
        },

        musics: {
          create:
            body.musics?.map(
              (music: {
                name?: string;
                file: string;
              }) => ({
                name: music.name || null,
                file: music.file,
              })
            ) || [],
        },
      },

      include: {
        images: {
          orderBy: {
            sortOrder: "asc",
          },
        },
        musics: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Character updated successfully.",
      character,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update character.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.character.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Character deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete character.",
      },
      {
        status: 500,
      }
    );
  }
}