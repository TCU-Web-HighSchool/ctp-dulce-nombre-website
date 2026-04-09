import { useState } from "react";
import scholarshipsData from "../content/settings/scholarships.json";

const COLOR_CLASSES = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
    badge: "bg-primary text-white",
    iconBg: "bg-primary",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
    badge: "bg-orange-500 text-white",
    iconBg: "bg-orange-500",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    badge: "bg-green-600 text-white",
    iconBg: "bg-green-600",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
    badge: "bg-purple-600 text-white",
    iconBg: "bg-purple-600",
  },
};

const {
  heroTitle,
  heroSubtitle,
  heroBadge,
  heroImage,
  scholarshipTypes,
  requirementsSectionTitle,
  requirementsSectionSubtitle,
  requirements,
  processSectionTitle,
  processSectionSubtitle,
  steps,
  deadlinesSectionTitle,
  deadlinesSectionSubtitle,
  deadlines,
  documentsSectionTitle,
  documentsSectionSubtitle,
  documentGroups,
  contactSectionTitle,
  contactSectionSubtitle,
  contacts,
} = scholarshipsData;

export default function Scholarships() {
  const [activeScholarship, setActiveScholarship] = useState(
    scholarshipTypes[0]?.id ?? null,
  );

  const activeReqs = requirements.find(
    (r) => r.scholarshipId === activeScholarship,
  );
  const activeType = scholarshipTypes.find((s) => s.id === activeScholarship);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Hero */}
      <section className="relative h-90 rounded-2xl overflow-hidden bg-slate-900 group">
        {heroImage ? (
          <img
            src={heroImage}
            alt="Becas estudiantiles"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-primary to-primary/60" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end p-10 sm:p-14 space-y-4">
          <span className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit backdrop-blur-sm">
            {heroBadge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white max-w-3xl leading-tight">
            {heroTitle}
          </h1>
          <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Tipos de Becas */}
      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            Tipos de Becas Disponibles
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            El colegio gestiona y facilita el acceso a los siguientes programas
            de apoyo estudiantil.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {scholarshipTypes.map((s) => {
            const c = COLOR_CLASSES[s.color] || COLOR_CLASSES.primary;
            return (
              <div
                key={s.id}
                className={`rounded-2xl border-2 p-6 flex flex-col gap-4 transition-all duration-200 cursor-default ${c.bg} ${c.border}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.iconBg}`}
                >
                  <span className="material-symbols-outlined text-white text-2xl">
                    {s.icon}
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${c.text}`}
                  >
                    {s.entity}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {s.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg w-fit ${c.badge}`}
                >
                  {s.amount}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Requisitos */}
      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            {requirementsSectionTitle}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            {requirementsSectionSubtitle}
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2">
          {scholarshipTypes.map((s) => {
            const c = COLOR_CLASSES[s.color] || COLOR_CLASSES.primary;
            const isActive = activeScholarship === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveScholarship(s.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? `${c.badge} ${c.border} shadow-sm`
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {s.icon}
                </span>
                {s.name}
              </button>
            );
          })}
        </div>

        {activeReqs && activeType && (
          <div
            className={`rounded-2xl border-2 p-8 space-y-5 ${
              (COLOR_CLASSES[activeType.color] || COLOR_CLASSES.primary).bg
            } ${(COLOR_CLASSES[activeType.color] || COLOR_CLASSES.primary).border}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`material-symbols-outlined text-2xl ${
                  (COLOR_CLASSES[activeType.color] || COLOR_CLASSES.primary)
                    .text
                }`}
              >
                {activeType.icon}
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Requisitos — {activeType.name}
              </h3>
            </div>
            <ul className="space-y-3">
              {activeReqs.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`material-symbols-outlined text-[18px] mt-0.5 shrink-0 ${
                      (COLOR_CLASSES[activeType.color] || COLOR_CLASSES.primary)
                        .text
                    }`}
                  >
                    check_circle
                  </span>
                  <span className="text-slate-700 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Proceso de Solicitud */}
      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            {processSectionTitle}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            {processSectionSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-5 hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">
                    {step.icon}
                  </span>
                </div>
                <span className="text-xs font-black text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plazos */}
      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            {deadlinesSectionTitle}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            {deadlinesSectionSubtitle}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-white text-left">
                <th className="px-6 py-4 font-bold">Beca</th>
                <th className="px-6 py-4 font-bold">Período de Solicitud</th>
                <th className="px-6 py-4 font-bold hidden md:table-cell">
                  Observaciones
                </th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((d, i) => (
                <tr
                  key={i}
                  className={`border-t border-slate-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {d.scholarship}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        calendar_month
                      </span>
                      {d.period}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 hidden md:table-cell">
                    {d.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Documentación */}
      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            {documentsSectionTitle}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            {documentsSectionSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {documentGroups.map((group, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-7 space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">
                    {group.icon}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 leading-snug">
                  {group.group}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">
                      check_box
                    </span>
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            {contactSectionTitle}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            {contactSectionSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-2xl">
                  {c.icon}
                </span>
              </div>
              <div className="flex-1 space-y-1.5">
                <h3 className="font-bold text-slate-900">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {c.description}
                </p>
                <p className="text-primary text-sm font-semibold">{c.detail}</p>
              </div>
              {c.action && (
                <a
                  href={c.action}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-colors w-fit"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    send
                  </span>
                  {c.actionLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
