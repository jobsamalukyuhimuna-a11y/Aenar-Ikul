import Image from "next/image";
import { notFound } from "next/navigation";
import { universes } from "../../library/data/universes";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function UniversePage({ params }: Props) {
  const { slug } = await params;

  const universe = universes.find((u) => u.slug === slug);

  if (!universe) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#251736 0%,#0b0b0b 45%,#050505 100%)",
        color: "#fff",
        padding: "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#9d7d3d",
            letterSpacing: "8px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          THE WORLD OF
        </p>

        <h1
          style={{
            color: "#d7b56d",
            fontSize: "64px",
            textAlign: "center",
            fontFamily: "Cinzel, serif",
            fontWeight: 400,
            marginTop: "20px",
            marginBottom: "60px",
          }}
        >
          {universe.name}
        </h1>

        <Image
          src="/maps/aenar-ikul-map.jpg"
          alt="Map of Aenar Ikul"
          width={1200}
          height={700}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "18px",
            border: "2px solid rgba(200,164,77,.35)",
            boxShadow: "0 20px 60px rgba(0,0,0,.45)",
          }}
        />

        <section
          style={{
            marginTop: "60px",
            background: "rgba(17,17,17,.75)",
            border: "1px solid rgba(200,164,77,.25)",
            borderRadius: "18px",
            padding: "40px",
          }}
        >
          <h2
            style={{
              color: "#d7b56d",
              fontSize: "36px",
              marginBottom: "25px",
              fontFamily: "Cinzel, serif",
              fontWeight: 400,
            }}
          >
            About this World
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              lineHeight: 2,
              fontSize: "18px",
            }}
          >
            {universe.description}
          </p>
        </section>
      </div>
    </main>
  );
}