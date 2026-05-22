interface TiberRiverMapProps {
  className?: string;
}

const TiberRiverMap = ({ className = "" }: TiberRiverMapProps) => {
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
      />

      {/* No Phoenix marker */}

    </svg>
  );
};

export default TiberRiverMap;