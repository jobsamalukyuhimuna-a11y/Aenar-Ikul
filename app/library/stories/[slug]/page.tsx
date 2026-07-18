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
    where:{
      slug,
    },
  });



  if(!story){
    notFound();
  }



  return (

    <main
      className="story-page"

      style={{
        minHeight:"100vh",

        background:
        `
        radial-gradient(
        circle at top,
        #24103f 0%,
        #09050f 45%,
        #020202 100%
        )
        `,

        padding:"90px 20px",

        position:"relative",

        overflow:"hidden",
      }}
    >



      <StoryMusic />

      <GoldenDust />




      <div
        className="story-background"

        style={{
          position:"fixed",

          inset:0,

          overflow:"hidden",

          pointerEvents:"none",

          zIndex:0,
        }}
      >



        {story.cover && (

          <Image
            src={story.cover}

            alt={story.title}

            fill

            priority

            style={{

              objectFit:"cover",

              opacity:0.12,

              filter:"blur(4px)",

              transform:"scale(1.08)",

            }}
          />

        )}


      </div>





      <FadeIn>


        <section
          className="story-container"

          style={{

            position:"relative",

            zIndex:2,

            maxWidth:"980px",

            margin:"0 auto",

            background:
            "rgba(245,236,213,.96)",

            backdropFilter:"blur(12px)",

            border:
            "4px solid #caa24b",

            borderRadius:"20px",

            padding:"80px",

            boxShadow:
            `
            0 0 0 4px rgba(255,220,120,.25),
            0 0 90px rgba(0,0,0,.75)
            `,
          }}
        >



          <div
            className="story-inner"

            style={{

              position:"relative",

              border:
              "2px solid rgba(139,92,246,.45)",

              padding:"60px",

            }}
          >



            <div
              style={{
                position:"absolute",
                top:"15px",
                left:"15px",
                fontSize:"32px",
                color:"#8b5cf6",
              }}
            >
              ✦
            </div>


            <div
              style={{
                position:"absolute",
                top:"15px",
                right:"15px",
                fontSize:"32px",
                color:"#8b5cf6",
              }}
            >
              ✦
            </div>
                        <div
              style={{
                position:"absolute",
                bottom:"15px",
                left:"15px",
                fontSize:"32px",
                color:"#8b5cf6",
              }}
            >
              ✦
            </div>


            <div
              style={{
                position:"absolute",
                bottom:"15px",
                right:"15px",
                fontSize:"32px",
                color:"#8b5cf6",
              }}
            >
              ✦
            </div>





            <p
              style={{
                color:"#86621f",

                textAlign:"center",

                letterSpacing:"8px",

                fontSize:"14px",

                marginBottom:"18px",
              }}
            >
              THE ROYAL CHRONICLE
            </p>





            <h1
              className="story-title"

              style={{

                textAlign:"center",

                color:"#8b5cf6",

                fontSize:"58px",

                fontFamily:"Cinzel, serif",

                fontWeight:500,

                letterSpacing:"3px",

                marginBottom:"20px",

                textShadow:
                `
                0 0 10px rgba(139,92,246,.8),
                0 0 30px rgba(139,92,246,.45)
                `,
              }}
            >
              {story.title}
            </h1>





            <p
              className="story-subtitle"

              style={{

                textAlign:"center",

                color:"#8c6c2d",

                fontSize:"22px",

                fontStyle:"italic",

                marginBottom:"60px",

              }}
            >
              The Chronicle
            </p>





            <div
              style={{
                width:"220px",

                height:"2px",

                background:
                `
                linear-gradient(
                to right,
                transparent,
                #8b5cf6,
                transparent
                )
                `,

                margin:"0 auto 60px",
              }}
            />





            <div

              style={{

                position:"relative",

                padding:"50px 40px",

                marginTop:"20px",

                border:
                "2px solid rgba(139,92,246,.35)",

                borderRadius:"20px",

                boxShadow:
                `
                inset 0 0 30px rgba(139,92,246,.08),
                0 0 25px rgba(139,92,246,.12)
                `,

              }}

            >




              <div
                style={{

                  position:"absolute",

                  top:"-18px",

                  left:"50%",

                  transform:"translateX(-50%)",

                  background:"#f5ecd5",

                  padding:"0 20px",

                  fontSize:"26px",

                  color:"#8b5cf6",

                }}
              >
                ✦ ✦ ✦
              </div>





              <article

                className="story-content"

                style={{

                  color:"#2b2214",

                  fontSize:"22px",

                  lineHeight:"2.2",

                  whiteSpace:"pre-wrap",

                  fontFamily:"Georgia, serif",

                  textAlign:"center",

                  textShadow:
                  "0 1px 0 rgba(255,255,255,.35)",

                }}

              >

                {story.content}

              </article>
                            <div
                style={{
                  position:"absolute",

                  bottom:"-18px",

                  left:"50%",

                  transform:"translateX(-50%)",

                  background:"#f5ecd5",

                  padding:"0 20px",

                  fontSize:"26px",

                  color:"#8b5cf6",
                }}
              >
                ✦ ✦ ✦
              </div>


            </div>






            <div
              style={{

                display:"flex",

                justifyContent:"center",

                marginTop:"70px",

              }}
            >

              <div
                style={{

                  width:"240px",

                  height:"2px",

                  background:
                  `
                  linear-gradient(
                  to right,
                  transparent,
                  #8b5cf6,
                  transparent
                  )
                  `,

                }}
              />

            </div>






            <p
              className="story-end"

              style={{

                marginTop:"30px",

                textAlign:"center",

                color:"#8b5cf6",

                letterSpacing:"6px",

                fontSize:"15px",

                fontFamily:"Cinzel, serif",

                textShadow:
                `
                0 0 15px rgba(139,92,246,.6)
                `,

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