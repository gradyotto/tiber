const roadmapSteps = [
  {
    id: 1,
    title: "INDUSTRIAL ADDITIVE MANUFACTURING",
    description: "Defense-grade 3D printing with carbon fiber composites and high-performance polymers.",
    status: "LOADING",
  },
  {
    id: 2,
    title: "CNC MILLING & TURNING",
    description: "Precision machining capabilities for metals and advanced materials.",
    status: "2027",
  },
  {
    id: 3,
    title: "AUTONOMOUS FACTORY",
    description: "Lights-out manufacturing with AI-driven quality control and logistics.",
    status: "2028",
  },
];

const RoadmapSection = () => {
  return (
    <section className="border-t border-ghost relative">
      {/* Roadmap Header */}
      <div className="py-16 px-6 border-b border-ghost relative">
        <span className="corner-marker top-6 left-6">+</span>
        <span className="corner-marker top-6 right-6">+</span>
        
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs text-primary uppercase tracking-wider opacity-0 animate-fade-up">
            // MANUFACTURING EVOLUTION
          </span>
          <h2 className="mt-4">
            <span className="block font-sans font-black text-4xl md:text-6xl tracking-tight text-foreground uppercase leading-[0.9] opacity-0 animate-fade-up animate-delay-100">
              THE <span className="text-primary">ROAD</span> AHEAD
            </span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-6 max-w-xl mx-auto opacity-0 animate-fade-up animate-delay-200">
            From additive manufacturing to fully autonomous production. Follow the river to see where we're headed.
          </p>
        </div>
      </div>

      {/* Roadmap Cards */}
      <div className="py-16 px-6 min-h-[600px] relative">
      {/* Roadmap Cards - positioned to the right of the river */}
      <div className="max-w-4xl mx-auto relative z-10 space-y-12 pl-8 md:pl-24">
          {roadmapSteps.map((step, index) => (
            <div 
              key={step.id}
              className="opacity-0 animate-fade-up ml-8 md:ml-16"
              style={{ 
                animationDelay: `${300 + index * 200}ms`,
                animationFillMode: "forwards"
              }}
            >
              <div className={`bg-background/90 backdrop-blur-sm border ${index === 0 ? 'border-primary' : 'border-ghost hover:border-primary'} transition-colors duration-300 p-6 max-w-lg`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-mono text-xs ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                    0{step.id}
                  </span>
                  <span className={`font-mono text-xs px-2 py-0.5 ${index === 0 ? 'bg-primary text-primary-foreground' : 'border border-ghost text-muted-foreground'}`}>
                    {step.status}
                  </span>
                </div>
                <h3 className="font-sans font-black text-lg tracking-tight uppercase text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corner markers */}
        <span className="corner-marker bottom-6 left-6">+</span>
        <span className="corner-marker bottom-6 right-6">+</span>
      </div>
    </section>
  );
};

export default RoadmapSection;
