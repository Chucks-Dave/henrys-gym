import Image from "next/image";

const navItems = ["Home", "About", "Contact"];

export function HeroSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#eceaec] pb-20 text-white md:pb-24">
      <div className="relative isolate lg:h-[560px] w-full max-w-full overflow-hidden bg-[#111] sm:h-[520px] md:h-[410px] lg:h-[480px] lg:px-16 xl:h-[560px]">
        <Image
          src="/hero-image.png"
          alt="Boxer wearing red gloves in a dark gym"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,.92)_19%,rgba(3,3,3,.42)_51%,rgba(3,3,3,.2)_100%)]" />

        <header className="relative z-10 mx-auto box-border flex w-full max-w-full items-center justify-between overflow-hidden px-4 pt-4 sm:px-8 lg:px-0">
          <a href="#" className="flex min-w-0 max-w-full items-center gap-2.5 overflow-hidden" aria-label="Boxchampy home">
            <Image
              src="/boxing-logo.jpg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
            <span className="min-w-0 max-w-full overflow-hidden text-[clamp(1rem,5.2vw,1.45rem)] font-black uppercase leading-[1.05] tracking-[0] sm:text-[23px]">
              Egbes Youth Boxing
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
              href="#contact"
              className="bg-[#ff3339] px-5 py-4 text-[12px] font-black uppercase leading-none text-white transition hover:bg-[#f02027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact Us
            </a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto box-border flex lg:min-h-[420px] w-full max-w-[820px] items-center justify-start overflow-hidden px-6 lg:pb-24 pt-16 text-left sm:min-h-[360px] sm:px-8 md:min-h-[300px] md:px-0 lg:min-h-[360px]">
          <div className="w-[58%] min-w-[220px] max-w-[360px] sm:w-full sm:max-w-full">
            <h1 className="max-w-full overflow-hidden text-[clamp(1.9rem,7.4vw,3rem)] font-black uppercase leading-[1] tracking-[0] text-white md:text-[clamp(3.2rem,6.2vw,5.5rem)] lg:max-w-[760px]">
              More Than Boxing
              <br />
              Building Character
              <br />
              <span className="text-[#ff3339]">For Life</span>
            </h1>
            <p className="my-3 max-w-[520px] text-[14px] font-bold leading-[1.45] text-white/85 sm:text-[17px]">
              Youth boxing lessons that help kids build discipline, confidence,
              focus, and respect inside and outside the gym.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
