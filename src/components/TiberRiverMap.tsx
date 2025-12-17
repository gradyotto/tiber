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
      preserveAspectRatio="xMidYMid meet"
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

      {/* Tiber River - Centered winding path */}
      <path
        d="M 850 -40 
           Q 780 20, 700 80
           Q 620 140, 580 200 
           Q 540 260, 480 300 
           Q 420 340, 400 400 
           Q 380 460, 320 500 
           Q 260 540, 180 520 
           Q 100 500, 40 560
           Q -20 620, -60 650"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        className="animate-pulse"
        style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))" }}
      />

      {/* Tributary rivers */}
      <path
        d="M 720 100 Q 660 130, 620 150"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 550 250 Q 500 270, 480 300"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 280 550 Q 220 530, 180 520"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Phoenix marker - centered on the river */}
      <circle
        cx="480"
        cy="300"
        r="8"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
      <circle
        cx="480"
        cy="300"
        r="14"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Location label */}
      <text
        x="500"
        y="305"
        fill="hsl(var(--primary))"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        PHOENIX, AZ
      </text>

      {/* Coordinate markers - Phoenix coordinates */}
      <text
        x="20"
        y="30"
        fill="hsl(var(--muted-foreground))"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.7"
      >
        33.4484° N
      </text>
      <text
        x="20"
        y="45"
        fill="hsl(var(--muted-foreground))"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.7"
      >
        112.0740° W
      </text>
    </svg>
  );
};

export default TiberRiverMap;
