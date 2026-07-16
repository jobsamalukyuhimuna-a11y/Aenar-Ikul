"use client";

type Props = {
  src: string;
  title?: string | null;
};

export default function CharacterMusicPlayer({
  src,
  title,
}: Props) {
  return (
    <>
      <style>{`
        .royal-player{
          position:relative;
          max-width:900px;
          margin:0 auto 50px;
          padding:32px;
          border-radius:24px;
          background:linear-gradient(
            180deg,
            rgba(48,26,63,.95),
            rgba(18,10,26,.95)
          );
          border:1px solid rgba(214,178,92,.35);
          box-shadow:
            0 0 40px rgba(168,85,247,.18),
            inset 0 0 30px rgba(255,255,255,.02);
        }

        .royal-player::before{
          content:"";
          position:absolute;
          inset:0;
          border-radius:24px;
          padding:1px;
          background:linear-gradient(
            90deg,
            rgba(214,178,92,.1),
            rgba(214,178,92,.8),
            rgba(214,178,92,.1)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor;
          mask-composite:exclude;
          pointer-events:none;
        }

        .royal-title{
          text-align:center;
          color:#e7c56d;
          font-size:34px;
          font-family:Cinzel,serif;
          margin-bottom:8px;
          font-weight:400;
        }

        .royal-sub{
          text-align:center;
          color:#b88cff;
          letter-spacing:3px;
          margin-bottom:28px;
          font-size:14px;
        }

        .audio-shell{
          border-radius:60px;
          padding:18px 22px;
          background:rgba(10,6,15,.65);
          border:1px solid rgba(214,178,92,.2);
        }

        .audio-shell audio{
          width:100%;
          height:54px;
          filter:
            sepia(.6)
            saturate(1.4)
            hue-rotate(250deg)
            brightness(1.05);
        }
      `}</style>

      <section className="royal-player">
        <h2 className="royal-title">
          ♫ Character Theme ♫
        </h2>

        {title && (
          <div className="royal-sub">
            {title}
          </div>
        )}

        <div className="audio-shell">
          <audio
            controls
            preload="metadata"
            src={src}
          />
        </div>
      </section>
    </>
  );
}