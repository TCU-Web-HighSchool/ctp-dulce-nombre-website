import { useState } from "react";

const faqs = [
  {
    q: "¿Cuáles son los requisitos de admisión?",
    a: "Los estudiantes deben haber completado la escuela primaria (6° grado), presentar notas oficiales, certificado de nacimiento y aprobar la prueba de admisión.",
  },
  {
    q: "¿Cuánto duran los programas técnicos?",
    a: "La mayoría de nuestros programas técnicos tienen una duración de 3 años (secundaria), combinando materias académicas generales con formación técnica especializada.",
  },
  {
    q: "¿Hay becas disponibles?",
    a: "Sí, ofrecemos varios programas de becas en asociación con el Ministerio de Educación y fundaciones privadas. Contáctese con la oficina de servicios estudiantiles para más información.",
  },
  {
    q: "¿Cuál es el horario del colegio?",
    a: "Las clases se imparten de lunes a viernes. Las lecciones de la mañana son de 7:00 a.m. a 12:30 p.m., y las de la tarde de 1:00 p.m. a 5:30 p.m., según el programa.",
  },
  {
    q: "¿Los egresados pueden ingresar a la universidad?",
    a: "Absolutamente. Nuestros egresados obtienen un diploma de bachillerato técnico que cumple todos los requisitos para el ingreso universitario en Costa Rica.",
  },
  {
    q: "¿Cómo contacto la oficina de admisiones?",
    a: "Puede escribirnos a info@ctpdulcenombre.ed.cr o llamar al +506 2551-0000 en horario hábil (lunes a viernes, 8:00 a.m. – 4:00 p.m.).",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-6 text-left bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="font-semibold text-slate-900 dark:text-white pr-4">
          {question}
        </span>
        <span
          className="material-symbols-outlined text-primary shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Preguntas Frecuentes
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}
