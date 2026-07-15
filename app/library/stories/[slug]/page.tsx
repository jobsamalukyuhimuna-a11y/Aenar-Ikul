import "./StoryPage.css";

import Image from "next/image";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import StoryMusic from "./StoryMusic";
import FadeIn from "./FadeIn";
import GoldenDust from "./GoldenDust";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function StoryPage({ params }: Props) {

  const { slug } = await params;


  const story = await prisma.story.findUnique({
    where: {
      slug,
    },
  });


  if (!story) {
    notFound();
  }



  return (

    <main
      className="story-page"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#241b0f 0%, #0b0b0b 45%, #050505 100%)",
        padding: "90px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <StoryMusic />
      <GoldenDust />


      <div
        className="story-background"
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >

        {story.cover && (
          <Image
            src={story.cover}
            alt={story.title}
            fill
            priority
            style={{
              objectFit: "cover",
              opacity: 0.12,
              filter: "blur(4px)",
              transform: "scale(1.08)",
            }}
          />
        )}

      </div>



      <FadeIn>

        <section
          className="story-container"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "980px",
            margin: "0 auto",
            background: "rgba(245,236,213,.95)",
            backdropFilter: "blur(12px)",
            border: "4px solid #caa24b",
            borderRadius: "20px",
            padding: "80px",
            boxShadow:
              "0 0 0 4px rgba(255,220,120,.25),0 0 90px rgba(0,0,0,.75)",
          }}
        >


          <div
            className="story-inner"
            style={{
              border: "2px solid rgba(184,138,47,.45)",
              padding: "60px",
            }}
          >


            <p
              style={{
                color: "#86621f",
                textAlign: "center",
                letterSpacing: "8px",
                fontSize: "14px",
                marginBottom: "18px",
              }}
            >
              THE ROYAL CHRONICLE
            </p>



            <h1
              className="story-title"
              style={{
                textAlign: "center",
                color: "#5f4312",
                fontSize: "58px",
                fontFamily: "Cinzel, serif",
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              {story.title}
            </h1>



            <p
              className="story-subtitle"
              style={{
                textAlign: "center",
                color: "#8c6c2d",
                fontSize: "22px",
                fontStyle: "italic",
                marginBottom: "60px",
              }}
            >
              The Chronicle
            </p>



            <div
              style={{
                width: "180px",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, #caa24b, transparent)",
                margin: "0 auto 60px",
              }}
            />



            <article
              className="story-content"
              style={{
                color: "#2b2214",
                fontSize: "22px",
                lineHeight: 2.2,
                whiteSpace: "pre-wrap",
                fontFamily: "Georgia, serif",
                textAlign: "center",
                textShadow: "0 1px 0 rgba(255,255,255,.35)",
              }}
            >
              {story.content}
            </article>



            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >

              <div
                style={{
                  width: "240px",
                  height: "2px",
                  background:
                    "linear-gradient(to right, transparent, #caa24b, transparent)",
                }}
              />

            </div>



            <p
              className="story-end"
              style={{
                marginTop: "30px",
                textAlign: "center",
                color: "#8b6b29",
                letterSpacing: "6px",
                fontSize: "15px",
                fontFamily: "Cinzel, serif",
              }}
            >
              ✦ THE END OF THE CHRONICLE ✦
            </p>


          </div>


        </section>

      </FadeIn>


    </main>

  );
}