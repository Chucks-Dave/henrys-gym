import type { Metadata } from "next";
import {
  buildContactEmailHtml,
  sampleContactEmail,
} from "@/lib/contact-email-template";

export const metadata: Metadata = {
  title: "Email Preview | Egbes Youth Boxing",
  description: "Preview the Egbes Youth Boxing contact email template.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmailPreviewPage() {
  const previewHtml = buildContactEmailHtml(sampleContactEmail);

  return (
    <main className="min-h-screen bg-[#eceaec] px-4 py-8 text-[#111] sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="mb-6">
          <p className="inline-flex rounded-[4px] bg-[#111] px-3 py-1 text-[12px] font-black uppercase tracking-[0] text-white">
            Email Template
          </p>
          <h1 className="mt-4 text-[32px] font-black leading-none tracking-[0] text-[#ff3339] sm:text-[44px]">
            Contact Message Preview
          </h1>
          <p className="mt-3 max-w-[560px] text-[16px] font-semibold leading-[1.45] text-[#43516c]">
            This preview uses the same branded HTML that Nodemailer sends to your inbox.
          </p>
        </div>

        <section className="overflow-hidden rounded-[8px] border border-black/10 bg-[#111] shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
          <div className="border-b border-white/10 px-4 py-4 sm:px-6">
            <p className="text-[13px] font-semibold text-white/55">
              New contact message from okechukwu david
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-[14px] font-black text-white">
                EB
              </div>
              <div className="min-w-0">
                <p className="truncate text-[14px] font-bold text-white">
                  egbesyouthboxing
                </p>
                <p className="truncate text-[12px] text-white/55">
                  to me
                </p>
              </div>
              <span className="ml-auto text-[12px] font-semibold text-white/55">
                10:45 AM
              </span>
            </div>
          </div>

          <div className="bg-[#202124] px-2 py-4 sm:px-5 sm:py-6">
            <iframe
              title="Contact email template preview"
              srcDoc={previewHtml}
              className="h-[760px] w-full rounded-[6px] border-0 bg-[#f4f5f7]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
