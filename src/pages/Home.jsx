import { Link } from "react-router-dom";

const stats = [
  { value: "1500+", label: "Egresados" },
  { value: "80+", label: "Docentes Certificados" },
  { value: "12", label: "Programas Técnicos" },
  { value: "95%", label: "Colocación Laboral" },
];

const quickAccessCards = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIniZC3ENFkhpVS1uoFBVPqDIgORyP9V1ZW0KTGjrej9YGnoX5FWUSInht6QuBiQd_juM9BuIXQQv8t-xXNnJ0LRnOoddCni8EM-pI9kUa3ysaYU2nvaXTUI7kyYEklh4sPyFDqRyi59uMqSGoKjhC4PNceA3E73ds9JQnd4FiqAM5CBi5SNE68Ea3QOAqufK7Usv7ZMbjfNiXrSRp04rUnzAUKLcEG70fbBBWiiCgrHzD8_MlY4bZwZQ8EWuqAGI6ZoKmcnr34A",
    alt: "Proceso de matrícula",
    icon: "how_to_reg",
    title: "Matrícula",
    desc: "¿Listo para unirte a nuestra comunidad? Consulta las fechas de matrícula, documentación requerida y horarios de pruebas para nuevos estudiantes.",
    link: "Guía de Matrícula",
    to: "/admissions",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlYbzxbz-EDea4o2m0rKFzxWaCoeAEGFES2FYv-tyey6bCVLy5v3DWSVTmXAPRnojO7nOaY_xGdAxrYQz0-J3TaphjjMwoUriQESIiVLblFNDCJUVQE5BDgFJfUWLR7c4HJ0Lx-CbScs_iXcxWYOleqQKKi_XAbiZIryZsEvN011Q8uYwsrCFnHpLkSwnr02nkj-bhPyBOE_CnEbY6pKRto0xgWysprdmQmYvX3YvEpbo0rhbL1zm32mxkOEapRCFoHyWidxXw-Q",
    alt: "Especialidades Técnicas",
    icon: "precision_manufacturing",
    title: "Especialidades Técnicas",
    desc: "Explora nuestras 12 carreras técnicas: Informática, Electromecánica, Secretariado, Electrónica y más. Encuentra tu vocación.",
    link: "Ver Programas",
    to: "/academic",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOFp8zsfA-1Q-6gZqGjqHzxRTYqKqBbbz9cZ4X1CrT13YQw8JElYxwCDJu5bY9_9wwxfpByroRNQ_ZyNncHuwc-YOBKHZ0nIJ_QqJRMDVTyCpp0YEx9e6MOtiqBzKPF6q6NNyOUR_vAVHDuIC4NK9uxKHsfllidxCllvzquyUzBnhc5hVXjCgDjJ9oSuP31FvWucR5Xmkf6letiOAwU2_dRJ5ma3iahHfNc-OQMHwxnb-VLfWtDXVTE51soL7UD95555_u37NRAQ",
    alt: "Servicios Estudiantiles",
    icon: "support_agent",
    title: "Servicios Estudiantiles",
    desc: "Desde becas y comedor estudiantil hasta orientación psicológica y apoyo académico, estamos aquí para ti.",
    link: "Centro de Apoyo",
    to: "/about",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Admisiones Abiertas 2024-2025
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                Formando <span className="text-primary">Profesionales</span>{" "}
                para el Futuro.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Excelencia en educación técnica por más de 25 años. Brindamos a
                nuestros estudiantes las herramientas, habilidades y
                certificaciones necesarias para triunfar en la economía global
                moderna.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/academic"
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-primary/25"
                >
                  Explorar Programas
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Recorrido Virtual
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-4xl blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="relative rounded-4xl overflow-hidden aspect-4/3 shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr2ivAuJIfPgI8j4GY9VAt3PE6NstYTNjUJobenWKG8i3A0MogHhq9UNG4EBvCbbp5Q4-WSaByKLypjvRlxRMnQYGzboZKxLqExuEJw81sI09ESCiOE_IRWLCXbMHVjhdz_nmuB9zMNlcehCaktQi3-CruVevTIaKRU8SoqbmnSSkV_rKQ0ukrowKfRGqMn79IOUr8uhKumPFed0VCD8v3crQRpjBudbEFQxL-iRIBTUsmLv5E34RZdc6l1RKk9iboyDtsCczljg"
                  alt="Students in a technical laboratory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-700">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      verified
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">
                      25+
                    </p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                      Años de Excelencia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center md:items-start p-4 ${
                  i > 0
                    ? "md:border-l border-slate-100 dark:border-slate-800"
                    : ""
                }`}
              >
                <span className="text-4xl font-black text-primary mb-1 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Acceso Rápido
            </h2>
            <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickAccessCards.map((card) => (
              <div
                key={card.title}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-6">
                    <span className="material-symbols-outlined text-2xl">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                  <Link
                    to={card.to}
                    className="mt-auto flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                  >
                    {card.link}{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-4xl p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">
            Mantente al Día con Nuestras Noticias
          </h2>
          <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto relative z-10">
            Suscríbete a nuestro boletín para recibir noticias sobre fechas
            académicas, eventos del colegio y oportunidades de empleo
            directamente en tu correo.
          </p>
          <div className="relative z-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-white/50 text-slate-900 outline-none"
            />
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
