interface TiberRiverFlowProps {
  className?: string;
}

const TiberRiverFlow = ({ className = "" }: TiberRiverFlowProps) => {
  return (
    <svg
      viewBox="0 0 800 3200"
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

      {/* Extended Tiber River - flows right side initially, then left side for content sections, then continues through roadmap */}
      <path
        d="M 900 -60 
           Q 850 -20, 800 30
           Q 750 80, 720 120 
           Q 680 160, 700 210 
           Q 720 260, 650 300 
           Q 580 340, 620 390 
           Q 660 440, 580 480 
           Q 500 520, 400 560
           Q 300 600, 200 680
           Q 100 760, 120 840
           Q 140 920, 100 1000
           Q 60 1080, 100 1160
           Q 140 1240, 80 1320
           Q 20 1400, 60 1480
           Q 100 1560, 50 1640
           Q 0 1720, 40 1800
           Q 80 1880, 30 1960
           Q -20 2040, 20 2120
           Q 60 2200, 80 2300
           Q 100 2400, 80 2500
           Q 60 2600, 100 2700
           Q 140 2800, 80 2900
           Q 20 3000, 60 3100
           Q 100 3200, 50 3400"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))" }}
      />
      
      {/* Glowing outer river edge */}
      <path
        d="M 900 -60 
           Q 850 -20, 800 30
           Q 750 80, 720 120 
           Q 680 160, 700 210 
           Q 720 260, 650 300 
           Q 580 340, 620 390 
           Q 660 440, 580 480 
           Q 500 520, 400 560
           Q 300 600, 200 680
           Q 100 760, 120 840
           Q 140 920, 100 1000
           Q 60 1080, 100 1160
           Q 140 1240, 80 1320
           Q 20 1400, 60 1480
           Q 100 1560, 50 1640
           Q 0 1720, 40 1800
           Q 80 1880, 30 1960
           Q -20 2040, 20 2120
           Q 60 2200, 80 2300
           Q 100 2400, 80 2500
           Q 60 2600, 100 2700
           Q 140 2800, 80 2900
           Q 20 3000, 60 3100
           Q 100 3200, 50 3400"
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
        d="M 250 700 Q 180 720, 150 690"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 120 1100 Q 180 1120, 220 1090"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 80 1500 Q 140 1520, 180 1490"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 60 1900 Q 120 1920, 160 1890"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />

      <path
        d="M 100 2350 Q 160 2370, 200 2340"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 120 2650 Q 180 2670, 220 2640"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 80 2950 Q 140 2970, 180 2940"
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

      {/* Section waypoint markers along the river - on left side */}
      <circle cx="100" cy="1000" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="80" cy="1320" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="50" cy="1640" r="4" fill="hsl(var(--primary))" opacity="0.5" />
      <circle cx="30" cy="1960" r="4" fill="hsl(var(--primary))" opacity="0.5" />
    </svg>
  );
};

export default TiberRiverFlow;
