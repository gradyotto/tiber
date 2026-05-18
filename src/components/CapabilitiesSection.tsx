const capabilities = [
  {
    num: "01. System",
    title: "Algorithmic Quoting",
    description:
      "Proprietary geometric analysis engine delivers instant pricing for complex defense-grade components.",
  },
  {
    num: "02. Output",
    title: "Precision Machining",
    description:
      "Specialized in 6061/7075 aluminum, 17-4/304/316 stainless, and tool steel. Tolerances to ±0.0005\".",
  },
  {
    num: "03. Velocity",
    title: "Speed as a Feature",
    description:
      "CAD to quote in seconds. Algorithmic CAM path generation eliminates the bottleneck.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-navy/10">
      {capabilities.map((cap, i) => (
        <div
          key={cap.title}
          className={`p-10 lg:p-14 transition-colors hover:bg-navy/[0.02] ${
            i < 2 ? "border-b md:border-b-0 md:border-r border-navy/10" : ""
          } ${i === 1 ? "bg-navy/[0.015]" : ""}`}
        >
          <span className="font-mono text-[10px] text-navy/40 mb-6 block uppercase tracking-[0.25em]">
            {cap.num}
          </span>
          <h3 className="font-serif italic font-bold text-2xl text-navy mb-4">
            {cap.title}
          </h3>
          <p className="text-sm text-navy/60 leading-relaxed">{cap.description}</p>
        </div>
      ))}
    </section>
  );
};

export default CapabilitiesSection;
