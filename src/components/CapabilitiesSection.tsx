import { Calculator, Cog, Flag } from "lucide-react";

const capabilities = [
  {
    icon: Calculator,
    title: "ALGORITHMIC QUOTING",
    description: "Instant pricing. Zero friction.",
  },
  {
    icon: Cog,
    title: "PRECISION MACHINING",
    description: "Aluminum. Stainless. Tool Steel.",
  },
  {
    icon: Flag,
    title: "0% OVERSEAS OUTSOURCING",
    description: "Every part made on American soil.",
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
              <h3 className="font-sans font-black text-xl tracking-tight uppercase text-foreground">
                {cap.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-sm text-muted-foreground">
                {cap.description}
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
