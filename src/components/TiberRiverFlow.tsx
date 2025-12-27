interface TiberRiverFlowProps {
  className?: string;
}

const TiberRiverFlow = ({ className = "" }: TiberRiverFlowProps) => {
  return (
    <svg
      viewBox="0 0 800 2400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMin slice"
    >
      {/* Grid lines for technical feel */}
      <defs>
        <pattern id="grid-flow" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="hsl(var(--ghost))"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </pattern>
        
        {/* Animated dash for flowing effect */}
        <linearGradient id="riverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#grid-flow)" />

      {/* Extended Tiber River - flows through entire page, left-aligned */}
      <path
        d="M 250 -60 
           Q 200 0, 150 60
           Q 100 120, 120 180 
           Q 140 240, 80 300 
           Q 20 360, 60 420 
           Q 100 480, 40 540 
           Q -20 600, 30 660
           Q 80 720, 20 780
           Q -40 840, 40 900
           Q 120 960, 60 1020
           Q 0 1080, 80 1140
           Q 160 1200, 100 1260
           Q 40 1320, 120 1380
           Q 200 1440, 140 1500
           Q 80 1560, 160 1620
           Q 240 1680, 180 1740
           Q 120 1800, 200 1860
           Q 280 1920, 220 1980
           Q 160 2040, 240 2100
           Q 320 2160, 260 2220
           Q 200 2280, 150 2400
           Q 100 2500, 50 2600"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))" }}
      />
      
      {/* Glowing outer river edge */}
      <path
        d="M 250 -60 
           Q 200 0, 150 60
           Q 100 120, 120 180 
           Q 140 240, 80 300 
           Q 20 360, 60 420 
           Q 100 480, 40 540 
           Q -20 600, 30 660
           Q 80 720, 20 780
           Q -40 840, 40 900
           Q 120 960, 60 1020
           Q 0 1080, 80 1140
           Q 160 1200, 100 1260
           Q 40 1320, 120 1380
           Q 200 1440, 140 1500
           Q 80 1560, 160 1620
           Q 240 1680, 180 1740
           Q 120 1800, 200 1860
           Q 280 1920, 220 1980
           Q 160 2040, 240 2100
           Q 320 2160, 260 2220
           Q 200 2280, 150 2400
           Q 100 2500, 50 2600"
        stroke="hsl(var(--primary))"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        opacity="0.1"
        style={{ filter: "blur(8px)" }}
      />

      {/* Tributary rivers along the flow */}
      <path
        d="M 150 60 Q 200 80, 250 70"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 80 300 Q 130 320, 180 300"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 40 900 Q 100 920, 160 890"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 140 1500 Q 200 1520, 260 1490"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Phoenix marker - on the river line */}
      <circle
        cx="80"
        cy="300"
        r="8"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
      <circle
        cx="80"
        cy="300"
        r="14"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      >
        <animate
          attributeName="r"
          values="14;20;14"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.1;0.3"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Location label */}
      <text
        x="100"
        y="305"
        fill="hsl(var(--primary))"
        fontSize="12"
        fontFamily="monospace"
        fontWeight="bold"
      >
        PHOENIX, AZ
      </text>

      {/* Coordinate markers */}
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

      {/* Section waypoint markers along the river */}
      <circle cx="40" cy="900" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="100" cy="1260" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="140" cy="1500" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="200" cy="1860" r="4" fill="hsl(var(--primary))" opacity="0.5" />
    </svg>
  );
};

export default TiberRiverFlow;
