
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { EnrollFaqSection } from "@/components/EnrollFaqSection";
import { FooterSection } from "@/components/FooterSection";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

const siteUrl = "https://www.egbeyouthboxing.com";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "@id": `${siteUrl}/#local-business`,
  name: "Egbe's Youth Boxing",
  url: siteUrl,
  logo: `${siteUrl}/boxing-logo.jpg`,
  image: [
    `${siteUrl}/hero-image.png`,
    `${siteUrl}/PHOTO-2026-08-10-03-47-50%202.jpg`,
    `${siteUrl}/PHOTO-2026-08-10-03-47-49%204.jpg`,
  ],
  description:
    "Youth boxing training in Rio Rancho, New Mexico helping kids build discipline, confidence, fitness, focus, respect, and character for life.",
  telephone: "+15055181598",
  email: "Egbeyouthboxing@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "33rd Cir SE",
    addressLocality: "Rio Rancho",
    addressRegion: "NM",
    postalCode: "87124",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Rio Rancho",
      addressRegion: "NM",
      addressCountry: "US",
    },
    {
      "@type": "City",
      name: "Albuquerque",
      addressRegion: "NM",
      addressCountry: "US",
    },
  ],
  knowsAbout: [
    "Youth boxing",
    "Kids boxing classes",
    "Boxing fundamentals",
    "Youth fitness",
    "Discipline and confidence training",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Youth boxing lessons",
        description:
          "Structured boxing fundamentals, conditioning, coordination, discipline, and confidence training for children and young athletes.",
      },
      areaServed: "Rio Rancho, NM",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen max-w-full overflow-x-hidden bg-[#eceaec] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
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
