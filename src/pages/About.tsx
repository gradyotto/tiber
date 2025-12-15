import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs text-safety uppercase tracking-wider">
            // ABOUT TIBER
          </span>
          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-foreground uppercase mt-4 leading-[0.9]">
            REBUILDING THE<br />
            INDUSTRIAL BASE
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              01 — MISSION
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              AMERICAN DYNAMISM
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Tiber was founded with a singular mission: to rebuild and secure America's 
              manufacturing capabilities. In an era where supply chains have become 
              strategic vulnerabilities, we believe that critical parts should be made 
              on American soil, by American hands.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Named after the river that built an empire, Tiber represents the 
              infrastructure that enables greatness. We are the backbone of the 
              next industrial revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              02 — ORIGIN
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              BORN FROM NECESSITY
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Our founders witnessed firsthand the erosion of American manufacturing 
              capacity. Critical defense programs delayed by months. Medical device 
              companies unable to source precision components. Aerospace firms 
              dependent on foreign suppliers for mission-critical parts.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Tiber was created to solve this. Based in Phoenix, Arizona, we operate 
              at the intersection of advanced manufacturing technology and relentless 
              execution. Our algorithmic quoting system eliminates friction. Our 
              24-hour deployment capability eliminates waiting.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              03 — CAPABILITIES
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              DEFENSE-GRADE<br />PRECISION
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              We specialize in industrial composites and high-performance materials: 
              Carbon Fiber Nylon, Polycarbonate, ABS, and beyond. Every part we produce 
              meets the exacting standards required by defense, aerospace, and critical 
              infrastructure applications.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-ghost p-4">
                <span className="font-mono text-2xl font-bold text-safety">24H</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">CAD TO PART</p>
              </div>
              <div className="border border-ghost p-4">
                <span className="font-mono text-2xl font-bold text-safety">0.001"</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">TOLERANCE</p>
              </div>
              <div className="border border-ghost p-4">
                <span className="font-mono text-2xl font-bold text-safety">100%</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">USA MADE</p>
              </div>
              <div className="border border-ghost p-4">
                <span className="font-mono text-2xl font-bold text-safety">ITAR</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">COMPLIANT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tighter text-foreground uppercase">
            JOIN THE REBUILD
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
            Whether you're building the next generation of defense systems or 
            scaling critical infrastructure, Tiber is your manufacturing partner.
          </p>
          <div className="mt-8 inline-block border border-ghost px-8 py-4 bg-ghost/20 hover:bg-ghost/40 transition-colors cursor-pointer">
            <span className="font-mono text-xs text-foreground uppercase tracking-wider">
              [ GET A QUOTE ]
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
