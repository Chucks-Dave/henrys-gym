import type { ComponentType, InputHTMLAttributes, SVGProps, TextareaHTMLAttributes } from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail, MdOutlineMail } from "react-icons/md";

type ContactFieldProps = {
  label: string;
  name: string;
  className?: string;
} & (
  | (InputHTMLAttributes<HTMLInputElement> & { multiline?: false })
  | (TextareaHTMLAttributes<HTMLTextAreaElement> & { multiline: true })
);

const contactMethods: Array<{
  label: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  { label: "Email:", value: "info@boxchampy.com", icon: MdEmail },
  { label: "Phone:", value: "+1 (800) 123-4567", icon: FaPhoneVolume },
  { label: "Location:", value: "Silicon Valley, CA 94043 United States", icon: FaLocationDot },
];

function ContactField({ label, name, className = "", multiline, ...props }: ContactFieldProps) {
  const controlClassName =
    "mt-2.5 w-full rounded-[8px] border border-[#dddede] bg-white px-3.5 text-[16px] text-[#111827] shadow-[0_1px_2px_rgba(0,0,0,.03)] outline-none transition placeholder:text-[#9aa1ad] focus:border-[#ff3339] focus:ring-2 focus:ring-[#ff3339]/25";

  return (
    <label className={`block ${className}`}>
      <span className="text-[17px] font-bold leading-none text-[#10131f]">{label}</span>
      {multiline ? (
        <textarea
          name={name}
          className={`${controlClassName} min-h-[150px] resize-none py-3`}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          name={name}
          className={`${controlClassName} h-12`}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-6 py-16 text-[#10131f] sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-12 lg:grid-cols-[580px_minmax(0,675px)] lg:gap-8">
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#e7e7e7] bg-white px-3 py-2 text-[18px] font-bold leading-none shadow-[0_1px_4px_rgba(0,0,0,.06)]">
            <MdOutlineMail aria-hidden="true" className="h-4 w-4 text-[#ff3339]" />
            <span>Contact</span>
          </div>

          <h2 className="mt-9 max-w-full text-[clamp(2.9rem,10vw,4.1rem)] font-black leading-[1.08] tracking-[0] text-[#10131f]">
            How can we
            <br className="sm:hidden" /> help
            <br className="hidden sm:block" />
            you today?
          </h2>

          <p className="mt-8 max-w-[540px] text-[22px] leading-[1.45] text-[#667085]">
            Our dedicated customer support team is just a message or call away.
          </p>

          <div className="mt-12 space-y-7">
            {contactMethods.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-5">
                <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[10px] bg-[#fff0f1] text-[#ff3339]">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[17px] leading-none text-[#667085]">{label}</p>
                  <p className="mt-2 max-w-full break-words text-[20px] font-black leading-tight text-[#10131f]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          action="#"
          aria-label="Contact form"
          className="rounded-[26px] border border-[#dedfe3] bg-[#fbfbfc] p-6 shadow-[0_20px_60px_rgba(0,0,0,.05)] sm:p-9 lg:p-11"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <ContactField label="First name*" name="firstName" defaultValue="Billy" />
            <ContactField label="Last name*" name="lastName" defaultValue="Jhons" autoFocus />
          </div>

          <ContactField
            label="Work email*"
            name="email"
            type="email"
            placeholder="Enter email"
            className="mt-7"
          />

          <label className="mt-7 block">
            <span className="text-[17px] font-bold leading-none text-[#10131f]">Phone number*</span>
            <div className="mt-2.5 flex h-12 overflow-hidden rounded-[8px] border border-[#dddede] bg-white shadow-[0_1px_2px_rgba(0,0,0,.03)] transition focus-within:border-[#ff3339] focus-within:ring-2 focus-within:ring-[#ff3339]/25">
              <select
                name="countryCode"
                aria-label="Country code"
                defaultValue="+1"
                className="w-[94px] border-0 border-r border-[#e4e4e7] bg-white px-3 text-[15px] text-[#10131f] outline-none"
              >
                <option value="+1">US +1</option>
                <option value="+234">NG +234</option>
                <option value="+44">UK +44</option>
              </select>
              <input
                type="tel"
                name="phone"
                aria-label="Phone number"
                placeholder="Enter phone number"
                className="min-w-0 flex-1 border-0 bg-white px-3.5 text-[16px] text-[#111827] outline-none placeholder:text-[#9aa1ad]"
              />
            </div>
          </label>

          <ContactField
            label="Message*"
            name="message"
            placeholder="Enter a question, feedback, or suggestions..."
            multiline
            className="mt-7"
          />

          <button
            type="submit"
            className="mt-7 inline-flex h-12 items-center justify-center rounded-[7px] bg-[#ff3339] px-7 text-[17px] font-bold leading-none text-white shadow-[0_8px_18px_rgba(255,51,57,.28)] transition hover:bg-[#f02027] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
