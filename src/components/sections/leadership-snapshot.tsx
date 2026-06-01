"use client";

import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ceoImage =
  "https://res.cloudinary.com/doibx3aol/image/upload/v1780335095/WhatsApp_Image_2026-05-18_at_15.10.45_xstkgh.jpg";

const ceoAudio =
  "https://res.cloudinary.com/doibx3aol/video/upload/v1780338117/WhatsApp_Audio_2026-05-18_at_15.19.36_q976vd.mp4";

export default function LeadershipSnapshot() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black px-5 py-14 sm:py-16 md:px-10 md:py-24">
      <div className="absolute left-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-[#0175ff]/10 blur-[120px]" />
      <div className="absolute right-[-12%] bottom-0 h-[360px] w-[360px] rounded-full bg-[#ffac0a]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-8 md:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full overflow-hidden rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#06070a] md:rounded-[32px]"
        >
          <div className="relative h-full min-h-[360px] sm:min-h-[460px] md:min-h-[560px] lg:min-h-0">
            <img
              src={ceoImage}
              alt="Yogeswara Rao Veeravalli seated in office"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-[#8491ab]">
                Founder & CEO
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
                Yogeswara Rao Veeravalli
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-full flex-col justify-center gap-6 md:gap-8"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 rounded-sm border border-white/10 bg-[#06070a] px-3 py-1.5">
                <span className="h-px w-8 bg-gradient-to-r from-[#0175ff] to-[#ffcd7d]" />
                <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#8491ab]">
                  CEO Thought
                </span>
              </div>
              <div className="h-px flex-1 bg-[rgba(125,164,255,0.16)]" />
            </div>
            <h2 className="max-w-[680px] text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[40px] md:text-[52px] lg:text-[56px]">
              India will not follow the AI future. We will help create it.
            </h2>
            <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#b0bed9] md:text-lg">
              By 2030, artificial intelligence will become the foundation of global power, innovation, and progress. RASY is building ecosystems, training minds, creating solutions, and empowering the next generation of AI leaders across education, cybersecurity, innovation, and implementation.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[22px] border border-[rgba(125,164,255,0.16)] bg-[#06070a] p-5 shadow-[0_24px_80px_rgba(1,117,255,0.08)] sm:p-6 md:rounded-[24px] md:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(1,117,255,0.22),transparent_34%),radial-gradient(circle_at_86%_100%,rgba(255,205,125,0.16),transparent_38%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffcd7d] to-transparent opacity-70" />

            <div className="relative z-10">
              <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#0175ff] to-[#ffcd7d]" />
              <h3 className="text-xl font-medium tracking-[-0.02em] text-white md:text-2xl">
                Founder&apos;s vision
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7] text-[#b0bed9]">
                &quot;This is a movement to transform ideas into intelligence, turn ambitions into global leadership, and make India the center of AI excellence.&quot;
              </p>

              <div className="mt-6 rounded-[18px] border border-[rgba(125,164,255,0.16)] bg-black/60 p-3 sm:p-4">
                <button
                  type="button"
                  onClick={toggleAudio}
                  className="group relative flex w-full flex-col items-start gap-4 overflow-hidden rounded-[15px] border border-white/30 bg-black px-4 py-4 text-left transition-all duration-300 hover:scale-[1.01] hover:brightness-125 sm:flex-row sm:items-center sm:px-5"
                  style={{
                    boxShadow:
                      "inset -4px 3px 9px 0px #0175ff, inset 3px -2px 8px 0px #ffcd7d, 0 0 32px rgba(1,117,255,0.18)",
                  }}
                  aria-label={isPlaying ? "Pause CEO audio message" : "Listen to CEO audio message"}
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-black shadow-[0_0_28px_rgba(255,205,125,0.32)]">
                    {isPlaying ? (
                      <span className="flex gap-1">
                        <span className="h-4 w-1.5 rounded-full bg-black" />
                        <span className="h-4 w-1.5 rounded-full bg-black" />
                      </span>
                    ) : (
                      <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-black" />
                    )}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#d1d4e3]">
                      {isPlaying ? "Playing CEO message" : "Listen to CEO message"}
                    </span>
                    <span className="mt-1 text-sm leading-relaxed text-[#b0bed9]">
                      Hear Yogeswara Rao Veeravalli&apos;s vision for AI leadership.
                    </span>
                  </span>
                </button>
                <audio
                  ref={audioRef}
                  preload="metadata"
                  onEnded={() => setIsPlaying(false)}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                >
                  <source src={ceoAudio} type="audio/mp4" />
                </audio>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
