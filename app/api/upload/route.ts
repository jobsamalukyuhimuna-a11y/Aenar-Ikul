import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const type = formData.get("type") as string;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          message: "No file uploaded.",
        },
        {
          status: 400,
        }
      );
    }


    const folder = type === "music" ? "music" : "images";


    const safeName = file.name
      .replace(/\s+/g, "-")
      .replace(/[^\w.-]/g, "");


    const blob = await put(
      `${folder}/${Date.now()}-${safeName}`,
      file,
      {
        access: "public",
      }
    );


    return NextResponse.json({
      success: true,
      url: blob.url,
    });


  } catch (error) {

    console.error("UPLOAD ERROR:", error);

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