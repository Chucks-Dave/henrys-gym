import { FaBolt, FaBrain, FaDumbbell } from "react-icons/fa6";

const reasons = [
  {
    title: "Improved Physical Health",
    description:
      "Youth boxing builds strength, coordination, balance, footwork, and cardiovascular fitness through structured, age-aware training.",
    icon: FaDumbbell,
    className: "",
  },
  {
    title: "Enhanced Mental Health",
    description:
      "Boxing lessons help kids practice focus, patience, emotional control, and confidence in a supportive coaching environment.",
    icon: FaBrain,
    className: "",
  },
  {
    title: "Increased Energy Levels",
    description:
      "Active training gives young athletes a positive outlet for energy while building discipline, respect, and healthy routines.",
    icon: FaBolt,
    className: "",
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
            Youth boxing classes in Rio Rancho help children grow stronger, sharper, and more
            confident through safe fundamentals and character-focused coaching.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[920px]">
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map(({ title, description, icon: Icon, className }) => (
              <article
                key={title}
                className={`flex h-full flex-col items-start rounded-[8px] border border-[#ececec] bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,.06)] ${className}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff3339] text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[18px] font-black leading-tight text-[#555]">{title}</h3>
                <p className="mt-3 text-[14px] leading-[1.45] text-[#8f8f8f]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
