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
      <div className="py-16 px-6 relative">
        {/* Roadmap Cards - with inline waypoints */}
        <div className="max-w-4xl mx-auto relative z-10 space-y-16 md:space-y-20">
          {roadmapSteps.map((step, index) => (
            <div 
              key={step.id}
              className="flex items-start gap-6 md:gap-10 opacity-0 animate-fade-up"
              style={{ 
                animationDelay: `${300 + index * 200}ms`,
                animationFillMode: "forwards"
              }}
            >
              {/* Waypoint marker - inline with card */}
              <div className="flex-shrink-0 relative">
                {index === 0 ? (
                  // Active waypoint
                  <div className="relative">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary" />
                    <div className="absolute inset-0 -m-2 w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-primary opacity-50 animate-pulse" />
                    <div className="absolute inset-0 -m-4 w-12 h-12 md:w-13 md:h-13 rounded-full border border-primary opacity-20" />
                  </div>
                ) : (
                  // Future waypoint
                  <div className="relative">
                    <div 
                      className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-primary opacity-60"
                      style={{ borderStyle: 'dashed' }}
                    />
                    <div 
                      className="absolute inset-0 -m-2 w-8 h-8 md:w-9 md:h-9 rounded-full border border-primary opacity-30"
                      style={{ borderStyle: 'dashed' }}
                    />
                  </div>
                )}
              </div>

              {/* Card content */}
              <div className={`flex-1 bg-background/90 backdrop-blur-sm border ${index === 0 ? 'border-primary' : 'border-ghost hover:border-primary'} transition-colors duration-300 p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-mono text-xs ${index === 0 ? 'text-primary' : 'text-muted-foreground'}`}>
                    0{step.id}
                  </span>
                  <span className={`font-mono text-xs px-2 py-0.5 ${index === 0 ? 'bg-primary text-primary-foreground' : 'border border-ghost text-muted-foreground'}`}>
                    {step.status}
                  </span>
                </div>
                <h3 className="font-sans font-black text-lg md:text-xl tracking-tight uppercase text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-mono text-xs md:text-sm text-muted-foreground">
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
