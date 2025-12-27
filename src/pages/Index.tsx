import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";
import TiberRiverFlow from "@/components/TiberRiverFlow";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Full-page river background */}
      <div className="absolute inset-0 opacity-60 pointer-events-none overflow-hidden">
        <TiberRiverFlow className="w-full h-full min-h-[400vh]" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <CapabilitiesSection />
        <RoadmapSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
