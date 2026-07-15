import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), "public", "uploads", "images");
    const musicDir = path.join(process.cwd(), "public", "uploads", "music");

    const images = fs.existsSync(imagesDir)
      ? fs.readdirSync(imagesDir)
      : [];

    const music = fs.existsSync(musicDir)
      ? fs.readdirSync(musicDir)
      : [];

    return NextResponse.json({
      success: true,
      images,
      music,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        images: [],
        music: [],
      },
      {
        status: 500,
      }
    );
  }
}