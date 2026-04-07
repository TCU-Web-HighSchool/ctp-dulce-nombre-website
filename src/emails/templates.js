function escHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmtDate() {
  return new Date().toLocaleString("es-CR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function contactEmailHtml({ name, email, subject, message }) {
  const subjectRow = subject
    ? `<tr><td style="padding-bottom:20px;">
        <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;">Asunto</p>
        <p style="margin:0;font-size:14px;font-weight:700;color:#181c1e;">${escHtml(subject)}</p>
      </td></tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7fafc;font-family:Arial,Helvetica,sans-serif;">

  <!-- Header bar -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr><td style="background:#3a6b93;padding:16px 24px;">&nbsp;</td></tr>
  </table>

  <!-- Body -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7fafc;">
    <tr><td align="center" style="padding:48px 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

        <!-- Hero -->
        <tr><td style="padding-bottom:40px;">
          <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;color:#3a6b93;line-height:1.2;letter-spacing:-0.5px;">
            Nueva Consulta<br/>de Contacto
          </h1>
          <table cellpadding="0" cellspacing="0" border="0">
            <tr><td style="width:48px;height:4px;background:#3a6b93;border-radius:2px;font-size:1px;line-height:1px;">&nbsp;</td></tr>
          </table>
        </td></tr>

        <!-- Main card -->
        <tr><td style="background:#ffffff;border-radius:8px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Nombre -->
                <tr><td style="padding-bottom:20px;">
                  <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;">Nombre</p>
                  <p style="margin:0;font-size:14px;font-weight:700;color:#181c1e;">${escHtml(name)}</p>
                </td></tr>

                <!-- Correo -->
                <tr><td style="padding-bottom:20px;">
                  <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;">Correo</p>
                  <p style="margin:0;font-size:14px;font-weight:700;color:#181c1e;">${escHtml(email)}</p>
                </td></tr>

                ${subjectRow}

                <!-- Divider -->
                <tr><td style="height:1px;background:#ebeef0;padding:0;font-size:1px;line-height:1px;">&nbsp;</td></tr>

                <!-- Mensaje -->
                <tr><td style="padding-top:20px;">
                  <p style="margin:0 0 12px;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;">Mensaje</p>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr><td style="background:#ebeef0;border-radius:8px;padding:20px;">
                      <p style="margin:0;font-size:14px;color:#181c1e;line-height:1.7;font-style:italic;">${escHtml(message)}</p>
                    </td></tr>
                  </table>
                </td></tr>

              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Secondary pocket -->
        <tr><td style="padding-top:12px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="background:#f1f4f6;border-radius:8px;padding:16px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 2px;font-size:10px;color:#43474e;">Fecha de envío</p>
                    <p style="margin:0;font-size:13px;font-weight:600;color:#181c1e;">${fmtDate()}</p>
                  </td>
                  <td align="right">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr><td style="background:#d9e3f8;border-radius:999px;padding:4px 12px;">
                        <p style="margin:0;font-size:10px;font-weight:700;color:#3e4758;text-transform:uppercase;letter-spacing:0.05em;">Contacto</p>
                      </td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:20px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#43474e;">Enviado desde el sitio web del <strong>CTP Dulce Nombre</strong></p>
        </td></tr>

      </table>
    </td></tr>
  </table>

</body></html>`;
}

export function admissionsEmailHtml({
  name,
  email,
  phone,
  specialty,
  message,
}) {
  const phoneRow = phone
    ? `<tr>
        <td width="35%" style="padding-bottom:20px;vertical-align:top;">
          <p style="margin:0;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;padding-top:2px;">Teléfono</p>
        </td>
        <td style="padding-bottom:20px;vertical-align:top;">
          <p style="margin:0;font-size:14px;font-weight:700;color:#181c1e;">${escHtml(phone)}</p>
        </td>
      </tr>`
    : "";

  const specialtyRow = specialty
    ? `<tr>
        <td width="35%" style="padding-bottom:20px;vertical-align:top;">
          <p style="margin:0;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;padding-top:2px;">Especialidad de interés</p>
        </td>
        <td style="padding-bottom:20px;vertical-align:top;">
          <p style="margin:0;font-size:14px;font-weight:700;color:#181c1e;">${escHtml(specialty)}</p>
        </td>
      </tr>`
    : "";

  const messageRow = message
    ? `<tr>
        <td colspan="2" style="padding-top:16px;border-top:1px solid #ebeef0;">
          <p style="margin:0 0 12px;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;">Mensaje</p>
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="background:#ebeef0;border-radius:8px;padding:20px;">
              <p style="margin:0;font-size:14px;color:#181c1e;line-height:1.7;font-style:italic;">${escHtml(message)}</p>
            </td></tr>
          </table>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7fafc;font-family:Arial,Helvetica,sans-serif;">

  <!-- Header bar -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr><td style="background:#3a6b93;padding:16px 24px;">&nbsp;</td></tr>
  </table>

  <!-- Body -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7fafc;">
    <tr><td align="center" style="padding:48px 24px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

        <!-- Hero: centered -->
        <tr><td style="padding-bottom:40px;text-align:center;">
          <table align="center" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
            <tr><td style="background:#d9e3f8;border-radius:999px;padding:6px 16px;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#3e4758;text-transform:uppercase;letter-spacing:0.1em;">Notificación</p>
            </td></tr>
          </table>
          <h1 style="margin:0 0 8px;font-size:26px;font-weight:800;color:#3a6b93;line-height:1.2;letter-spacing:-0.5px;">
            Nueva Solicitud<br/>de Admisiones
          </h1>
          <p style="margin:0;font-size:13px;color:#43474e;">
            Un estudiante prospecto ha enviado una consulta a través del portal institucional.
          </p>
        </td></tr>

        <!-- Main card -->
        <tr><td style="background:#ffffff;border-radius:8px;overflow:hidden;">
          <!-- Top accent bar -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="height:6px;background:#3a6b93;font-size:1px;line-height:1px;">&nbsp;</td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Nombre -->
                <tr>
                  <td width="35%" style="padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;padding-top:2px;">Nombre</p>
                  </td>
                  <td style="padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0;font-size:14px;font-weight:700;color:#181c1e;">${escHtml(name)}</p>
                  </td>
                </tr>

                <!-- Correo -->
                <tr>
                  <td width="35%" style="padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0;font-size:10px;font-weight:700;color:#43474e;text-transform:uppercase;letter-spacing:0.1em;padding-top:2px;">Correo</p>
                  </td>
                  <td style="padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0;font-size:14px;font-weight:700;color:#181c1e;">${escHtml(email)}</p>
                  </td>
                </tr>

                ${phoneRow}
                ${specialtyRow}
                ${messageRow}

              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Admin note -->
        <tr><td style="padding-top:12px;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr><td style="background:#f1f4f6;border-radius:8px;padding:16px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#181c1e;text-transform:uppercase;letter-spacing:0.08em;">Nota Administrativa</p>
                    <p style="margin:0;font-size:12px;color:#43474e;line-height:1.5;">Responda directamente a este correo para ponerse en contacto con el solicitante.</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:20px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#43474e;">Enviado desde el sitio web del <strong>CTP Dulce Nombre</strong></p>
        </td></tr>

      </table>
    </td></tr>
  </table>

</body></html>`;
}
