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

      {/* Coastline - Italy's western coast */}
      <path
        d="M 0 200 Q 100 180, 150 250 Q 200 320, 180 400 Q 160 480, 200 550 L 200 600 L 0 600 Z"
        fill="hsl(var(--ghost))"
        opacity="0.15"
      />

      {/* Tiber River - Main highlighted feature - flows top right to bottom left */}
      <path
        d="M 750 0 
           Q 700 80, 650 120 
           Q 580 180, 520 250 
           Q 450 320, 380 380 
           Q 300 450, 220 500 
           Q 140 550, 80 580
           Q 40 600, 0 620"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        className="animate-pulse"
        style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))" }}
      />

      {/* Tributary rivers */}
      <path
        d="M 800 150 Q 720 170, 640 200"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 650 350 Q 550 370, 450 360"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 350 500 Q 280 480, 200 490"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Phoenix marker */}
      <circle
        cx="380"
        cy="380"
        r="8"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
      <circle
        cx="380"
        cy="380"
        r="16"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        className="animate-ping"
      />

      {/* Location labels */}
      <text
        x="400"
        y="385"
        fill="hsl(var(--muted-foreground))"
        fontSize="10"
        fontFamily="monospace"
        opacity="0.6"
      >
        PHOENIX
      </text>
      <text
        x="680"
        y="30"
        fill="hsl(var(--muted-foreground))"
        fontSize="10"
        fontFamily="monospace"
        opacity="0.6"
      >
        TIBER RIVER
      </text>

      {/* Coordinate markers - Phoenix coordinates */}
      <text
        x="20"
        y="30"
        fill="hsl(var(--muted-foreground))"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.4"
      >
        33.4484° N
      </text>
      <text
        x="20"
        y="45"
        fill="hsl(var(--muted-foreground))"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.4"
      >
        112.0740° W
      </text>
    </svg>
  );
};

export default TiberRiverMap;
