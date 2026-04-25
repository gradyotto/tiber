import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import PulseSection from "@/components/PulseSection";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Main content */}
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      {/* <PulseSection /> */}
      <EmailCaptureForm />
      <Footer />
    </main>
  );
};

export default Index;
