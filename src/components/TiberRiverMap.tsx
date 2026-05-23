import { useEffect, useRef, useState } from "react";

interface TiberRiverMapProps {
  className?: string;
}

const SESSION_KEY = "tiber-river-animated";

const TiberRiverMap = ({ className = "" }: TiberRiverMapProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyAnimated = sessionStorage.getItem(SESSION_KEY);
    if (!alreadyAnimated && pathRef.current) {
      setLength(pathRef.current.getTotalLength());
      setShouldAnimate(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }
  }, []);

  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Grid lines for technical feel */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="hsl(var(--ghost))"
            strokeWidth="0.5"
            opacity="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Tiber River - More winding path starting from outside view */}
      <path
        ref={pathRef}
        d="M 900 -60
           Q 850 -20, 800 30
           Q 750 80, 720 120
           Q 680 160, 700 210
           Q 720 260, 650 300
           Q 580 340, 620 390
           Q 660 440, 580 480
           Q 500 520, 450 500
           Q 400 480, 350 520
           Q 300 560, 220 540
           Q 140 520, 100 570
           Q 60 620, -20 600"
        stroke="white"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        opacity="1"
        style={
          shouldAnimate && length
            ? {
                strokeDasharray: length,
                strokeDashoffset: length,
                animation: "river-draw 2.8s cubic-bezier(0.65, 0, 0.35, 1) forwards",
              }
            : undefined
        }
      />

      <style>{`
        @keyframes river-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
};

export default TiberRiverMap;
