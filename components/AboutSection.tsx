export function AboutSection() {
  return (
    <section id="about" className="bg-[#e9e7e9] px-6 py-[42px] text-[#111] sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-[780px] items-start gap-10 md:grid-cols-[314px_1fr] md:gap-[52px]">
        <div
          role="img"
          aria-label="Coach holding mitts during boxing training"
          className="aspect-[314/343] w-full bg-zinc-300 bg-cover rounded bg-center md:h-[343px]"
          style={{ backgroundImage: "url('/PHOTO-2026-08-10-03-47-50.jpg')" }}
        />

        <div className="md:pt-1">
          <div className="mb-4 flex items-start gap-3.5">
            <div aria-hidden="true" className="mt-1 h-[65px] w-[3px] shrink-0 bg-[#ff3339]" />
            <h2 className="max-w-[420px] text-[clamp(2rem,3.1vw,2.1rem)] font-black uppercase leading-[1.02] tracking-[0]">
              How We Got Started
              <br />
              In This Business
            </h2>
          </div>

          <div className="max-w-[400px] space-y-6 text-[12px] font-normal leading-[1.6] text-[#4b4b4b]">
            <p>
              Boxchampy started with a simple goal: create a training space where beginners,
              young athletes, and everyday fighters can build real boxing skill with confidence.
              Every session is shaped around discipline, fitness, footwork, and proper technique,
              so each athlete learns how to move, strike, defend, and grow at their own pace.
            </p>
            <p>
              What began as focused coaching has grown into a supportive boxing community. We
              help students improve their strength, focus, coordination, and mindset while keeping
              training safe, structured, and enjoyable from the first lesson.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-3 inline-flex min-h-8 items-center bg-[#ff3339] px-4 text-[10px] font-black uppercase leading-none text-white transition hover:bg-[#f02027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
