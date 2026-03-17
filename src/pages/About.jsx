export default function About() {
  return (
    <section className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Sobre el CTP Dulce Nombre
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            Fundado en 1999, el CTP Dulce Nombre ha estado a la vanguardia de la
            educación técnica en Costa Rica durante más de 25 años. Nuestra
            misión es brindar a los estudiantes una educación integral que
            combine la excelencia académica con habilidades técnicas prácticas.
          </p>
          <p>
            Servimos con orgullo a la comunidad de Dulce Nombre, Cartago,
            ofreciendo 12 programas técnicos especializados impartidos por más
            de 80 docentes certificados. Nuestros egresados han desarrollado
            carreras exitosas tanto a nivel local como internacional.
          </p>
          <p>
            Nuestras instalaciones incluyen laboratorios modernos, talleres y
            aulas equipadas con la última tecnología, garantizando que nuestros
            estudiantes siempre aprendan con herramientas relevantes para la
            industria.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 aspect-video">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr2ivAuJIfPgI8j4GY9VAt3PE6NstYTNjUJobenWKG8i3A0MogHhq9UNG4EBvCbbp5Q4-WSaByKLypjvRlxRMnQYGzboZKxLqExuEJw81sI09ESCiOE_IRWLCXbMHVjhdz_nmuB9zMNlcehCaktQi3-CruVevTIaKRU8SoqbmnSSkV_rKQ0ukrowKfRGqMn79IOUr8uhKumPFed0VCD8v3crQRpjBudbEFQxL-iRIBTUsmLv5E34RZdc6l1RKk9iboyDtsCczljg"
            alt="Campus del CTP Dulce Nombre"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
