import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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


    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);


    const folder =
      type === "music"
        ? "music"
        : "images";


    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      folder
    );


    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, {
        recursive: true,
      });
    }


    const fileName =
      Date.now() + "-" + file.name;


    const filePath = path.join(
      uploadDir,
      fileName
    );


    fs.writeFileSync(
      filePath,
      buffer
    );


    return NextResponse.json({
      success: true,
      url:
        type === "music"
          ? `/uploads/music/${fileName}`
          : `/uploads/images/${fileName}`,
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Upload failed.",
      },
      {
        status: 500,
      }
    );
  }
}