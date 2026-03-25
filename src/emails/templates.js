const C = {
  primary: "#135bec",
  white: "#ffffff",
  bg: "#f0f4ff",
  bgLight: "#f8fafc",
  border: "#e2e8f0",
  textDark: "#0f172a",
  textMid: "#334155",
  textLight: "#64748b",
  textMuted: "#94a3b8",
};

function layout(subtitle, body) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${C.bg};font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${C.bg};padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${C.white};border-radius:12px;overflow:hidden;border:1px solid ${C.border};">
        <tr><td style="background:${C.primary};padding:28px 36px;">
          <p style="margin:0;font-size:20px;font-weight:900;color:${C.white};letter-spacing:-0.5px;">CTP Dulce Nombre</p>
          <p style="margin:4px 0 0;font-size:13px;color:#93c5fd;">${subtitle}</p>
        </td></tr>
        <tr><td style="padding:32px 36px;">${body}</td></tr>
        <tr><td style="padding:18px 36px;border-top:1px solid ${C.border};background:${C.bgLight};">
          <p style="margin:0;font-size:12px;color:${C.textMuted};text-align:center;">Enviado desde el sitio web del <strong>CTP Dulce Nombre</strong></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function field(label, value) {
  if (!value) return "";
  return `<div style="margin-bottom:14px;">
    <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:${C.textLight};text-transform:uppercase;letter-spacing:0.08em;">${label}</p>
    <p style="margin:0;font-size:14px;font-weight:600;color:${C.textDark};padding:10px 12px;background:${C.bgLight};border-radius:6px;border:1px solid ${C.border};">${escHtml(value)}</p>
  </div>`;
}

function messageBlock(label, value) {
  if (!value) return "";
  return `<div style="margin-bottom:14px;">
    <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:${C.textLight};text-transform:uppercase;letter-spacing:0.08em;">${label}</p>
    <p style="margin:0;font-size:14px;color:${C.textMid};line-height:1.6;padding:16px;background:${C.bgLight};border-radius:8px;border:1px solid ${C.border};white-space:pre-wrap;">${escHtml(value)}</p>
  </div>`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function contactEmailHtml({ name, email, subject, message }) {
  const body = `
    <h2 style="margin:0 0 24px;font-size:18px;font-weight:700;color:${C.textDark};">Nuevo mensaje de contacto</h2>
    ${field("Nombre", name)}
    ${field("Correo", email)}
    ${field("Asunto", subject || "(sin asunto)")}
    ${messageBlock("Mensaje", message)}
  `;
  return layout("Formulario de Contacto", body);
}

export function admissionsEmailHtml({
  name,
  email,
  phone,
  specialty,
  message,
}) {
  const body = `
    <h2 style="margin:0 0 24px;font-size:18px;font-weight:700;color:${C.textDark};">Nueva consulta de admisiones</h2>
    ${field("Nombre", name)}
    ${field("Correo", email)}
    ${field("Teléfono", phone)}
    ${field("Especialidad de interés", specialty)}
    ${messageBlock("Mensaje", message)}
  `;
  return layout("Formulario de Admisiones", body);
}

export function workWithUsEmailHtml({
  name,
  email,
  specialization,
  cvFileName,
}) {
  const cvBlock = cvFileName
    ? `<div style="margin-bottom:14px;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:${C.textLight};text-transform:uppercase;letter-spacing:0.08em;">CV Adjunto</p>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:${C.bgLight};border-radius:6px;border:1px solid ${C.border};">
          <span style="font-size:20px;">📄</span>
          <span style="font-size:14px;font-weight:600;color:${C.textDark};">${escHtml(cvFileName)}</span>
        </div>
      </div>`
    : `<div style="margin-bottom:14px;">
        <p style="margin:0;font-size:13px;color:${C.textLight};font-style:italic;">El candidato no adjuntó un CV.</p>
      </div>`;

  const body = `
    <h2 style="margin:0 0 24px;font-size:18px;font-weight:700;color:${C.textDark};">Nueva solicitud — Trabaje con Nosotros</h2>
    ${field("Nombre", name)}
    ${field("Correo", email)}
    ${field("Especialización", specialization)}
    ${cvBlock}
    <div style="margin-top:20px;padding:14px 16px;background:#eff6ff;border-radius:8px;border:1px solid #bfdbfe;">
      <p style="margin:0;font-size:13px;color:#1d4ed8;">Responda este correo directamente para solicitar el CV al candidato.</p>
    </div>
  `;
  return layout("Trabaje con Nosotros", body);
}
