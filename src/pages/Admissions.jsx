import { useState } from "react";
import { Link } from "react-router-dom";
import admissionsData from "../content/settings/admissions.json";
import { sendEmail } from "../lib/sendEmail";
import { admissionsEmailHtml } from "../emails/templates";

export default function Admissions() {
  const {
    steps,
    documents,
    specialtyOptions,
    programDiurno,
    visitFormTitle,
    visitFormSubtitle,
  } = admissionsData;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    visitDate: "",
    specialty: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "El nombre es obligatorio.";
    if (!form.email.trim()) errs.email = "El correo es obligatorio.";
    if (!form.phone.trim()) errs.phone = "El teléfono es obligatorio.";
    if (!form.visitDate) errs.visitDate = "La fecha preferida es obligatoria.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    setError("");
    try {
      await sendEmail({
        html: admissionsEmailHtml(form),
        subject: `Solicitud de Visita — ${form.name}`,
        replyTo: form.email,
        fromName: form.name,
      });
      setSent(true);
    } catch {
      setError("No se pudo enviar la solicitud. Por favor intentá de nuevo.");
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

      {/* Program Description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                {programDiurno.sectionTitle}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {programDiurno.description}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  auto_stories
                </span>
                Metodología
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {programDiurno.methodology}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  emoji_events
                </span>
                Competencias que desarrollarás
              </h3>
              <ul className="space-y-2">
                {programDiurno.competencies.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                      check_circle
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-4 sticky top-24">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  checklist
                </span>
                Requisitos de Admisión
              </h3>
              <ul className="space-y-3">
                {programDiurno.requirements.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="material-symbols-outlined text-emerald-500 text-[18px] mt-0.5">
                      check_circle
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

          {/* Visit Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {visitFormTitle}
            </h2>
            <p className="text-slate-500 text-sm mb-8">{visitFormSubtitle}</p>
            {sent ? (
              <div className="flex flex-col items-center justify-center bg-green-50 rounded-xl p-12 border border-green-200 text-center gap-4 h-88">
                <span className="material-symbols-outlined text-5xl text-green-500">
                  check_circle
                </span>
                <p className="text-xl font-bold text-slate-900">
                  ¡Visita agendada!
                </p>
                <p className="text-slate-500 text-sm">
                  Nos pondremos en contacto para confirmar tu cita.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
                data-netlify="true"
                name="admissions-visit"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="admissions-visit"
                />
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-400" : "border-slate-200"
                    } bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? "border-red-400" : "border-slate-200"
                      } bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="correo@ejemplo.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
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
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phone ? "border-red-400" : "border-slate-200"
                      } bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="+506 0000-0000"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Fecha Preferida de Visita
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      value={form.visitDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.visitDate ? "border-red-400" : "border-slate-200"
                      } bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                    />
                    {errors.visitDate && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.visitDate}
                      </p>
                    )}
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
                      <option value="">Seleccionar...</option>
                      {specialtyOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="¿Hay algo específico que quieras saber?"
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
                  {sending ? "Enviando..." : "Agendar Visita"}
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
