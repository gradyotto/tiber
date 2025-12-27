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

      {/* Extended Tiber River - flows right side initially, then curves off-screen to the left */}
      <path
        d="M 900 -60 
           Q 850 -20, 800 30
           Q 750 80, 720 120 
           Q 680 160, 700 210 
           Q 720 260, 650 300 
           Q 580 340, 620 390 
           Q 660 440, 580 480 
           Q 500 520, 400 560
           Q 300 600, 180 660
           Q 60 720, -100 760
           Q -260 800, -450 820"
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
           Q 300 600, 180 660
           Q 60 720, -100 760
           Q -260 800, -450 820"
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

      {/* Second river - reenters from left beneath Defense Grade Precision in Capabilities, flows across to right, then down right side */}
      <path
        d="M -100 1650
           Q 100 1480, 300 1520
           Q 500 1560, 650 1620
           Q 800 1680, 820 1780
           Q 840 1880, 780 1960
           Q 720 2040, 760 2120
           Q 800 2200, 750 2280
           Q 700 2360, 740 2440
           Q 780 2520, 730 2600
           Q 680 2680, 720 2760
           Q 760 2840, 900 2900"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.6))" }}
      />
      
      {/* Glowing outer edge for second river */}
      <path
        d="M -100 1650
           Q 100 1480, 300 1520
           Q 500 1560, 650 1620
           Q 800 1680, 820 1780
           Q 840 1880, 780 1960
           Q 720 2040, 760 2120
           Q 800 2200, 750 2280
           Q 700 2360, 740 2440
           Q 780 2520, 730 2600
           Q 680 2680, 720 2760
           Q 760 2840, 900 2900"
        stroke="hsl(var(--primary))"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        opacity="0.1"
        style={{ filter: "blur(8px)" }}
      />

      {/* Tributaries for second river */}
      <path
        d="M 780 2000 Q 820 2020, 860 2010"
        stroke="hsl(var(--ghost))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 750 2300 Q 790 2320, 830 2310"
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

    </svg>
  );
};

export default TiberRiverFlow;
