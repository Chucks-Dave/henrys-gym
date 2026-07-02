
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eceaec] font-sans">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
