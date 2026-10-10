import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { FooterSection } from "@/components/FooterSection";
import { ProgramVideo } from "@/components/ProgramVideo";

export const metadata: Metadata = {
  title: "Youth Boxing Training Programs",
  description:
    "Explore youth boxing programs in Rio Rancho covering fundamentals, pad work, conditioning, self-defense, discipline, and confidence.",
  alternates: {
    canonical: "/training-programs",
  },
  openGraph: {
    title: "Youth Boxing Training Programs | Egbe's Youth Boxing",
    description:
      "Age-appropriate youth boxing training that builds strong fundamentals, fitness, confidence, discipline, and character.",
    url: "/training-programs",
    images: ["/PHOTO-2026-08-10-03-47-50%202.jpg"],
  },
};

const programs = [
  {
    number: "01",
    title: "Boxing Fundamentals",
    description:
      "Young athletes learn proper stance, footwork, balance, defensive movement, and punching technique. Each lesson reinforces safe form and strong habits before speed or power.",
    media: {
      type: "video" as const,
      src: "/boxing-fundamentals.mp4",
      label: "Youth athletes practicing boxing fundamentals",
    },
  },
  {
    number: "02",
    title: "Pad Work & Heavy Bag Training",
    description:
      "Supervised pad drills and heavy bag exercises improve hand-eye coordination, accuracy, timing, speed, and endurance while keeping every session focused and engaging.",
    media: {
      type: "video" as const,
      src: "/pad-work-heavy-bag.mp4",
      label: "Coach-led boxing pad and bag training",
    },
  },
  {
    number: "03",
    title: "Strength & Conditioning",
    description:
      "Age-appropriate circuits build stamina, coordination, mobility, and overall fitness through jump rope, bodyweight exercises, agility drills, and purposeful boxing movement.",
    media: {
      type: "video" as const,
      src: "/strength-conditioning.mp4",
      label: "Youth boxing strength and conditioning session",
    },
  },
  {
    number: "04",
    title: "Self-Defense & Situational Awareness",
    description:
      "Students learn to recognize potential danger, maintain safe distances, protect themselves, and make responsible decisions. We emphasize awareness and avoiding confrontation.",
    media: {
      type: "image" as const,
      src: "/PHOTO-2026-08-10-03-47-49%204.jpg",
      alt: "Young boxer developing defensive skills with a coach",
    },
  },
  {
    number: "05",
    title: "Discipline, Respect & Self-Control",
    description:
      "Boxing is about more than physical strength. Training encourages patience, accountability, emotional control, teamwork, respect for others, and confidence earned through effort.",
    media: {
      type: "image" as const,
      src: "/PHOTO-2026-08-10-03-47-50%204.jpg",
      alt: "Coach helping a youth boxer build confidence and discipline",
    },
  },
];

const outcomes = [
  "Small, focused coaching environment",
  "Safe and age-appropriate instruction",
  "Skills that carry beyond the gym",
];

export default function TrainingProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f4f5] text-[#171717]">
      <header className="border-b border-white/10 bg-[#0b0b0c] text-white">
        <div className="mx-auto flex min-h-20 w-full max-w-[1180px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
            aria-label="Egbe's Youth Boxing home"
          >
            <Image
              src="/boxing-logo.jpg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full object-cover"
            />
            <span className="truncate text-[16px] font-black uppercase sm:text-[20px]">
              Egbes Youth Boxing
            </span>
          </Link>

          <nav className="flex items-center gap-3" aria-label="Training programs navigation">
            <Link
              href="/"
              className="hidden text-[13px] font-bold uppercase text-white/75 transition-colors duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339] sm:inline"
            >
              Home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center bg-[#ff3339] px-4 text-[12px] font-black uppercase transition-[background-color,transform] duration-150 hover:bg-[#e9232a] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-5"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#0b0b0c] px-5 pb-14 pt-12 text-white sm:px-8 sm:pb-20 sm:pt-16 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div>
            <p className="text-[13px] font-black uppercase text-[#ff3339]">Our Training Programs</p>
            <h1 className="mt-5 max-w-[820px] text-[clamp(2.25rem,7vw,5.25rem)] font-black uppercase leading-[0.96]">
              More Than Boxing.
              <span className="mt-2 block text-[#ff3339]">Character For Life.</span>
            </h1>
          </div>

          <div className="border-l-2 border-[#ff3339] pl-5">
            <p className="text-[16px] leading-[1.65] text-white/75">
              Structured training for pre-teens and teenagers that develops strength,
              confidence, discipline, and self-control in a safe coaching environment.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10" aria-labelledby="program-list-title">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="flex flex-col gap-5 border-b border-black/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[13px] font-black uppercase text-[#ff3339]">Built For Young Athletes</p>
              <h2 id="program-list-title" className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-black uppercase leading-none">
                What We Teach
              </h2>
            </div>
            <p className="max-w-[510px] text-[15px] leading-[1.65] text-[#5c5c62]">
              Every session challenges young athletes, builds healthy habits, and teaches
              skills they can use inside and outside the gym.
            </p>
          </div>

          <div>
            {programs.map((program, index) => (
              <article
                key={program.number}
                className="grid gap-7 border-b border-black/15 py-10 md:grid-cols-[minmax(280px,0.82fr)_minmax(0,1fr)] md:items-center md:gap-12 lg:py-14"
              >
                <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                  {program.media.type === "video" ? (
                    <div className="overflow-hidden rounded-[8px] border border-black/10 bg-[#111] shadow-[0_14px_35px_rgba(0,0,0,0.12)]">
                      <ProgramVideo
                        src={program.media.src}
                        label={program.media.label}
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-[#dedee1] shadow-[0_14px_35px_rgba(0,0,0,0.12)]">
                      <Image
                        src={program.media.src}
                        alt={program.media.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : undefined}>
                  <span className="font-mono text-[13px] font-bold text-[#ff3339]">
                    {program.number}
                  </span>
                  <h3 className="mt-3 max-w-[580px] text-[clamp(1.6rem,3vw,2.5rem)] font-black leading-[1.05]">
                    {program.title}
                  </h3>
                  <p className="mt-5 max-w-[620px] text-[16px] leading-[1.7] text-[#5c5c62] sm:text-[17px]">
                    {program.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-center">
          <div>
            <p className="text-[13px] font-black uppercase text-[#ff3339]">A Stronger Next Step</p>
            <h2 className="mt-4 max-w-[700px] text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.98]">
              Help Your Child Build Confidence That Lasts
            </h2>
          </div>

          <div>
            <ul className="space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-center gap-3 text-[15px] font-bold">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff3339] text-white">
                    <FaCheck aria-hidden="true" className="h-3 w-3" />
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[#171717] px-6 text-[13px] font-black uppercase text-white transition-[background-color,transform] duration-150 hover:bg-[#ff3339] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
            >
              Ask About Training
              <FaArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
