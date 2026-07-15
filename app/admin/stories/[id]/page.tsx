import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditStoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
        background: "#090909",
        color: "white",
        padding: 60,
      }}
    >
      <h1
        style={{
          color: "#d7b56d",
          fontSize: 48,
          marginBottom: 40,
        }}
      >
        Edit Story
      </h1>

      <div
        style={{
          background: "#151515",
          padding: 35,
          borderRadius: 20,
          border: "1px solid rgba(215,181,109,.3)",
        }}
      >
        <h2>{story.title}</h2>

        <p>
          Slug:
          <br />
          {story.slug}
        </p>

        <p>
          Description:
          <br />
          {story.description}
        </p>

        <p>
          Cover:
          <br />
          {story.cover}
        </p>

        <p>
          Music:
          <br />
          {story.music || "No Music"}
        </p>

        <hr />

        <p>
          Content:
        </p>

        <div
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: 1.8,
          }}
        >
          {story.content}
        </div>

      </div>
    </main>
  );
}