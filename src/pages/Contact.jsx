import { useState } from "react";
import contactData from "../content/settings/contact.json";

export default function Contact() {
  const { officeHours, contactDetails } = contactData;
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          {contactData.title}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          {contactData.subtitle}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Form + Office Hours */}
          <div className="lg:col-span-3 space-y-10">
            {/* Contact Form */}
            {sent ? (
              <div className="flex flex-col items-center justify-center bg-green-50 rounded-xl p-12 border border-green-200 text-center gap-4">
                <span className="material-symbols-outlined text-5xl text-green-500">
                  check_circle
                </span>
                <p className="text-xl font-bold text-slate-900">
                  ¡Mensaje enviado!
                </p>
                <p className="text-slate-500 text-sm">
                  Nos pondremos en contacto pronto.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
                data-netlify="true"
                name="contact"
              >
                <input type="hidden" name="form-name" value="contact" />
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Envíanos un Mensaje
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}

            {/* Office Hours */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Horario de Atención
              </h2>
              <table className="w-full">
                <tbody className="divide-y divide-slate-100">
                  {officeHours.map((entry) => (
                    <tr key={entry.day}>
                      <td className="py-3 pr-4 text-sm font-semibold text-slate-700">
                        {entry.day}
                      </td>
                      <td
                        className={`py-3 text-sm text-right ${
                          entry.isClosed
                            ? "text-red-500 font-semibold"
                            : "text-slate-600"
                        }`}
                      >
                        {entry.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Map + Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Card */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="relative h-56">
                <img
                  src={contactData.mapImage}
                  alt="Ubicación del CTP Dulce Nombre"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-white p-3 rounded-full shadow-lg">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-slate-600 font-medium">
                  {contactData.address}
                </p>
              </div>
            </div>

            {/* Contact Detail Cards */}
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="size-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">
                    {detail.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-900">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
