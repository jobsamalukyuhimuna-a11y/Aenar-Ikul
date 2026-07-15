import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "./DeleteButton";

export default async function AdminStoriesPage() {
  const stories = await prisma.story.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#2a1740 0%,#0b0b0b 45%,#050505 100%)",
        color: "#fff",
        padding: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >

          <div>
            <p
              style={{
                color: "#9d7d3d",
                letterSpacing: "6px",
                marginBottom: "10px",
              }}
            >
              ADMIN PANEL
            </p>

            <h1
              style={{
                fontSize: "56px",
                color: "#d7b56d",
                fontFamily: "Cinzel, serif",
                fontWeight: 400,
              }}
            >
              Story Management
            </h1>
          </div>


          <Link
            href="/admin/stories/new"
            style={{
              padding: "18px 35px",
              borderRadius: "12px",
              textDecoration: "none",
              background: "#d7b56d",
              color: "#111",
              fontWeight: "bold",
            }}
          >
            + New Story
          </Link>

        </div>



        <div
          style={{
            background: "rgba(20,20,20,.9)",
            border: "1px solid rgba(215,181,109,.25)",
            borderRadius: "22px",
            overflow: "hidden",
          }}
        >

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >

            <thead>
              <tr
                style={{
                  background: "rgba(215,181,109,.08)",
                }}
              >

                <th style={cell}>
                  Title
                </th>

                <th style={cell}>
                  Slug
                </th>

                <th style={cell}>
                  Music
                </th>

                <th style={cell}>
                  Actions
                </th>

              </tr>
            </thead>



            <tbody>

              {stories.map((story) => (

                <tr key={story.id}>

                  <td style={cell}>
                    {story.title}
                  </td>


                  <td style={cell}>
                    {story.slug}
                  </td>


                  <td style={cell}>
                    {story.music || "No Music"}
                  </td>



                  <td style={cell}>


                    <Link
                      href={`/admin/stories/${story.id}`}
                      style={{
                        display: "inline-block",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        background: "#d7b56d",
                        color: "#111",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Edit
                    </Link>


                    <DeleteButton id={story.id} />


                  </td>

                </tr>

              ))}


            </tbody>

          </table>

        </div>


      </div>

    </main>
  );
}



const cell: React.CSSProperties = {
  padding: "24px",
  borderBottom: "1px solid rgba(255,255,255,.06)",
  textAlign: "left",
};