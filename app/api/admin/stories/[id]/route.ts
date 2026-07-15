import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const story = await prisma.story.findUnique({
      where: {
        id: Number(id),
      },
    });


    if (!story) {
      return NextResponse.json(
        {
          success: false,
          message: "Story not found.",
        },
        {
          status: 404,
        }
      );
    }


    return NextResponse.json({
      success: true,
      story,
    });


  } catch (error) {

    console.error("GET STORY ERROR:", error);


    return NextResponse.json(
      {
        success: false,
        message: "Failed to load story.",
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


    const story = await prisma.story.update({

      where: {
        id: Number(id),
      },


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

      message: "Story updated successfully.",

      story,

    });



  } catch (error) {


    console.error("UPDATE STORY ERROR:", error);



    return NextResponse.json(

      {
        success: false,
        message: "Failed to update story.",
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



    await prisma.story.delete({

      where: {

        id: Number(id),

      },

    });



    return NextResponse.json({

      success: true,

      message: "Story deleted successfully.",

    });



  } catch (error) {


    console.error("DELETE STORY ERROR:", error);



    return NextResponse.json(

      {

        success: false,

        message: "Failed to delete story.",

      },

      {

        status: 500,

      }

    );

  }

}