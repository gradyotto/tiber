import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCaptureForm from "@/components/EmailCaptureForm";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 border-b border-ghost relative">
        {/* Corner markers */}
        <span className="corner-marker top-20 left-6">+</span>
        <span className="corner-marker top-20 right-6">+</span>
        
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs text-primary uppercase tracking-wider opacity-0 animate-fade-up">
            &gt; ABOUT TIBER
          </span>
          <h1 className="mt-4">
            <span className="block font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-foreground uppercase leading-[0.9] opacity-0 animate-fade-up animate-delay-100">
              REBUILDING THE
            </span>
            <span className="block font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-foreground uppercase leading-[0.9] opacity-0 animate-fade-up animate-delay-200">
              INDUSTRIAL BASE
            </span>
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-up animate-delay-300">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              &gt; 01 — MISSION
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              AMERICAN DYNAMISM
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary">Tiber</span> was founded with a singular mission: to rebuild and{" "}
              <span className="text-primary">secure America's manufacturing capabilities</span>.
              In an era where supply chains have become 
              strategic vulnerabilities, we believe that critical parts should be made 
              on American soil, by American hands.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Named after the river that built an empire, <span className="text-primary">Tiber</span> represents the 
              infrastructure that enables greatness. We are the backbone of the 
              next industrial revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-up animate-delay-300">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              &gt; 02 — ORIGIN
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
              dependent on foreign suppliers for <span className="text-primary">mission-critical parts</span>.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary">Tiber</span> was created to solve this. Based in <span className="text-primary">Phoenix, Arizona</span>, we operate 
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
          <div className="opacity-0 animate-fade-up animate-delay-300">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              &gt; 03 — CAPABILITIES
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              DEFENSE-GRADE<br />PRECISION
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              We specialize in industrial composites and high-performance materials: 
              Carbon Fiber Nylon, Polycarbonate, ABS, and beyond. Every part we produce 
              meets the exacting standards required by defense, aerospace, and{" "}
              <span className="text-primary">critical infrastructure applications</span>.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary">24H</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">CAD TO PART</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary">250°C+</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">HIGH TEMP</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary">100%</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">USA MADE</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary">RAPID</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">PROTOTYPING</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmailCaptureForm />
      <Footer />
    </main>
  );
};

export default About;
