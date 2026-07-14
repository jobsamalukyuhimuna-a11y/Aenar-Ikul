import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditStoryPage({ params }: Props) {
  const { id } = await params;

  const story = await prisma.story.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!story) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#2a1740 0%,#0b0b0b 45%,#050505 100%)",
        color: "white",
        padding: 60,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "rgba(20,20,20,.92)",
          border: "1px solid rgba(212,175,55,.25)",
          borderRadius: 20,
          padding: 40,
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            marginBottom: 35,
            fontSize: 42,
          }}
        >
          Edit Story
        </h1>

        <p>
          <strong>Title:</strong> {story.title}
        </p>

        <p>
          <strong>Slug:</strong> {story.slug}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <div
          style={{
            padding: 20,
            background: "#151515",
            borderRadius: 10,
            marginBottom: 25,
            whiteSpace: "pre-wrap",
          }}
        >
          {story.description}
        </div>

        <Link
          href="/admin/stories"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#d4af37",
            color: "#111",
            textDecoration: "none",
            borderRadius: 10,
            fontWeight: "bold",
          }}
        >
          ← Back
        </Link>
      </div>
    </main>
  );
}