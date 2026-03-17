import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    title: "Revisar Requisitos",
    desc: "Revisa los requisitos de admisión y verifica que cumples con los criterios de elegibilidad para el programa deseado.",
  },
  {
    step: "02",
    title: "Reunir Documentos",
    desc: "Reúne los documentos requeridos: certificado de nacimiento, notas del colegio anterior e identificación.",
  },
  {
    step: "03",
    title: "Entregar Solicitud",
    desc: "Completa el formulario de solicitud en línea y entrega toda la documentación requerida antes de la fecha límite.",
  },
  {
    step: "04",
    title: "Realizar Prueba de Admisión",
    desc: "Asiste a la prueba de admisión programada. El material de preparación está disponible en la oficina del colegio.",
  },
  {
    step: "05",
    title: "Recibir Resultados",
    desc: "Los resultados se publican dentro de dos semanas después del examen. Los estudiantes aceptados serán notificados por correo.",
  },
];

export default function Admissions() {
  return (
    <section className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Admisiones
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Damos la bienvenida a estudiantes motivados listos para construir su
          futuro. Sigue los pasos a continuación para iniciar tu proceso de
          admisión.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {steps.map((item) => (
          <div
            key={item.step}
            className="flex gap-6 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <div className="text-3xl font-black text-primary/20 dark:text-primary/30 leading-none shrink-0 w-12">
              {item.step}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
            ¿Listo para aplicar?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Las solicitudes para 2025-2026 están abiertas. ¡No pierdas tu
            oportunidad!
          </p>
        </div>
        <Link
          to="/contact"
          className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Contactar Admisiones
        </Link>
      </div>
    </section>
  );
}
