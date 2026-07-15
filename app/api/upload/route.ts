import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

console.log("USING SUPABASE UPLOAD ROUTE");

export async function POST(req: Request) {
  try {

    const supabaseUrl =
      process.env.SUPABASE_URL ||
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const supabaseKey =
      process.env.SUPABASE_SECRET_KEY;


    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Supabase environment variables missing",
        },
        {
          status: 500,
        }
      );
    }


    const supabase = createClient(
      supabaseUrl,
      supabaseKey
    );


    const formData = await req.formData();


    const file =
      formData.get("file") as File;


    const type =
      formData.get("type") as string;


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


    const fileName =
      file.name
        .replace(/\s+/g, "-")
        .replace(/[^\w.-]/g, "");


    const filePath =
      `${Date.now()}-${fileName}`;


    const buffer =
      Buffer.from(
        await file.arrayBuffer()
      );


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
        "SUPABASE ERROR:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }


    const publicUrl =
      supabase.storage
        .from(bucket)
        .getPublicUrl(filePath)
        .data
        .publicUrl;


    return NextResponse.json(
      {
        success: true,
        url: publicUrl,
      }
    );


  } catch(error) {

    console.error(
      "UPLOAD ERROR:",
      error
    );


    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Upload failed",
      },
      {
        status: 500,
      }
    );

  }
}