import Image from "next/image";
import { FaBolt, FaBrain, FaDumbbell } from "react-icons/fa6";

const reasons = [
  {
    title: "Improved Physical Health",
    description:
      "Regular exercise can lead to enhanced cardiovascular health, stronger muscles and bones, improved flexibility, and increased endurance.",
    icon: FaDumbbell,
    className: "",
  },
  {
    title: "Enhanced Mental Health",
    description:
      "Exercise releases endorphins, often referred to as the feel-good hormones, which can elevate mood and reduce feelings of stress.",
    icon: FaBrain,
    className: "",
  },
  {
    title: "Increased Energy Levels",
    description:
      "Regular physical activity improves blood circulation and oxygen delivery to the body, resulting in increased energy levels and reduced fatigue.",
    icon: FaBolt,
    className: "",
  },
];

const imageTiles = [
  {
    src: "/PHOTO-2026-08-10-03-47-50%202.jpg",
    alt: "Boxer slipping a punch during mitt work",
    className: "aspect-[230/136] lg:col-start-1 lg:row-start-1",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-49%204.jpg",
    alt: "Boxing pad work session",
    className: "aspect-[230/136] lg:col-start-1 lg:row-start-2",
  },
  {
    src: "/PHOTO-2026-08-10-03-47-50%203.jpg",
    alt: "Boxer throwing a punch at focus mitts",
    className: "aspect-[240/290] lg:col-start-2 lg:row-span-2 lg:row-start-1",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-white px-6 py-16 text-[#444] sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="mx-auto max-w-[540px] text-center">
          <h2 className="text-[clamp(2.1rem,3.8vw,2.7rem)] font-black leading-none tracking-[0] text-[#3f3f3f]">
            Why Choose Us
          </h2>
          <p className="mt-4 text-[17px] leading-[1.45] text-[#9a9a9a]">
            Exercise is defined as any physical activity that makes your muscles work and requires
            your body to burn calories.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_410px] lg:gap-16">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {reasons.map(({ title, description, icon: Icon, className }) => (
              <article key={title} className={`flex items-start gap-5 ${className}`}>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4b4b4b] text-white">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-[18px] font-black leading-tight text-[#555]">{title}</h3>
                  <p className="mt-3 max-w-[230px] text-[14px] leading-[1.35] text-[#9a9a9a]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-[1fr_1.08fr] lg:grid-rows-2">
            {imageTiles.map(({ src, alt, className }) => (
              <div
                key={`${src}-${alt}`}
                className={`relative overflow-hidden rounded-[10px] shadow-[0_12px_24px_rgba(0,0,0,.12)] ${className}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
