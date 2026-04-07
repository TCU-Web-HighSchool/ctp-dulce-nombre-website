import { useState } from "react";
import { Link } from "react-router-dom";
import admissionsData from "../content/settings/admissions.json";
import { sendEmail } from "../lib/sendEmail";
import { admissionsEmailHtml } from "../emails/templates";

export default function Admissions() {
  const { steps, documents, specialtyOptions } = admissionsData;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await sendEmail({
        html: admissionsEmailHtml(form),
        subject: `Consulta de Admisiones — ${form.name}`,
        replyTo: form.email,
        fromName: form.name,
      });
      setSent(true);
    } catch {
      setError("No se pudo enviar la consulta. Por favor intentá de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src={admissionsData.heroImage}
          alt="CTP Dulce Nombre campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-50" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            {admissionsData.heroBadge}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {admissionsData.heroTitle}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {admissionsData.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
            Tu Camino de Matrícula
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Un proceso simple paso a paso para unirte a nuestra familia
            educativa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center group">
              <div className="mx-auto size-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                <span className="material-symbols-outlined text-3xl">
                  {step.icon}
                </span>
              </div>
              <span className="text-xs font-black text-primary uppercase tracking-widest block mb-2">
                Paso {index + 1}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-slate-300">
                  <span className="material-symbols-outlined text-2xl">
                    arrow_forward
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Documents + Form Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Required Documents */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Documentos Requeridos
            </h2>
            <div className="space-y-6">
              {documents.map((category) => (
                <div
                  key={category.category}
                  className="bg-white border border-slate-200 rounded-xl p-6"
                >
                  <h3 className="text-sm font-black text-primary uppercase tracking-wider mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-emerald-500 text-[20px]">
                          check_circle
                        </span>
                        <span className="text-sm text-slate-700">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Formulario de Consulta
            </h2>
            {sent ? (
              <div className="flex flex-col items-center justify-center bg-green-50 rounded-xl p-12 border border-green-200 text-center gap-4 h-88">
                <span className="material-symbols-outlined text-5xl text-green-500">
                  check_circle
                </span>
                <p className="text-xl font-bold text-slate-900">
                  ¡Consulta enviada!
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
                name="admissions-inquiry"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="admissions-inquiry"
                />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+506 0000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Especialidad de Interés
                  </label>
                  <select
                    name="specialty"
                    value={form.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Seleccionar especialidad...</option>
                    {specialtyOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Enviando..." : "Enviar Consulta"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-slate-600 max-w-md">
              Consulta nuestras preguntas frecuentes o contáctanos directamente.
              Estamos aquí para ayudarte.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/faq"
              className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary-dark hover:border-primary-dark hover:text-white transition-all text-center"
            >
              Ver FAQ
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors text-center"
            >
              Contactar Admisiones
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
