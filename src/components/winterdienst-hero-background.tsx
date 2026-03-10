"use client";

import { ReactNode, useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  opacity: number;
}

interface WinterdienstHeroBackgroundProps {
  contentDark: ReactNode;
  contentLight: ReactNode;
}

const SNOWFLAKE_COUNT = 150;

function createSnowflake(width: number, height: number): Snowflake {
  return {
    x: Math.random() * width,
    y: Math.random() * height - height,
    size: 1 + Math.random() * 4,
    speed: 0.5 + Math.random() * 1.5,
    drift: -0.3 + Math.random() * 0.6,
    opacity: 0.2 + Math.random() * 0.8,
  };
}

// Animation loop timing (in milliseconds):
// 0–3s:   img1 visible, no snow
// 3–6s:   snowfall active (0.5s fade-in)
// 6–7s:   snowfall fades out (1s)
// 6–8s:   crossfade img1→img2 (2s)
// 8–11s:  img2 fully visible, clean road
// 11–13s: crossfade img2→img1 (2s)
// 13s:    loop restarts
const LOOP_DURATION = 13000;
const SNOW_START = 3000;
const SNOW_FADE_OUT_START = 6000;
const SNOW_FADE_OUT_END = 7000;
const CROSSFADE_START = 6000;
const CROSSFADE_END = 8000;
const CROSSFADE_BACK_START = 11000;
const CROSSFADE_BACK_END = 13000;

export function WinterdienstHeroBackground({
  contentDark,
  contentLight,
}: WinterdienstHeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const overlayWhiteRef = useRef<HTMLDivElement>(null);
  const overlayDarkRef = useRef<HTMLDivElement>(null);
  const textDarkRef = useRef<HTMLDivElement>(null);
  const textLightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const overlayWhite = overlayWhiteRef.current;
    const overlayDark = overlayDarkRef.current;
    const textDark = textDarkRef.current;
    const textLight = textLightRef.current;
    if (!canvas || !img1 || !img2 || !overlayWhite || !overlayDark || !textDark || !textLight)
      return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      snowflakesRef.current = Array.from({ length: SNOWFLAKE_COUNT }, () =>
        createSnowflake(canvas.width, canvas.height)
      );
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    snowflakesRef.current = Array.from({ length: SNOWFLAKE_COUNT }, () =>
      createSnowflake(canvas.width, canvas.height)
    );

    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - startTimeRef.current) % LOOP_DURATION;

      // --- Image opacity ---
      let img1Opacity = 1;
      let img2Opacity = 0;

      if (elapsed >= CROSSFADE_START && elapsed < CROSSFADE_END) {
        const t = (elapsed - CROSSFADE_START) / (CROSSFADE_END - CROSSFADE_START);
        img1Opacity = 1 - t;
        img2Opacity = t;
      } else if (elapsed >= CROSSFADE_END && elapsed < CROSSFADE_BACK_START) {
        img1Opacity = 0;
        img2Opacity = 1;
      } else if (elapsed >= CROSSFADE_BACK_START && elapsed < CROSSFADE_BACK_END) {
        const t =
          (elapsed - CROSSFADE_BACK_START) / (CROSSFADE_BACK_END - CROSSFADE_BACK_START);
        img1Opacity = t;
        img2Opacity = 1 - t;
      }

      img1.style.opacity = String(img1Opacity);
      img2.style.opacity = String(img2Opacity);

      // --- crossT: 0 = img1 phase, 1 = img2 phase ---
      let crossT = 0;
      if (elapsed >= CROSSFADE_START && elapsed < CROSSFADE_END) {
        crossT = (elapsed - CROSSFADE_START) / (CROSSFADE_END - CROSSFADE_START);
      } else if (elapsed >= CROSSFADE_END && elapsed < CROSSFADE_BACK_START) {
        crossT = 1;
      } else if (elapsed >= CROSSFADE_BACK_START && elapsed < CROSSFADE_BACK_END) {
        crossT =
          1 - (elapsed - CROSSFADE_BACK_START) / (CROSSFADE_BACK_END - CROSSFADE_BACK_START);
      }

      // Overlays
      overlayWhite.style.opacity = String(1 - crossT);
      overlayDark.style.opacity = String(crossT);

      // Text layers — switch pointer-events at midpoint to keep buttons clickable
      textDark.style.opacity = String(1 - crossT);
      textLight.style.opacity = String(crossT);
      textDark.style.pointerEvents = crossT > 0.5 ? "none" : "auto";
      textLight.style.pointerEvents = crossT > 0.5 ? "auto" : "none";

      // --- Canvas snowfall ---
      let canvasAlpha = 0;
      if (elapsed >= SNOW_START && elapsed < SNOW_FADE_OUT_START) {
        const fadeInDuration = 500;
        canvasAlpha = Math.min((elapsed - SNOW_START) / fadeInDuration, 1);
      } else if (elapsed >= SNOW_FADE_OUT_START && elapsed < SNOW_FADE_OUT_END) {
        canvasAlpha =
          1 - (elapsed - SNOW_FADE_OUT_START) / (SNOW_FADE_OUT_END - SNOW_FADE_OUT_START);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (canvasAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = canvasAlpha;

        const flakes = snowflakesRef.current;
        for (let i = 0; i < flakes.length; i++) {
          const f = flakes[i];
          f.y += f.speed;
          f.x += f.drift;
          if (f.y > canvas.height + f.size) {
            f.y = -f.size;
            f.x = Math.random() * canvas.width;
          }
          if (f.x > canvas.width + f.size) f.x = -f.size;
          if (f.x < -f.size) f.x = canvas.width + f.size;

          ctx.beginPath();
          ctx.arc(f.x, f.y, f.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
          ctx.fill();
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      aria-hidden="false"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Background images */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={img1Ref}
        src="/winterdienst/hintergrund/img1.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 1,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={img2Ref}
        src="/winterdienst/hintergrund/img2.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0,
        }}
      />

      {/* White overlay — img1 phase */}
      <div
        ref={overlayWhiteRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.65) 100%)",
          opacity: 1,
        }}
      />

      {/* Dark overlay — img2 phase */}
      <div
        ref={overlayDarkRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0, 20, 40, 0.55) 0%, rgba(0, 20, 40, 0.35) 100%)",
          opacity: 0,
        }}
      />

      {/* Snowflake canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Dark text layer — img1 phase */}
      <div
        ref={textDarkRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          opacity: 1,
        }}
      >
        {contentDark}
      </div>

      {/* Light text layer — img2 phase */}
      <div
        ref={textLightRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        {contentLight}
      </div>
    </div>
  );
}
