"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

interface HausmeisterTimelineStepsProps {
  steps: TimelineStep[];
}

export function HausmeisterTimelineSteps({
  steps,
}: HausmeisterTimelineStepsProps) {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const indexAttr = entry.target.getAttribute("data-step-index");
          if (indexAttr === null) return;

          const index = Number(indexAttr);
          if (Number.isNaN(index)) return;

          setVisibleSteps((previous) => {
            if (previous.includes(index)) return previous;
            return [...previous, index];
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid md:grid-cols-4 gap-8">
      {steps.map((step, index) => {
        const isVisible = visibleSteps.includes(index);

        return (
          <div
            key={index}
            ref={(node) => {
              stepRefs.current[index] = node;
            }}
            data-step-index={index}
            style={{ transitionDelay: `${index * 120}ms` }}
            className={`relative text-center transition-all duration-700 ease-out motion-reduce:transition-none ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 md:opacity-100 md:translate-y-0"
            }`}
          >
            <div className="relative z-10 w-20 h-20 mx-auto bg-brand-green rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-green/30">
              <span className="text-2xl font-bold text-white">{step.step}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
