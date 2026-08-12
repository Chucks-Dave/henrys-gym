const enrollHighlights = [
  "Structured boxing fundamentals",
  "Confidence and discipline building",
  "Experienced youth-friendly coaches",
  "Small group training sessions",
  "Real-time progress encouragement",
  "Fitness, focus, and coordination",
  "Safe beginner-friendly environment",
  "Flexible lesson scheduling",
];

const faqs = [
  {
    question: "What age can my child start boxing lessons?",
    answer:
      "Children can begin once they are comfortable following simple instructions and moving safely in a group setting. We adapt drills to each child's age, fitness, and confidence level.",
  },
  {
    question: "Does my child need boxing experience?",
    answer:
      "No. Beginners are welcome. We start with stance, footwork, coordination, light conditioning, and safe technique before progressing.",
  },
  {
    question: "Is the training safe for children?",
    answer:
      "Yes. Sessions focus on control, movement, discipline, and supervised drills. Coaches keep the work age-appropriate and safety-first.",
  },
  {
    question: "What should my child bring to class?",
    answer:
      "Comfortable sportswear, water, and training shoes are enough to start. If gloves or wraps are needed, we can guide you on the right options.",
  },
  {
    question: "Can parents watch the lessons?",
    answer:
      "Yes, parents can check in and observe. We want families to feel confident about the training environment and the child's progress.",
  },
];

export function EnrollFaqSection() {
  return (
    <section className="bg-[#f3f4f6] text-[#10131f]">
      <div className="mx-auto w-full max-w-[980px] px-6 py-7 sm:px-10 lg:px-0">
        <div>
          <h2 className="text-[22px] font-black leading-none tracking-[0] text-[#ff3339]">
            Why Enroll Your Child?
          </h2>
          <div className="mt-2 h-[2px] w-[88px] bg-[#ff3339]" />
          <p className="mt-4 max-w-[860px] text-[13px] leading-[1.35] text-[#43516c]">
            Our youth boxing support is built around stronger confidence, flexible learning,
            practical fitness, and a positive training mindset.
          </p>
        </div>

        <div className="mt-4 rounded-[4px] bg-[#1f1f1f] px-6 py-4">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
            {enrollHighlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-[4px] bg-white px-3 py-1 text-[10px] font-medium leading-none text-[#ff3339]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#eef4ff]">
        <div className="mx-auto grid w-full max-w-[980px] gap-8 px-6 py-6 sm:px-10 lg:grid-cols-[270px_1fr] lg:px-0">
          <div>
            <h2 className="text-[22px] font-black leading-tight tracking-[0] text-[#ff3339]">
              Frequently Asked Questions
            </h2>
            <div className="mt-2 h-[2px] w-[96px] bg-[#ff3339]" />
            <p className="mt-4 text-[13px] leading-[1.15] text-[#43516c]">
              Have questions about our youth boxing lessons, schedule, safety, or beginner
              training? Start here.
            </p>
            {/* <a
              href="#contact"
              className="mt-8 inline-flex h-[33px] w-[150px] items-center justify-center rounded-[4px] border border-[#ff3339] bg-white text-[11px] font-bold text-[#ff3339] transition hover:bg-[#ff3339] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
            >
              View All FAQs
            </a> */}
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-[5px] border border-[#ff3339] bg-white px-5 py-0 text-[#10131f]"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-[11px] font-black leading-tight text-[#1f1f1f] marker:hidden">
                  <span>
                    {index + 1}.&nbsp; {faq.question}
                  </span>
                  <span className="text-[18px] font-medium leading-none text-[#ff3339] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-4 text-[12px] leading-[1.45] text-[#586174]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
