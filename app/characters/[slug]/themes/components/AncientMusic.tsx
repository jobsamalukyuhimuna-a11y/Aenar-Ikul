"use client";

import { useRef, useState } from "react";

type Props = {
  music?: string | null;
  characterName?: string | null;
};

export default function AncientMusic({
  music,
  characterName,
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  /*
    نستخدم الملف الموجود مباشرة داخل public/music
    لأننا تأكدنا أن هذا الرابط يعمل:
    /music/ithan-theme.mp3
  */
  const musicSource = "/music/ithan-theme.mp3";

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    // إذا كانت الموسيقى تعمل، أوقفها
    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      audio.volume = 0.75;

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        await playPromise;
      }

      setPlaying(true);
    } catch (error) {
      console.error("Ancient music playback error:", error);
      setPlaying(false);
    }
  };

  return (
    <section className="ancient-music">
      <div
        className={`ancient-music-shrine ${
          playing ? "is-playing" : ""
        }`}
      >
        {/* SACRED MUSIC BUTTON */}

        <button
          type="button"
          className="music-sacred-button"
          onClick={toggleMusic}
          aria-label={
            playing
              ? "Pause sacred music"
              : "Play sacred music"
          }
        >
          <span className="music-outer-ring" />

          <span className="music-middle-ring" />

          <span className="music-inner-ring" />

          <span className="music-energy" />

          <span className="music-symbol">
            {playing ? "Ⅱ" : "▶"}
          </span>
        </button>

        {/* FLOATING RINGS */}

        <div className="music-rings">
          <span />
          <span />
          <span />
        </div>

        {/* TITLE */}

        <h2 className="music-title">
          Sacred Voice
        </h2>

        <p className="music-character">
          {characterName || "Unknown"}
        </p>

        <p className="music-text">
          The echoes of this soul have survived for thousands of years.
        </p>

        {/* AUDIO */}

        <audio
          ref={audioRef}
          src={musicSource}
          preload="auto"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          Your browser does not support audio playback.
        </audio>
      </div>
    </section>
  );
}