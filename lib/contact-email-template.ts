export type ContactEmailData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  submittedAt?: Date;
};

const brand = {
  red: "#ff3339",
  redDark: "#d81f25",
  black: "#111111",
  charcoal: "#1f1f1f",
  soft: "#f4f5f7",
  border: "#e4e7ec",
  muted: "#667085",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function buildContactEmailText(data: ContactEmailData) {
  const name = `${data.firstName} ${data.lastName}`.trim();

  return [
    `New contact message from ${name}`,
    "",
    `Name: ${name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Received: ${formatDate(data.submittedAt)}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function buildContactEmailHtml(data: ContactEmailData) {
  const name = escapeHtml(`${data.firstName} ${data.lastName}`.trim());
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone || "Not provided");
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");
  const receivedAt = escapeHtml(formatDate(data.submittedAt));
  const mailto = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(
    `Re: Your message to Egbes Youth Boxing`,
  )}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New contact message</title>
  </head>
  <body style="margin:0;padding:0;background:${brand.soft};font-family:Arial,Helvetica,sans-serif;color:${brand.black};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;background:${brand.soft};padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;max-width:640px;border-collapse:collapse;">
            <tr>
              <td style="padding:0 0 14px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="vertical-align:middle;">
                      <table role="presentation" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                        <tr>
                          <td style="width:42px;height:42px;border-radius:999px;background:${brand.red};color:#ffffff;text-align:center;font-size:18px;font-weight:900;line-height:42px;">
                            EB
                          </td>
                          <td style="padding-left:12px;">
                            <div style="font-size:18px;font-weight:900;line-height:1.1;text-transform:uppercase;color:${brand.black};">
                              Egbes Youth Boxing
                            </div>
                            <div style="font-size:12px;line-height:1.4;color:${brand.muted};">
                              Contact form notification
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td align="right" style="vertical-align:middle;color:${brand.red};font-size:12px;font-weight:800;text-transform:uppercase;">
                      New Lead
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background:${brand.black};border-radius:8px 8px 0 0;padding:28px 28px 22px;">
                <div style="height:4px;width:68px;background:${brand.red};margin-bottom:18px;"></div>
                <h1 style="margin:0;color:#ffffff;font-size:30px;line-height:1.05;font-weight:900;letter-spacing:0;text-transform:uppercase;">
                  New contact message
                </h1>
                <p style="margin:10px 0 0;color:#d8dde6;font-size:15px;line-height:1.5;">
                  ${name} just sent a message from the website.
                </p>
              </td>
            </tr>

            <tr>
              <td style="background:#ffffff;border:1px solid ${brand.border};border-top:0;border-radius:0 0 8px 8px;padding:26px 28px 30px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:0 0 14px;width:50%;vertical-align:top;">
                      <div style="font-size:12px;font-weight:800;color:${brand.red};text-transform:uppercase;letter-spacing:.02em;">Name</div>
                      <div style="margin-top:6px;font-size:16px;font-weight:800;line-height:1.35;color:${brand.black};">${name}</div>
                    </td>
                    <td style="padding:0 0 14px;width:50%;vertical-align:top;">
                      <div style="font-size:12px;font-weight:800;color:${brand.red};text-transform:uppercase;letter-spacing:.02em;">Received</div>
                      <div style="margin-top:6px;font-size:15px;font-weight:700;line-height:1.35;color:${brand.black};">${receivedAt}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 18px;width:50%;vertical-align:top;">
                      <div style="font-size:12px;font-weight:800;color:${brand.red};text-transform:uppercase;letter-spacing:.02em;">Email</div>
                      <a href="mailto:${email}" style="display:inline-block;margin-top:6px;color:${brand.redDark};font-size:15px;font-weight:800;line-height:1.35;text-decoration:none;">${email}</a>
                    </td>
                    <td style="padding:0 0 18px;width:50%;vertical-align:top;">
                      <div style="font-size:12px;font-weight:800;color:${brand.red};text-transform:uppercase;letter-spacing:.02em;">Phone</div>
                      <div style="margin-top:6px;font-size:15px;font-weight:800;line-height:1.35;color:${brand.black};">${phone}</div>
                    </td>
                  </tr>
                </table>

                <div style="border-top:1px solid ${brand.border};padding-top:20px;">
                  <div style="font-size:12px;font-weight:800;color:${brand.red};text-transform:uppercase;letter-spacing:.02em;">Message</div>
                  <div style="margin-top:10px;border-left:4px solid ${brand.red};background:#fafafa;padding:16px 18px;color:${brand.charcoal};font-size:16px;line-height:1.6;">
                    ${message}
                  </div>
                </div>

                <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:24px;border-collapse:collapse;">
                  <tr>
                    <td style="border-radius:6px;background:${brand.red};">
                      <a href="${mailto}" style="display:inline-block;padding:13px 20px;color:#ffffff;font-size:14px;font-weight:900;text-decoration:none;">
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 4px 0;color:${brand.muted};font-size:12px;line-height:1.5;text-align:center;">
                This email was generated from the Egbes Youth Boxing contact form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export const sampleContactEmail: ContactEmailData = {
  firstName: "Okechukwu",
  lastName: "David",
  email: "okechukwudavid305@gmail.com",
  phone: "+1 (505) 518-1598",
  message:
    "Hi Coach, I want to learn more about youth boxing classes and available training times. Please let me know how to register.",
  submittedAt: new Date("2026-08-12T10:45:00-06:00"),
};
