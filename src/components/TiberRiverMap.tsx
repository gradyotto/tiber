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

      {/* Tiber River - More winding path from top right to bottom left */}
      <path
        d="M 720 20 
           Q 750 60, 700 100 
           Q 640 140, 680 190 
           Q 720 240, 650 280 
           Q 580 320, 620 370 
           Q 660 420, 580 460 
           Q 500 500, 450 480 
           Q 400 460, 350 500 
           Q 300 540, 220 520 
           Q 140 500, 100 550
           Q 60 600, 20 580"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        className="animate-pulse"
        style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))" }}
      />

      {/* Tributary rivers */}
      <path
        d="M 800 80 Q 760 100, 710 110"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 750 300 Q 700 310, 640 300"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 400 580 Q 350 560, 300 540"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Phoenix marker - at the top of the river */}
      <circle
        cx="720"
        cy="20"
        r="8"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
      <circle
        cx="720"
        cy="20"
        r="14"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* El Segundo marker - toward the bottom */}
      <circle
        cx="100"
        cy="550"
        r="6"
        fill="hsl(var(--primary))"
        opacity="0.7"
      />
      <circle
        cx="100"
        cy="550"
        r="12"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        fill="none"
        opacity="0.25"
      />

      {/* Location labels */}
      <text
        x="680"
        y="50"
        fill="hsl(var(--muted-foreground))"
        fontSize="10"
        fontFamily="monospace"
        opacity="0.6"
      >
        PHOENIX
      </text>
      <text
        x="115"
        y="555"
        fill="hsl(var(--muted-foreground))"
        fontSize="10"
        fontFamily="monospace"
        opacity="0.6"
      >
        EL SEGUNDO
      </text>
      <text
        x="450"
        y="350"
        fill="hsl(var(--muted-foreground))"
        fontSize="10"
        fontFamily="monospace"
        opacity="0.4"
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
