import nodemailer from "nodemailer";
import {
  buildContactEmailHtml,
  buildContactEmailText,
} from "@/lib/contact-email-template";

export const runtime = "nodejs";

const contactEmail = "henryegbe07@gmail.com";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  countryCode?: string;
  contactDetails?: string;
  message?: string;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function hasMailConfig() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS,
  );
}

function getSmtpPassword() {
  return process.env.SMTP_PASS?.replace(/\s+/g, "");
}

function getMailErrorMessage(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "responseCode" in error &&
    error.responseCode === 535
  ) {
    return "Email credentials were rejected. Please check SMTP_USER and SMTP_PASS.";
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "EDNS"
  ) {
    return "Email host could not be reached. Please check SMTP_HOST.";
  }

  return "Unable to send your message right now.";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const firstName = asText(payload.firstName);
    const lastName = asText(payload.lastName);
    const email = asText(payload.email);
    const countryCode = asText(payload.countryCode);
    const contactDetails = asText(payload.contactDetails);
    const message = asText(payload.message);

    if (!firstName || !lastName || !email || !message) {
      return Response.json(
        { message: "Please fill in your name, email, and message." },
        { status: 400 },
      );
    }

    if (!hasMailConfig()) {
      return Response.json(
        { message: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: getSmtpPassword(),
      },
    });

    const phone = [countryCode, contactDetails].filter(Boolean).join(" ");
    const emailData = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: contactEmail,
      replyTo: email,
      subject: `New contact message from ${firstName} ${lastName}`,
      text: buildContactEmailText(emailData),
      html: buildContactEmailHtml(emailData),
    });

    return Response.json({ message: "Message sent successfully." });
  } catch (error) {
    return Response.json(
      { message: getMailErrorMessage(error) },
      { status: 500 },
    );
  }
}
