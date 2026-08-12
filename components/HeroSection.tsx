import Image from "next/image";

const navItems = ["Home", "About", "Contact"];

const features = [
  {
    title: "Crossfit",
    icon: "/crosfit-icon.png",
    width: 28,
    height: 24,
  },
  {
    title: "Weights",
    icon: "/werights-icon.png",
    width: 28,
    height: 13,
  },
  {
    title: "Exercise",
    icon: "/exercise-icon.png",
    width: 30,
    height: 19,
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#eceaec] pb-20 text-white md:pb-24">
      <div className="relative isolate h-[560px] overflow-hidden bg-[#111] sm:h-[520px] md:h-[410px] lg:h-[480px] lg:px-16 xl:h-[560px]">
        <Image
          src="/hero-image.png"
          alt="Boxer wearing red gloves in a dark gym"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,.92)_19%,rgba(3,3,3,.42)_51%,rgba(3,3,3,.2)_100%)]" />

        <header className="relative z-10 mx-auto flex w-full  items-center justify-between px-0 pt-4 sm:px-0">
          <a href="#" className="flex items-center gap-2.5" aria-label="Boxchampy home">
            <Image src="/Logo-icon 1.png" alt="" width={38} height={40} className="h-9 w-auto" />
            <span className="text-[23px] font-black uppercase leading-none tracking-[-0.02em]">
              Boxchampy
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[12px] font-black uppercase leading-none tracking-[-0.01em] text-white transition hover:text-[#ff3b3f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3b3f]"
              >
                {item}
              </a>
            ))}
            <a
              href="#signup"
              className="bg-[#ff3339] px-5 py-4 text-[12px] font-black uppercase leading-none text-white transition hover:bg-[#f02027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Sign Up
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[360px] w-full max-w-[780px] items-center px-6 pb-28 pt-20 sm:px-0 md:min-h-[300px] lg:min-h-[360px]">
          <h1 className="max-w-[700px] text-[clamp(3.4rem,7.2vw,6.4rem)] font-black uppercase leading-[0.95] tracking-[0] text-white">
            Fight Like
            <br />A <span className="text-[#ff3339]">Champion</span>
          </h1>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[500px] h-28 -skew-y-[4deg] bg-[#eceaec] shadow-[0_-26px_60px_rgba(255,35,43,.16)] sm:top-[460px] md:top-[350px] lg:top-[420px] xl:top-[500px]"
      />

      <div className="relative z-20 mx-auto -mt-[70px] grid w-[min(525px,calc(100%-40px))] grid-cols-1 bg-white text-[#101010] shadow-[0_22px_55px_rgba(255,35,43,.12)] sm:grid-cols-3">
        {features.map((feature) => (
          <a
            key={feature.title}
            href={`#${feature.title.toLowerCase()}`}
            className="flex min-h-[98px] flex-col items-center justify-center gap-2 px-6 py-4 text-center transition hover:bg-zinc-50 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ff3339]"
          >
            <Image
              src={feature.icon}
              alt=""
              width={feature.width}
              height={feature.height}
              className="h-auto w-auto"
            />
            <span className="text-[18px] font-black uppercase leading-none tracking-[-0.01em] text-[#ff3339]">
              {feature.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
