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
        width: "100%",
        background:
          "radial-gradient(circle at top,#241b0f 0%, #0b0b0b 45%, #050505 100%)",
        padding: "clamp(55px, 8vw, 90px) clamp(12px, 4vw, 20px)",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <StoryMusic />
      <GoldenDust />

      {/* Background */}
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
            unoptimized
            sizes="100vw"
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
            width: "100%",
            maxWidth: "980px",
            margin: "0 auto",
            background: "rgba(245,236,213,.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border:
              "clamp(2px, .5vw, 4px) solid #caa24b",
            borderRadius: "clamp(12px, 3vw, 20px)",
            padding: "clamp(22px, 6vw, 80px)",
            boxShadow:
              "0 0 0 4px rgba(255,220,120,.25),0 0 90px rgba(0,0,0,.75)",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            className="story-inner"
            style={{
              width: "100%",
              border:
                "clamp(1px, .3vw, 2px) solid rgba(184,138,47,.45)",
              padding: "clamp(20px, 5vw, 60px)",
              boxSizing: "border-box",
            }}
          >
            {/* Header Label */}

            <p
              style={{
                margin: "0 0 clamp(14px, 3vw, 18px)",
                color: "#86621f",
                textAlign: "center",
                letterSpacing: "clamp(2px, 1vw, 8px)",
                fontSize: "clamp(9px, 2vw, 14px)",
                lineHeight: 1.5,
                overflowWrap: "break-word",
              }}
            >
              THE ROYAL CHRONICLE
            </p>

            {/* Story Title */}

            <h1
              className="story-title"
              style={{
                width: "100%",
                margin:
                  "0 0 clamp(14px, 3vw, 20px)",
                textAlign: "center",
                color: "#5f4312",
                fontSize: "clamp(30px, 6vw, 58px)",
                lineHeight: 1.15,
                fontFamily: "Cinzel, serif",
                fontWeight: 500,
                letterSpacing: "clamp(.5px, .4vw, 3px)",
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              {story.title}
            </h1>

            {/* Subtitle */}

            <p
              className="story-subtitle"
              style={{
                margin: "0 0 clamp(30px, 6vw, 60px)",
                textAlign: "center",
                color: "#8c6c2d",
                fontSize: "clamp(16px, 3vw, 22px)",
                lineHeight: 1.5,
                fontStyle: "italic",
              }}
            >
              The Chronicle
            </p>

            {/* Top Divider */}

            <div
              style={{
                width: "clamp(100px, 32vw, 180px)",
                maxWidth: "70%",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, #caa24b, transparent)",
                margin: "0 auto clamp(32px, 6vw, 60px)",
              }}
            />

            {/* Story Content */}

            <article
              className="story-content"
              style={{
                width: "100%",
                color: "#2b2214",
                fontSize: "clamp(17px, 2.8vw, 22px)",
                lineHeight: 2,
                whiteSpace: "pre-wrap",
                fontFamily: "Georgia, serif",
                textAlign: "center",
                textShadow:
                  "0 1px 0 rgba(255,255,255,.35)",
                overflowWrap: "break-word",
                wordBreak: "normal",
                boxSizing: "border-box",
              }}
            >
              {story.content}
            </article>

            {/* Bottom Divider */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "clamp(40px, 7vw, 70px)",
              }}
            >
              <div
                style={{
                  width: "clamp(120px, 40vw, 240px)",
                  maxWidth: "75%",
                  height: "2px",
                  background:
                    "linear-gradient(to right, transparent, #caa24b, transparent)",
                }}
              />
            </div>

            {/* Story Ending */}

            <p
              className="story-end"
              style={{
                margin:
                  "clamp(20px, 4vw, 30px) 0 0",
                textAlign: "center",
                color: "#8b6b29",
                letterSpacing: "clamp(2px, .8vw, 6px)",
                fontSize: "clamp(10px, 2vw, 15px)",
                lineHeight: 1.5,
                fontFamily: "Cinzel, serif",
                overflowWrap: "break-word",
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