export function AboutSection() {
  return (
    <section id="about" className="bg-[#e9e7e9] px-6 py-[42px] text-[#111] sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-[780px] items-start gap-10 md:grid-cols-[314px_1fr] md:gap-[52px]">
        <div
          role="img"
          aria-label="Boxer training with focus mitts"
          className="aspect-[314/343] w-full bg-zinc-300 bg-cover bg-center md:h-[343px]"
          style={{ backgroundImage: "url('/about.png')" }}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <a
            href="#signup"
            className="mt-3 inline-flex min-h-8 items-center bg-[#ff3339] px-4 text-[10px] font-black uppercase leading-none text-white transition hover:bg-[#f02027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
}
