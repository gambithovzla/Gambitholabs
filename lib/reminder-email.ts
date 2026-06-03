import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

const CLIENT = {
  name: process.env.CLIENT_NAME ?? "Johanna Figueredo",
  email: process.env.CLIENT_EMAIL ?? "johastyle.07@gmail.com",
  amount: process.env.CLIENT_AMOUNT ?? "$50",
  dueDay: parseInt(process.env.CLIENT_DUE_DAY ?? "5", 10),
};

const FROM = "Gambitho Labs <contacto@gambitholabs.com>";
const WHATSAPP = "https://wa.me/51970752104";

export type ReminderType = "advance" | "due";

export async function sendPaymentReminder(type: ReminderType) {
  const subject =
    type === "advance"
      ? `Recordatorio: tu mensualidad vence en 3 días · Gambitho Labs`
      : `Hoy vence tu mensualidad · Gambitho Labs`;

  const html = buildEmailHtml(type);

  return getResend().emails.send({
    from: FROM,
    to: CLIENT.email,
    subject,
    html,
  });
}

function buildEmailHtml(type: ReminderType): string {
  const firstName = CLIENT.name.split(" ")[0];
  const isAdvance = type === "advance";

  const headline = isAdvance
    ? `Tu mensualidad vence en <strong>3 días</strong>`
    : `Tu mensualidad vence <strong>hoy</strong>`;

  const message = isAdvance
    ? `Este es un recordatorio amistoso de que tu mensualidad del mes vence el <strong>día ${CLIENT.dueDay}</strong>. Por favor asegúrate de tener el pago listo para esa fecha.`
    : `Hoy es el <strong>día ${CLIENT.dueDay}</strong> y vence tu mensualidad mensual. Si ya realizaste el pago, puedes ignorar este mensaje. Si necesitas coordinar, escríbenos por WhatsApp.`;

  const badgeColor = isAdvance ? "#e8920a" : "#e83a3a";
  const badgeText = isAdvance ? "Vence en 3 días" : "Vence hoy";

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${badgeText}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#07090d;border-radius:14px 14px 0 0;padding:28px 32px 24px;text-align:center;">
              <p style="margin:0;font-family:'Courier New',monospace;font-size:11px;color:#3a7bff;text-transform:uppercase;letter-spacing:0.16em;">Gambitho Labs</p>
              <p style="margin:6px 0 0;font-size:22px;font-weight:700;color:#f3f6fb;letter-spacing:-0.02em;">Recordatorio de pago</p>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="background:#ffffff;padding:0 32px;">
              <div style="margin:0;padding:10px 0;border-bottom:1px solid #eef0f4;text-align:center;">
                <span style="display:inline-block;background:${badgeColor};color:#ffffff;font-size:12px;font-weight:600;padding:4px 14px;border-radius:20px;letter-spacing:0.04em;">${badgeText}</span>
              </div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:28px 32px 32px;">
              <p style="margin:0 0 18px;font-size:16px;color:#1a1f2e;">Hola, <strong>${firstName}</strong> 👋</p>
              <p style="margin:0 0 18px;font-size:15px;color:#3a4155;line-height:1.6;">${headline}</p>
              <p style="margin:0 0 24px;font-size:15px;color:#3a4155;line-height:1.6;">${message}</p>

              <!-- Amount box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fc;border:1px solid #e8ebf2;border-radius:10px;margin-bottom:28px;">
                <tr>
                  <td style="padding:18px 22px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#8892a4;text-transform:uppercase;letter-spacing:0.12em;font-family:'Courier New',monospace;">Monto a pagar</p>
                    <p style="margin:0;font-size:28px;font-weight:700;color:#07090d;letter-spacing:-0.02em;">${CLIENT.amount} <span style="font-size:14px;font-weight:400;color:#8892a4;">USD / mes</span></p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${WHATSAPP}" style="display:inline-block;background:#25d366;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 32px;border-radius:10px;">Coordinar pago por WhatsApp</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f0f2f7;border-radius:0 0 14px 14px;padding:20px 32px;text-align:center;border-top:1px solid #e8ebf2;">
              <p style="margin:0 0 4px;font-size:12px;color:#8892a4;">Gambitho Labs · Lima, Perú</p>
              <p style="margin:0;font-size:11px;color:#b0b9c8;">Este es un correo automático de recordatorio de pago.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function getLimaDayOfMonth(): number {
  // Peru is always GMT-5 (no DST)
  const nowUtc = Date.now();
  const limaOffset = -5 * 60 * 60 * 1000;
  const lima = new Date(nowUtc + limaOffset);
  return lima.getUTCDate();
}

export { CLIENT };
