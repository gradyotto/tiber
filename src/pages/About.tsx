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
          <span className="font-mono text-xs text-primary text-slate-50 uppercase tracking-wider opacity-0 animate-fade-up">
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
            <span className="font-mono text-xs text-primary text-slate-50 uppercase tracking-wider">
              &gt; 01 — MISSION
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              AMERICAN DYNAMISM
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary text-slate-50">Tiber</span> was founded with a singular mission: to rebuild and{" "}
              <span className="text-primary text-slate-50">secure America's manufacturing capabilities</span>.
              In an era where supply chains have become 
              strategic vulnerabilities, we believe that critical parts should be made 
              on American soil, by American hands.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Named after the river that built an empire, <span className="text-primary text-slate-50">Tiber</span> represents the{" "}
              <span className="text-primary text-slate-50">infrastructure that enables greatness</span>. We are the backbone of the 

              next industrial revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-up animate-delay-300">
            <span className="font-mono text-xs text-primary text-slate-50 uppercase tracking-wider">
              &gt; 02 — ORIGIN
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              BORN FROM NECESSITY
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              America's manufacturing capacity has been in decline for decades. Defense
              programs stall waiting on parts. Medical device companies can't source basic
              precision components. The <span className="text-primary text-slate-50">industrial base that once made this country
              untouchable</span> has eroded.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              We didn't come from the shop floor. We came from frustration — and from a
              genuine belief that <span className="text-primary text-slate-50">something better is possible</span>. The space economy
              is being unlocked. The robotics wave is coming. These are going to be the most
              significant technological shifts in a generation, and they will{" "}
              <span className="text-primary text-slate-50">demand precision-made parts at scale</span>. America needs to be
              positioned to supply them. Tiber is our answer to that.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-up animate-delay-300">
            <span className="font-mono text-xs text-primary text-slate-50 uppercase tracking-wider">
              &gt; 03 — CAPABILITIES
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              DEFENSE-GRADE<br />PRECISION
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              We specialize in <span className="text-primary text-slate-50">precision 3+2 CNC machining</span> of mission-critical metals: 
              6061 & 7075 aluminum, 4140 tool steel, and 17-4/304/316 stainless steel. 
              Every part we produce meets the exacting standards required by defense, 
              aerospace, and <span className="text-primary text-slate-50">critical infrastructure applications</span>.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary text-slate-50">INSTANT</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">CAD TO QUOTE</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary text-slate-50">±0.0005"</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">TOLERANCE</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary text-slate-50">100%</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">USA MADE</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary text-slate-50">3+2</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">AXIS MACHINING</p>
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
