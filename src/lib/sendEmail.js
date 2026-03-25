import emailjs from "@emailjs/browser";

/**
 * Sends an HTML email via EmailJS.
 * @param {Object} params
 * @param {string} params.html       - Full HTML string for the email body
 * @param {string} params.subject    - Email subject line
 * @param {string} params.replyTo    - Reply-to address (sender's email)
 * @param {string} params.fromName   - Sender's display name
 */
export async function sendEmail({ html, subject, replyTo, fromName }) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      subject,
      from_name: fromName,
      reply_to: replyTo,
      html_body: html,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}
