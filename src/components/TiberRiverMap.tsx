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
            opacity="0.3"
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
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Tributary rivers */}
      <path
        d="M 800 150 Q 760 170, 710 180"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 750 320 Q 700 330, 660 310"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 400 600 Q 350 580, 300 560"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Phoenix marker - positioned more centrally for mobile visibility */}
      <circle
        cx="450"
        cy="500"
        r="8"
        fill="hsl(var(--primary))"
        opacity="1"
      />
      <circle
        cx="450"
        cy="500"
        r="14"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        className="animate-pulse"
      />
      <circle
        cx="450"
        cy="500"
        r="20"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
      />

      {/* Location label */}
      <text
        x="475"
        y="505"
        fill="hsl(var(--primary))"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        PHOENIX, AZ
      </text>

    </svg>
  );
};

export default TiberRiverMap;