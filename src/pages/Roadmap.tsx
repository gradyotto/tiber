import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roadmapSteps = [
  {
    id: 1,
    title: "INDUSTRIAL ADDITIVE MANUFACTURING",
    description: "Defense-grade 3D printing with carbon fiber composites and high-performance polymers.",
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "CNC MILLING & TURNING",
    description: "Precision machining capabilities for metals and advanced materials.",
    status: "2026",
  },
  {
    id: 3,
    title: "AUTONOMOUS FACTORY",
    description: "Lights-out manufacturing with AI-driven quality control and logistics.",
    status: "2027",
  },
];

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 border-b border-ghost overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-mono text-xs text-primary tracking-widest mb-4 animate-fade-up">
            // MANUFACTURING EVOLUTION
          </p>
          <h1 className="font-sans font-black text-4xl md:text-6xl tracking-tight uppercase leading-none animate-fade-up" style={{ animationDelay: "100ms" }}>
            THE <span className="text-primary">ROAD</span> AHEAD
          </h1>
          <p className="font-mono text-sm text-muted-foreground mt-6 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            From additive manufacturing to fully autonomous production. Follow the river to see where we're headed.
          </p>
        </div>

        {/* Corner markers */}
        <div className="corner-marker top-6 left-6">+</div>
        <div className="corner-marker top-6 right-6">+</div>
      </section>

      {/* Roadmap River Section */}
      <section className="relative py-20 px-6 min-h-[800px]">
        {/* River SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grid pattern */}
          <defs>
            <pattern id="roadmap-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="hsl(var(--ghost))"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roadmap-grid)" />

          {/* Main River Path - flowing S-curve from top center through the page */}
          <path
            d="M 600 -50 
               Q 600 50, 450 150
               Q 300 250, 300 200
               Q 300 250, 450 300
               Q 600 350, 900 400
               Q 1050 450, 900 550
               Q 750 650, 350 650
               Q 100 650, -50 750"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className="animate-pulse"
            style={{ filter: "drop-shadow(0 0 12px hsl(var(--primary) / 0.6))" }}
          />

          {/* Tributary streams */}
          <path
            d="M 0 250 Q 100 230, 200 250"
            stroke="hsl(var(--ghost))"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M 1200 350 Q 1050 380, 950 350"
            stroke="hsl(var(--ghost))"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M 500 800 Q 480 720, 550 680"
            stroke="hsl(var(--ghost))"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />

          {/* Waypoint 1 - Industrial Additive Manufacturing */}
          <circle
            cx="300"
            cy="200"
            r="12"
            fill="hsl(var(--primary))"
            opacity="1"
          />
          <circle
            cx="300"
            cy="200"
            r="20"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            className="animate-pulse"
          />
          <circle
            cx="300"
            cy="200"
            r="28"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />

          {/* Waypoint 2 - CNC Milling & Turning */}
          <circle
            cx="900"
            cy="400"
            r="12"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="4 3"
            opacity="0.6"
          />
          <circle
            cx="900"
            cy="400"
            r="20"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            fill="none"
            opacity="0.4"
          />

          {/* Waypoint 3 - Autonomous Factory */}
          <circle
            cx="350"
            cy="650"
            r="12"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="4 3"
            opacity="0.5"
          />
          <circle
            cx="350"
            cy="650"
            r="20"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            fill="none"
            opacity="0.3"
          />
        </svg>

        {/* Waypoint Cards - positioned relative to section */}
        {/* Waypoint 1 - outside river, bottom-left corner near top-right of waypoint */}
        <div 
          className="absolute z-10 opacity-0 animate-fade-up"
          style={{ 
            top: "5%", 
            left: "30%",
            animationDelay: "300ms",
            animationFillMode: "forwards"
          }}
        >
          <div className="bg-background/90 backdrop-blur-sm border border-primary p-6 max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-primary">01</span>
              <span className="font-mono text-xs px-2 py-0.5 bg-primary text-primary-foreground">
                {roadmapSteps[0].status}
              </span>
            </div>
            <h3 className="font-sans font-black text-lg tracking-tight uppercase text-foreground mb-2">
              {roadmapSteps[0].title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground">
              {roadmapSteps[0].description}
            </p>
          </div>
        </div>

        {/* Waypoint 2 - inside river, top-right corner near bottom-left of waypoint */}
        <div 
          className="absolute z-10 opacity-0 animate-fade-up"
          style={{ 
            top: "53%", 
            left: "52%",
            animationDelay: "500ms",
            animationFillMode: "forwards"
          }}
        >
          <div className="bg-background/90 backdrop-blur-sm border border-ghost hover:border-primary transition-colors duration-300 p-6 max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-muted-foreground">02</span>
              <span className="font-mono text-xs px-2 py-0.5 border border-ghost text-muted-foreground">
                {roadmapSteps[1].status}
              </span>
            </div>
            <h3 className="font-sans font-black text-lg tracking-tight uppercase text-foreground mb-2">
              {roadmapSteps[1].title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground">
              {roadmapSteps[1].description}
            </p>
          </div>
        </div>

        {/* Waypoint 3 - inside river, bottom-right corner near top-left of waypoint */}
        <div 
          className="absolute z-10 opacity-0 animate-fade-up"
          style={{ 
            top: "62%", 
            left: "5%",
            animationDelay: "700ms",
            animationFillMode: "forwards"
          }}
        >
          <div className="bg-background/90 backdrop-blur-sm border border-ghost hover:border-primary transition-colors duration-300 p-6 max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-muted-foreground">03</span>
              <span className="font-mono text-xs px-2 py-0.5 border border-ghost text-muted-foreground">
                {roadmapSteps[2].status}
              </span>
            </div>
            <h3 className="font-sans font-black text-lg tracking-tight uppercase text-foreground mb-2">
              {roadmapSteps[2].title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground">
              {roadmapSteps[2].description}
            </p>
          </div>
        </div>

        {/* Corner markers */}
        <div className="corner-marker bottom-6 left-6">+</div>
        <div className="corner-marker bottom-6 right-6">+</div>
      </section>

      <Footer />
    </div>
  );
};

export default Roadmap;
