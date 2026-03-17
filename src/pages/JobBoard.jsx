const jobs = [
  {
    id: 1,
    title: "Desarrollador(a) Frontend Junior",
    company: "TechCR Solutions",
    location: "San José, CR",
    type: "Tiempo completo",
    area: "Informática",
  },
  {
    id: 2,
    title: "Técnico(a) Industrial",
    company: "Grupo PROSA",
    location: "Cartago, CR",
    type: "Tiempo completo",
    area: "Electromecánica",
  },
  {
    id: 3,
    title: "Asistente Administrativo(a)",
    company: "Banco Nacional",
    location: "Remoto",
    type: "Medio tiempo",
    area: "Secretariado",
  },
  {
    id: 4,
    title: "Técnico(a) en Electrónica",
    company: "Intel Costa Rica",
    location: "Belén, CR",
    type: "Tiempo completo",
    area: "Electrónica",
  },
];

const typeColor = {
  "Tiempo completo":
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Medio tiempo":
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
};

export default function JobBoard() {
  return (
    <section className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Bolsa de Empleo
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Oportunidades para egresados y estudiantes activos. Conéctate con
          empresas que buscan talento técnico.
        </p>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-xl">
                <span className="material-symbols-outlined text-2xl">work</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {job.company} · {job.location}
                </p>
                <div className="flex gap-2 mt-2">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColor[job.type]}`}
                  >
                    {job.type}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {job.area}
                  </span>
                </div>
              </div>
            </div>
            <button className="shrink-0 px-5 py-2 bg-primary text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors">
              Aplicar Ahora
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
