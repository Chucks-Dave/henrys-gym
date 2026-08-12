import Image from "next/image";

const navItems = ["Home", "About", "Contact"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#eceaec] pb-20 text-white md:pb-24">
      <div className="relative isolate lg:h-[560px] overflow-hidden bg-[#111] sm:h-[520px] md:h-[410px] lg:h-[480px] lg:px-16 xl:h-[560px] ">
        <Image
          src="/hero-image.png"
          alt="Boxer wearing red gloves in a dark gym"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center max-md:ml-12 px-3"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,.92)_19%,rgba(3,3,3,.42)_51%,rgba(3,3,3,.2)_100%)]" />

        <header className="relative z-10 mx-auto flex w-full items-center justify-between px-5 pt-4 sm:px-8 lg:px-0">
          <a href="#" className="flex min-w-0 items-center gap-2.5" aria-label="Boxchampy home">
            <Image
              src="/boxing-logo.jpg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="min-w-0 text-[clamp(1.25rem,6vw,1.45rem)] font-black uppercase leading-none tracking-[0] sm:text-[23px]">
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

        <div className="relative z-10 mx-auto flex min-h-[360px] w-full max-w-[780px] items-center justify-center px-5 pb-28 pt-20 text-center sm:px-8 md:min-h-[300px] md:justify-start md:px-0 md:text-left lg:min-h-[360px]">
          <h1 className="max-w-full text-[clamp(2.35rem,9.5vw,3.6rem)] font-black uppercase leading-[0.95] tracking-[0] text-white md:text-[clamp(3.4rem,7.2vw,6.4rem)] lg:max-w-[700px]">
            Fight Like
            <br />A <br className="md:hidden" />
            <span className="text-[#ff3339]">Champion</span>
          </h1>
        </div>
      </div>

    </section>
  );
}
