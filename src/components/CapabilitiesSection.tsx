import { Calculator, Crosshair, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Calculator,
    title: "INSTANT QUOTING",
    description: "We hold the inventory. You hold the schedule.",
  },
  {
    icon: Crosshair,
    title: "5-AXIS PRECISION",
    description: "Inconel, Titanium, Hardened Steel.",
  },
  {
    icon: Zap,
    title: "RAPID DEPLOYMENT",
    description: "From CAD to Part in 24 hours.",
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

      {/* Bottom row - Full width card */}
      <div className="border-t border-ghost p-8 lg:p-12 card-hover group">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight uppercase text-foreground">
            AMERICAN DYNAMISM
          </h3>
          <p className="font-mono text-sm md:text-base text-muted-foreground">
            Rebuilding the industrial base, one micron at a time.
          </p>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-16 bg-ghost group-hover:bg-primary transition-colors duration-500" />
            <div className="w-2 h-2 rotate-45 border border-ghost group-hover:border-primary group-hover:bg-primary transition-all duration-500" />
            <div className="h-px w-16 bg-ghost group-hover:bg-primary transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
