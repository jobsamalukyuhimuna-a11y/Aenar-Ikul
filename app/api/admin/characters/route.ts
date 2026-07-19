import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const characters = await prisma.character.findMany({
      include: {
        images: {
          orderBy: {
            sortOrder: "asc",
          },
        },

        musics: true,
      },

      orderBy: {
        id: "desc",
      },
    });


    return NextResponse.json({
      success: true,
      characters,
    });


  } catch (error) {

    console.error(error);


    return NextResponse.json(
      {
        success:false,
        message:"Failed to load characters.",
      },
      {
        status:500,
      }
    );

  }
}






export async function POST(
  req: Request
) {

  try {


    const body =
      await req.json();




    const character =
      await prisma.character.create({

        data:{


          name:
            body.name || null,


          slug:
            body.slug || null,


          title:
            body.title || null,


          description:
            body.description || null,



          image:
            body.image || null,



          music:
            body.music || null,



          kingdom:
            body.kingdom || null,


          race:
            body.race || null,


          status:
            body.status || null,


          universe:
            body.universe || null,


          quote:
            body.quote || null,



          // CHARACTER DESIGN THEME

          profileStyle:
            body.profileStyle ?? "royal",




          images:{

            create:

              body.images?.map(
                (
                  image:string,
                  index:number
                )=>({

                  image,

                  sortOrder:index,

                })

              ) || [],

          },





          musics:{

            create:

              body.musics?.map(

                (
                  music:{
                    name?:string;
                    file:string;
                  }

                )=>({

                  name:
                    music.name || null,

                  file:
                    music.file,

                })

              ) || [],

          },

        },



        include:{

          images:{
            orderBy:{
              sortOrder:"asc",
            },
          },


          musics:true,

        },


      });






    return NextResponse.json({

      success:true,

      message:
        "Character created successfully.",

      character,

    });




  } catch(error){


    console.error(error);



    return NextResponse.json(

      {
        success:false,
        message:"Failed to create character.",
      },

      {
        status:500,
      }

    );

  }

}