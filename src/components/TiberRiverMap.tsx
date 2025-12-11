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

      {/* Tiber River - Main highlighted feature */}
      <path
        d="M 380 0 
           Q 360 50, 370 100 
           Q 390 150, 360 200 
           Q 340 250, 380 300 
           Q 420 350, 380 400 
           Q 350 450, 390 500 
           Q 410 530, 380 560
           Q 360 580, 340 600"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        className="animate-pulse"
        style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))" }}
      />

      {/* Tributary rivers */}
      <path
        d="M 500 100 Q 450 150, 370 180"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 550 250 Q 480 280, 400 300"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 250 350 Q 300 370, 360 380"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Rome marker */}
      <circle
        cx="380"
        cy="400"
        r="8"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
      <circle
        cx="380"
        cy="400"
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
        y="405"
        fill="hsl(var(--muted-foreground))"
        fontSize="10"
        fontFamily="monospace"
        opacity="0.6"
      >
        ROMA
      </text>
      <text
        x="350"
        y="30"
        fill="hsl(var(--muted-foreground))"
        fontSize="10"
        fontFamily="monospace"
        opacity="0.6"
      >
        TIBER RIVER
      </text>

      {/* Coordinate markers */}
      <text
        x="20"
        y="30"
        fill="hsl(var(--muted-foreground))"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.4"
      >
        41.9028° N
      </text>
      <text
        x="20"
        y="45"
        fill="hsl(var(--muted-foreground))"
        fontSize="8"
        fontFamily="monospace"
        opacity="0.4"
      >
        12.4964° E
      </text>
    </svg>
  );
};

export default TiberRiverMap;
