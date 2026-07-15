import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);



export async function POST(req: Request) {

  try {

    const formData = await req.formData();


    const file = formData.get("file") as File;
    const type = formData.get("type") as string;



    if (!file) {

      return NextResponse.json(
        {
          success: false,
          message: "No file uploaded",
        },
        {
          status: 400,
        }
      );

    }



    const bucket =
      type === "music"
        ? "music"
        : "images";



    const safeName =
      file.name
        .replace(/\s+/g, "-")
        .replace(/[^\w.-]/g, "");



    const filePath =
      `${Date.now()}-${safeName}`;



    const arrayBuffer =
      await file.arrayBuffer();



    const buffer =
      Buffer.from(arrayBuffer);



    const { error } =
      await supabase.storage
        .from(bucket)
        .upload(
          filePath,
          buffer,
          {
            contentType: file.type,
            upsert: false,
          }
        );



    if (error) {

      console.error(
        "SUPABASE UPLOAD ERROR:",
        error
      );


      return NextResponse.json(
        {
          success:false,
          message:error.message,
        },
        {
          status:500,
        }
      );

    }



    const { data } =
      supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);



    return NextResponse.json(
      {
        success:true,
        url:data.publicUrl,
      }
    );



  } catch(error) {


    console.error(
      "UPLOAD ERROR:",
      error
    );


    return NextResponse.json(
      {
        success:false,
        message:
          error instanceof Error
            ? error.message
            : "Upload failed",
      },
      {
        status:500,
      }
    );

  }

}