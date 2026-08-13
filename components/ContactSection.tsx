"use client";

import type {
  FormEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { useState } from "react";
import { FaHeadset, FaRegCommentDots } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { toast } from "sonner";
import { CountryCodeSelect } from "@/components/CountryCodeSelect";

type ContactFieldProps = {
  label: string;
  name: string;
  className?: string;
} & (
  | (InputHTMLAttributes<HTMLInputElement> & { multiline?: false })
  | (TextareaHTMLAttributes<HTMLTextAreaElement> & { multiline: true })
);

const supportItems = [
  {
    title: "Hotline:",
    value: "+1 (505) 518-1598",
    icon: FaHeadset,
  },
  {
    title: "SMS/WhatsApp:",
    value: "+1 (505) 518-1598",
    icon: FaRegCommentDots,
  },
  {
    title: "Email:",
    value: "Egbeyouthboxing@gmail.com",
    icon: MdOutlineMail,
  },
  {
    title: "Address:",
    value: "33rd Cir SE Rio Rancho 87124 NM",
    icon: MdOutlineLocationOn,
  },
];

function ContactField({ label, name, className = "", multiline, ...props }: ContactFieldProps) {
  const fieldClassName =
    "peer w-full rounded-[3px] border border-[#bfc7d4] bg-white px-3 text-[14px] text-[#111] outline-none transition placeholder:text-[#a9b2c0] focus:border-[#ff3339] focus:ring-1 focus:ring-[#ff3339]";

  return (
    <label className={`relative block ${className}`}>
      <span className="absolute -top-2 left-3 bg-white px-1 text-[11px] leading-none text-[#4d596c]">
        {label}
      </span>
      {multiline ? (
        <textarea
          name={name}
          className={`${fieldClassName} min-h-[60px] resize-none py-3`}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          name={name}
          className={`${fieldClassName} h-[46px]`}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  );
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message);
      }

      form.reset();
      toast.success(data.message ?? "Message sent successfully.");
    } catch (error) {
      toast.error(
        error instanceof Error && error.message
          ? error.message
          : "Unable to send your message right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-5 text-[#111] sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1040px] gap-4 lg:grid-cols-[1fr_336px]">
        <div className="py-2 lg:pr-3">
          <h2 className="text-[32px] font-black leading-none tracking-[0] text-[#ff3339]">
            Contact Us
          </h2>
          <div className="mt-3 h-[2px] w-[72px] bg-[#ff3339]" />
          <p className="mt-5 max-w-[390px] text-[18px] font-semibold leading-[1.15] text-[#43516c]">
            Questions about youth boxing classes in Rio Rancho, NM? Send us a message.
          </p>

          <form
            aria-label="Contact form"
            className="mt-5"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactField
                label="First Name"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
              <ContactField
                label="Last Name"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
              <ContactField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
              <label className="relative block">
                <span className="absolute -top-2 left-3 z-10 bg-white px-1 text-[11px] leading-none text-[#4d596c]">
                  Contact Details
                </span>
                <CountryCodeSelect />
              </label>
            </div>

            <ContactField
              label=""
              name="message"
              placeholder="Enter your message"
              multiline
              className="mt-[18px]"
              required
            />

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[43px] rounded-[6px] bg-[#ff3339] px-7 text-[14px] font-bold text-white transition hover:bg-[#f02027] disabled:cursor-not-allowed disabled:bg-[#a7a7a7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3339]"
              >
                {isSubmitting ? "Sending..." : "Send a Message"}
              </button>
            </div>
          </form>
        </div>

        <aside className="rounded-[6px] bg-[#1f1f1f] px-5 py-8 text-white lg:min-h-[369px]">
          <h3 className="text-[17px] font-semibold leading-tight">
            Hi! We are always here to help you.
          </h3>
          <p className="mt-2 max-w-[260px] text-[13px] leading-[1.2] text-white/85">
            To register and pay for classes, contact us or visit our gym.
          </p>

          <div className="mt-5 space-y-3">
            {supportItems.map(({ title, value, icon: Icon }) => (
              <div key={title} className="flex items-center gap-4 rounded-[5px] bg-white px-4 py-3 text-[#111]">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[#ff3339]" />
                <div className="min-w-0">
                  <p className="text-[18px] font-black leading-none text-[#ff3339]">{title}</p>
                  <p className="mt-1 break-words text-[12px] font-semibold leading-tight text-[#111]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 h-px w-full bg-white/45" />
        </aside>
      </div>
    </section>
  );
}
