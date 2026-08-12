
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { EnrollFaqSection } from "@/components/EnrollFaqSection";
import { FooterSection } from "@/components/FooterSection";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen max-w-full overflow-x-hidden bg-[#eceaec] font-sans">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <GallerySection />
      <EnrollFaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
