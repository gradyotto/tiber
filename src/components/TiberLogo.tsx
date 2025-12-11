interface TiberLogoProps {
  className?: string;
}

const TiberLogo = ({ className = "" }: TiberLogoProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon frame */}
      <path
        d="M100 10L180 55V145L100 190L20 145V55L100 10Z"
        stroke="currentColor"
        strokeWidth="1"
        className="text-ghost"
      />
      
      {/* Inner structure - the TT mark */}
      <g className="text-foreground" fill="currentColor">
        {/* Left T */}
        <rect x="45" y="60" width="50" height="8" />
        <rect x="66" y="60" width="8" height="80" />
        
        {/* Right T */}
        <rect x="105" y="60" width="50" height="8" />
        <rect x="126" y="60" width="8" height="80" />
      </g>
      
      {/* Accent lines */}
      <line
        x1="50"
        y1="155"
        x2="150"
        y2="155"
        stroke="hsl(22 100% 50%)"
        strokeWidth="2"
        className="animate-line-reveal"
      />
      
      {/* Corner accents */}
      <circle cx="100" cy="10" r="3" fill="hsl(22 100% 50%)" />
      <circle cx="180" cy="55" r="2" className="fill-ghost" />
      <circle cx="180" cy="145" r="2" className="fill-ghost" />
      <circle cx="100" cy="190" r="2" className="fill-ghost" />
      <circle cx="20" cy="145" r="2" className="fill-ghost" />
      <circle cx="20" cy="55" r="2" className="fill-ghost" />
    </svg>
  );
};

export default TiberLogo;
