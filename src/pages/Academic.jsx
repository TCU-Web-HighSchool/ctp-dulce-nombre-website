const programs = [
  {
    name: "Informática",
    icon: "computer",
    desc: "Desarrollo de software, redes y soporte informático.",
  },
  {
    name: "Electromecánica",
    icon: "settings",
    desc: "Sistemas eléctricos, motores y maquinaria industrial.",
  },
  {
    name: "Secretariado",
    icon: "description",
    desc: "Gestión administrativa y comunicación empresarial.",
  },
  {
    name: "Electrónica",
    icon: "memory",
    desc: "Circuitos electrónicos, sistemas embebidos y automatización.",
  },
  {
    name: "Contabilidad",
    icon: "calculate",
    desc: "Contabilidad financiera, tributación y auditoría.",
  },
  {
    name: "Turismo",
    icon: "travel_explore",
    desc: "Hospitalidad, gestión de viajes y servicio al cliente.",
  },
];

export default function Academic() {
  return (
    <section className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Programas Académicos
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Ofrecemos 12 especialidades técnicas diseñadas para preparar a los
          estudiantes ante las exigencias del mercado laboral moderno. Cada
          programa combina teoría con práctica aplicada.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div
            key={program.name}
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-5 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-2xl">
                {program.icon}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {program.name}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {program.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
