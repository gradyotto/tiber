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

      {/* Extended Tiber River - flows through entire page */}
      <path
        d="M 900 -60 
           Q 850 -20, 800 30
           Q 750 80, 720 120 
           Q 680 160, 700 210 
           Q 720 260, 650 300 
           Q 580 340, 620 390 
           Q 660 440, 580 480 
           Q 500 520, 450 560
           Q 400 600, 350 650
           Q 300 700, 380 780
           Q 460 860, 400 940
           Q 340 1020, 420 1100
           Q 500 1180, 450 1260
           Q 400 1340, 480 1420
           Q 560 1500, 500 1580
           Q 440 1660, 520 1740
           Q 600 1820, 540 1900
           Q 480 1980, 560 2060
           Q 640 2140, 580 2220
           Q 520 2300, 450 2400
           Q 380 2500, 300 2600"
        stroke="url(#riverGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 10px hsl(var(--primary) / 0.5))" }}
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 20 10 20;10 20 0 20;0 20 10 20"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Glowing outer river edge */}
      <path
        d="M 900 -60 
           Q 850 -20, 800 30
           Q 750 80, 720 120 
           Q 680 160, 700 210 
           Q 720 260, 650 300 
           Q 580 340, 620 390 
           Q 660 440, 580 480 
           Q 500 520, 450 560
           Q 400 600, 350 650
           Q 300 700, 380 780
           Q 460 860, 400 940
           Q 340 1020, 420 1100
           Q 500 1180, 450 1260
           Q 400 1340, 480 1420
           Q 560 1500, 500 1580
           Q 440 1660, 520 1740
           Q 600 1820, 540 1900
           Q 480 1980, 560 2060
           Q 640 2140, 580 2220
           Q 520 2300, 450 2400
           Q 380 2500, 300 2600"
        stroke="hsl(var(--primary))"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        opacity="0.1"
        style={{ filter: "blur(8px)" }}
      />

      {/* Tributary rivers along the flow */}
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
        d="M 200 700 Q 280 720, 340 690"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 600 1100 Q 520 1120, 450 1090"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 300 1500 Q 380 1520, 460 1490"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 700 1900 Q 620 1920, 560 1890"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      {/* Phoenix marker - on the river line */}
      <circle
        cx="650"
        cy="300"
        r="8"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
      <circle
        cx="650"
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
        x="670"
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
      <circle cx="400" cy="940" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="450" cy="1260" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="500" cy="1580" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="540" cy="1900" r="4" fill="hsl(var(--primary))" opacity="0.5" />
    </svg>
  );
};

export default TiberRiverFlow;
