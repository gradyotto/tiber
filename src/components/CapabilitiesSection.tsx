import { Calculator, Cog } from "lucide-react";
import missionGraphic from "@/assets/mission-graphic.svg";

const capabilities = [
  {
    renderIcon: () => <Calculator className="w-8 h-8 text-muted-foreground" strokeWidth={1} />,
    title: "ALGORITHMIC QUOTING",
    description: "Instant pricing. Zero friction.",
  },
  {
    renderIcon: () => <Cog className="w-8 h-8 text-muted-foreground" strokeWidth={1} />,
    title: "PRECISION MACHINING",
    description: "Aluminum. Stainless. Tool Steel.",
  },
  {
    renderIcon: () => <img src={missionGraphic} alt="American flag" className="h-8 w-auto" />,
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
