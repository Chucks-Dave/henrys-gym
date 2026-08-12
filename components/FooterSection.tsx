import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { label: "Facebook", href: "#facebook", icon: FaFacebookF },
  { label: "Instagram", href: "#instagram", icon: FaInstagram },
  { label: "LinkedIn", href: "#linkedin", icon: FaLinkedinIn },
];

export function FooterSection() {
  return (
    <footer className="bg-black px-6 py-3 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
        <div>
          <h2 className="max-w-[360px] text-[clamp(2rem,3.2vw,2.15rem)] font-black uppercase leading-[1.02] tracking-[0]">
            Ready For Your
            <br />
            <span className="text-[#ff3339]">Next</span> Lesson?
          </h2>

          <a
            href="mailto:HenryEgbe07@gmail.com"
            className="mt-3 inline-flex items-center gap-2 text-[13px] leading-none text-white transition hover:text-[#ff3339] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
          >
            <MdEmail aria-hidden="true" className="h-5 w-5 shrink-0" />
            <span>HenryEgbe07@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-col items-start gap-9 md:items-end md:pt-5">
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-black transition hover:bg-[#ff3339] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
              >
                <Icon aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          {/* <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <a
              href="#privacy"
              className="text-[12px] leading-none text-white transition hover:text-[#ff3339] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
            >
              Privacy policy
            </a>
            <a
              href="#terms"
              className="text-[12px] leading-none text-white transition hover:text-[#ff3339] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
            >
              Terms &amp; conditions
            </a>
          </nav> */}
        </div>
      </div>
    </footer>
  );
}
