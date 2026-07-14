export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    success: true,
    message: "Upload API is ready.",
  });
}

export async function POST() {
  return Response.json({
    success: true,
    message: "Upload API is ready.",
  });
}