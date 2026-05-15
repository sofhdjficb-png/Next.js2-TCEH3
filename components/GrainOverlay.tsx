"use client";

import { useId } from "react";

export function GrainOverlay() {
  const uid = useId();
  const filterId = `grain-${uid.replace(/:/g, '')}`;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035]">
      <svg className="absolute inset-0 h-full w-full">
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>
    </div>
  );
}