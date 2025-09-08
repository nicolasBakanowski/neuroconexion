import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="font-sans text-[#4A3B37] bg-[#F5F0E8]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodSection />
      <ContactSection />
    </div>
  );
}
