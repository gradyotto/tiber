import { Calculator, Cog } from "lucide-react";
import missionGraphic from "@/assets/mission-graphic.svg";

const iconClass = "w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300";
const glowDiv = <div className="absolute inset-0 w-8 h-8 bg-primary opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-300" />;

const capabilities = [
  {
    renderIcon: () => (
      <div className="relative">
        <Calculator className={iconClass} strokeWidth={1} />
        {glowDiv}
      </div>
    ),
    title: "ALGORITHMIC QUOTING",
    description: "Instant pricing. Zero friction.",
  },
  {
    renderIcon: () => (
      <div className="relative">
        <Cog className={iconClass} strokeWidth={1} />
        {glowDiv}
      </div>
    ),
    title: "PRECISION MACHINING",
    description: "Aluminum. Stainless. Tool Steel.",
  },
  {
    renderIcon: () => (
      <div className="relative">
        <img src={missionGraphic} alt="American flag" className="h-8 w-auto" />
        {glowDiv}
      </div>
    ),
    title: "0% OVERSEAS OUTSOURCING",
    description: "Every part made on American soil.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="border-t border-ghost">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {capabilities.map((cap, index) => (
          <div
            key={cap.title}
            className={`p-8 lg:p-12 card-hover group ${
              index < 2 ? "border-b md:border-b-0 md:border-r border-ghost" : "border-b md:border-b-0"
            }`}
          >
            <div className="space-y-6">
              {cap.renderIcon()}

              <h3 className="font-sans font-black text-xl tracking-tight uppercase text-foreground">
                {cap.title}
              </h3>

              <p className="font-mono text-sm text-muted-foreground">
                {cap.description}
              </p>

              <div className="h-px bg-ghost w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
