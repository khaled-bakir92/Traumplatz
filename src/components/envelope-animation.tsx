"use client";

import { useEffect, useRef, useId } from "react";

export function EnvelopeAnimation() {
  const envBodyRef = useRef<SVGRectElement>(null);
  const envFlapRef = useRef<SVGGElement>(null);
  const envGroupRef = useRef<SVGGElement>(null);
  const paperGroupRef = useRef<SVGGElement>(null);
  const paperFoldRef = useRef<SVGGElement>(null);
  const penRef = useRef<SVGGElement>(null);
  const sealRef = useRef<SVGGElement>(null);
  const speedLinesRef = useRef<SVGGElement>(null);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const line3Ref = useRef<SVGPathElement>(null);

  const runningRef = useRef(false);
  const filterId = useId();

  useEffect(() => {
    function resetAll() {
      if (penRef.current) penRef.current.style.cssText = "opacity:0;transform:translate(248px,102px)";
      if (paperGroupRef.current) paperGroupRef.current.style.cssText = "transform:none;opacity:1";
      if (paperFoldRef.current) paperFoldRef.current.style.cssText = "transform:none";
      if (envGroupRef.current) envGroupRef.current.style.cssText = "transform:none;opacity:1";
      if (envFlapRef.current) envFlapRef.current.style.cssText = "transform-origin:340px 230px;transform:scaleY(-1)";
      if (sealRef.current) sealRef.current.style.cssText = "opacity:0;transform:none";
      if (speedLinesRef.current) speedLinesRef.current.style.opacity = "0";
      if (line1Ref.current) line1Ref.current.style.cssText = "stroke-dashoffset:200";
      if (line2Ref.current) line2Ref.current.style.cssText = "stroke-dashoffset:160";
      if (line3Ref.current) line3Ref.current.style.cssText = "stroke-dashoffset:120";
      speedLinesRef.current?.querySelectorAll("line").forEach((l) => {
        (l as SVGLineElement).style.cssText = "stroke-dashoffset:40;opacity:0";
      });
    }

    function wait(ms: number) {
      return new Promise<void>((r) => setTimeout(r, ms));
    }

    async function play() {
      if (runningRef.current) return;
      runningRef.current = true;
      resetAll();
      await wait(400);

      const pen = penRef.current;
      const envFlap = envFlapRef.current;
      const paperFold = paperFoldRef.current;
      const paperGroup = paperGroupRef.current;
      const envGroup = envGroupRef.current;
      const seal = sealRef.current;
      const speedLines = speedLinesRef.current;

      if (!pen || !envFlap || !paperFold || !paperGroup || !envGroup || !seal || !speedLines) {
        runningRef.current = false;
        return;
      }

      // PHASE 1: PEN WRITES
      pen.style.transition = "opacity .3s";
      pen.style.opacity = "1";
      pen.style.transform = "translate(248px,108px)";
      await wait(400);

      if (line1Ref.current) {
        line1Ref.current.style.transition = "stroke-dashoffset 1s ease-out";
        line1Ref.current.style.strokeDashoffset = "0";
      }
      pen.style.transition = "transform 1s ease-out";
      pen.style.transform = "translate(430px,109px)";
      await wait(1100);

      pen.style.transition = "transform .2s";
      pen.style.transform = "translate(248px,130px)";
      await wait(250);
      if (line2Ref.current) {
        line2Ref.current.style.transition = "stroke-dashoffset .8s ease-out";
        line2Ref.current.style.strokeDashoffset = "0";
      }
      pen.style.transition = "transform .8s ease-out";
      pen.style.transform = "translate(385px,128px)";
      await wait(900);

      pen.style.transition = "transform .2s";
      pen.style.transform = "translate(248px,151px)";
      await wait(250);
      if (line3Ref.current) {
        line3Ref.current.style.transition = "stroke-dashoffset .7s ease-out";
        line3Ref.current.style.strokeDashoffset = "0";
      }
      pen.style.transition = "transform .7s ease-out";
      pen.style.transform = "translate(340px,150px)";
      await wait(800);

      pen.style.transition = "opacity .4s, transform .4s";
      pen.style.opacity = "0";
      pen.style.transform = "translate(460px,60px)";
      await wait(600);

      // PHASE 2: ENVELOPE OPENS
      envFlap.style.transition = "transform .7s ease-in-out";
      envFlap.style.transformOrigin = "340px 230px";
      envFlap.style.transform = "scaleY(1)";
      await wait(800);

      // PHASE 3: PAPER FOLDS & SLIDES IN
      paperFold.style.transition = "transform .6s ease-in-out";
      paperFold.style.transformOrigin = "340px 280px";
      paperFold.style.transform = "scaleY(0.3)";
      await wait(700);

      paperGroup.style.transition = "transform .8s ease-in-out, opacity .6s ease-in .2s";
      paperGroup.style.transform = "translateY(120px)";
      paperGroup.style.opacity = "0";
      await wait(900);

      // PHASE 4: ENVELOPE CLOSES
      envFlap.style.transition = "transform .6s ease-in-out";
      envFlap.style.transform = "scaleY(-1)";
      await wait(400);

      seal.style.transition = "opacity .4s ease-out";
      seal.style.opacity = "1";
      await wait(600);

      // PHASE 5: SEND OFF
      speedLines.style.opacity = "1";
      const sLines = speedLines.querySelectorAll("line");
      sLines.forEach((l, i) => {
        const el = l as SVGLineElement;
        el.style.transition = `stroke-dashoffset .6s ease-out ${i * 0.1}s, opacity .6s ease-out ${i * 0.1}s`;
        el.style.strokeDashoffset = "0";
        el.style.opacity = ".5";
      });

      envGroup.style.transition = "transform .3s ease-out";
      envGroup.style.transform = "translate(0, -12px) rotate(-1deg)";
      seal.style.transition = "opacity .3s, transform .3s ease-out";
      seal.style.transform = "translate(0, -12px)";
      await wait(350);

      envGroup.style.transition = "transform 1.2s cubic-bezier(.4,.0,.2,1), opacity .9s ease-in .3s";
      envGroup.style.transform = "translate(400px, -130px) rotate(-6deg)";
      envGroup.style.opacity = "0";
      seal.style.transition = "opacity .6s ease-in .3s, transform 1.2s cubic-bezier(.4,.0,.2,1)";
      seal.style.transform = "translate(400px, -130px) rotate(-6deg)";
      seal.style.opacity = "0";

      sLines.forEach((l, i) => {
        setTimeout(() => { (l as SVGLineElement).style.opacity = "0"; }, 400 + i * 100);
      });

      await wait(1600);
      runningRef.current = false;

      // Loop
      await wait(800);
      play();
    }

    const timer = setTimeout(() => play(), 600);
    return () => clearTimeout(timer);
  }, []);

  const shId = `sh-${filterId}`;

  return (
    <svg viewBox="110 65 470 355" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ maxWidth: "280px" }}>
      <defs>
        <filter id={shId} x="-4%" y="-4%" width="108%" height="112%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity=".08" />
        </filter>
      </defs>

      <g>
        {/* Envelope */}
        <g ref={envGroupRef}>
          <rect ref={envBodyRef} x="195" y="230" width="290" height="170" rx="4" fill="#d4edda" stroke="#8abf96" strokeWidth="0.8" filter={`url(#${shId})`} />
          <line x1="210" y1="245" x2="470" y2="245" stroke="#b5d8be" strokeWidth=".5" />
          <g ref={envFlapRef} style={{ transformOrigin: "340px 230px", transform: "scaleY(-1)" }}>
            <path d="M195,230 L340,300 L485,230 Z" fill="#c3e6cb" stroke="#8abf96" strokeWidth="0.8" />
          </g>
          <rect x="432" y="250" width="36" height="28" rx="2" fill="#b5d8be" stroke="#8abf96" strokeWidth=".5" />
          <rect x="436" y="254" width="28" height="20" rx="1" fill="#a8d1b2" />
        </g>

        {/* Paper */}
        <g ref={paperGroupRef}>
          <g ref={paperFoldRef}>
            <rect x="220" y="80" width="240" height="200" rx="3" fill="#fff" stroke="#d8d4cc" strokeWidth="0.8" filter={`url(#${shId})`} />
            <line x1="240" y1="112" x2="440" y2="112" stroke="#e8e4dc" strokeWidth=".4" />
            <line x1="240" y1="132" x2="440" y2="132" stroke="#e8e4dc" strokeWidth=".4" />
            <line x1="240" y1="152" x2="440" y2="152" stroke="#e8e4dc" strokeWidth=".4" />
            <line x1="240" y1="172" x2="440" y2="172" stroke="#e8e4dc" strokeWidth=".4" />
            <line x1="240" y1="192" x2="440" y2="192" stroke="#e8e4dc" strokeWidth=".4" />
            <path ref={line1Ref} d="M248,108 Q270,105 300,110 Q330,114 370,107 Q400,104 430,109" fill="none" stroke="#3d3d3d" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="200" strokeDashoffset="200" />
            <path ref={line2Ref} d="M248,130 Q275,126 310,132 Q345,135 385,128" fill="none" stroke="#3d3d3d" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="160" strokeDashoffset="160" />
            <path ref={line3Ref} d="M248,151 Q268,148 295,153 Q320,156 340,150" fill="none" stroke="#3d3d3d" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="120" strokeDashoffset="120" />
          </g>
        </g>

        {/* Pen */}
        <g ref={penRef} style={{ opacity: 0, transform: "translate(248px,102px)" }}>
          <line x1="0" y1="0" x2="-28" y2="-38" stroke="#6b5b4a" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="0" y1="0" x2="-2" y2="-8" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="-14" cy="-19" r="1.2" fill="#8b7b6a" />
        </g>

        {/* Speed lines */}
        <g ref={speedLinesRef} opacity="0">
          <line x1="180" y1="300" x2="130" y2="305" stroke="#8abf96" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="40" strokeDashoffset="40" />
          <line x1="180" y1="320" x2="120" y2="328" stroke="#8abf96" strokeWidth="1" strokeLinecap="round" strokeDasharray="40" strokeDashoffset="40" />
          <line x1="190" y1="340" x2="140" y2="350" stroke="#8abf96" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="40" strokeDashoffset="40" />
        </g>

        {/* Seal */}
        <g ref={sealRef} opacity="0">
          <circle cx="340" cy="230" r="10" fill="#6aaf78" opacity=".85" />
          <path d="M335,228 Q335,224 338,224 Q340,224 340,227 Q340,224 342,224 Q345,224 345,228 Q345,231 340,235 Q335,231 335,228Z" fill="#fff" opacity=".9" />
        </g>
      </g>
    </svg>
  );
}
