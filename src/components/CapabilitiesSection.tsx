import { Calculator, Cog, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Calculator,
    title: "ALGORITHMIC QUOTING",
    description: "Instant pricing. Zero friction.",
    // Old Glory Red — official US flag red
    color: "#B22234",
    colorName: "OLD GLORY RED · #B22234",
  },
  {
    icon: Cog,
    title: "PRECISION MACHINING",
    description: "Aluminum. Stainless. Tool Steel.",
    // Flag Red / Pantone 186 — common patriotic crimson
    color: "#C8102E",
    colorName: "FLAG RED · #C8102E",
  },
  {
    icon: Zap,
    title: "SPEED AS A FEATURE",
    description: "From CAD to Quote in seconds.",
    // Deep Barn Red — darker, muted, industrial
    color: "#8B0000",
    colorName: "BARN RED · #8B0000",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="border-t border-ghost">
      {/* Top row - 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {capabilities.map((cap, index) => (
          <div
            key={cap.title}
            className={`p-8 lg:p-12 card-hover group ${
              index < 2 ? "border-b md:border-b-0 md:border-r border-ghost" : "border-b md:border-b-0"
            }`}
          >
            <div className="space-y-6">
              {/* Icon */}
              <div className="relative">
                <cap.icon
                  className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  strokeWidth={1}
                />
                {/* Hover glow */}
                <div className="absolute inset-0 w-8 h-8 bg-primary opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Title */}
              <h3
                className="font-sans font-black text-xl tracking-tight uppercase"
                style={{ color: cap.color }}
              >
                {cap.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-sm text-muted-foreground">
                {cap.description}
              </p>

              {/* Color label */}
              <p
                className="font-mono text-[10px] tracking-widest"
                style={{ color: cap.color }}
              >
                {cap.colorName}
              </p>

              {/* Bottom accent line */}
              <div className="h-px bg-ghost w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
