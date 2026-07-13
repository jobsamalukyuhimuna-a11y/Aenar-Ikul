import Image from "next/image";
import { notFound } from "next/navigation";
import { universes } from "../../library/data/universes";
import { kingdoms } from "../../library/data/kingdoms";

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
          "radial-gradient(circle at top,#251736 0%, #0b0b0b 45%, #050505 100%)",
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
        {/* Header */}

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

        {/* Map */}

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

        {/* About */}

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

        {/* Kingdoms */}

        <section
          style={{
            marginTop: "80px",
          }}
        >
          <h2
            style={{
              color: "#d7b56d",
              fontSize: "42px",
              textAlign: "center",
              fontFamily: "Cinzel, serif",
              fontWeight: 400,
              marginBottom: "45px",
            }}
          >
            Kingdoms
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "30px",
            }}
          >
            {kingdoms
              .filter((k) => k.universe === universe.slug)
              .map((kingdom) => (
                <div
                  key={kingdom.id}
                  style={{
                    background: "rgba(17,17,17,.82)",
                    border: "1px solid rgba(200,164,77,.25)",
                    borderRadius: "18px",
                    padding: "30px",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,.45)",
                  }}
                >
                  <h3
                    style={{
                      color: "#d7b56d",
                      fontSize: "30px",
                      fontFamily: "Cinzel, serif",
                      fontWeight: 400,
                      marginBottom: "20px",
                    }}
                  >
                    {kingdom.name}
                  </h3>

                  <p
                    style={{
                      color: "#bdbdbd",
                      marginBottom: "10px",
                    }}
                  >
                    👑 <strong>Ruler:</strong> {kingdom.ruler}
                  </p>

                  <p
                    style={{
                      color: "#bdbdbd",
                      marginBottom: "20px",
                    }}
                  >
                    🏰 <strong>Capital:</strong> {kingdom.capital}
                  </p>

                  <p
                    style={{
                      color: "#cfcfcf",
                      lineHeight: 1.8,
                    }}
                  >
                    {kingdom.description}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}