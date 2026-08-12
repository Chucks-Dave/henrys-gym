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

        <div className="relative z-10 mx-auto box-border flex min-h-[360px] w-full max-w-[820px] items-center justify-center overflow-hidden px-5 pb-28 pt-20 text-center sm:px-8 md:min-h-[300px] md:justify-start md:px-0 md:text-left lg:min-h-[360px]">
          <div className="max-w-full">
            <h1 className="max-w-full overflow-hidden text-[clamp(2.1rem,8.6vw,3.35rem)] font-black uppercase leading-[0.98] tracking-[0] text-white md:text-[clamp(3.2rem,6.2vw,5.5rem)] lg:max-w-[760px]">
              Train And Develop
              <br />
              Habits Champions
              <br />
              <span className="text-[#ff3339]">Possess</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] font-bold leading-[1.45] text-white/85 sm:text-[17px] md:mx-0">
              Youth boxing lessons that help kids build discipline, confidence,
              focus, and respect inside and outside the gym.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
