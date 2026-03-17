const news = [
  {
    id: 1,
    category: "Eventos",
    date: "10 de marzo, 2025",
    title: "Feria Anual de Ciencia y Tecnología",
    desc: "Estudiantes de todos los programas técnicos presentaron sus proyectos innovadores en la Feria de Ciencias de este año, atrayendo a profesionales de la industria local.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIniZC3ENFkhpVS1uoFBVPqDIgORyP9V1ZW0KTGjrej9YGnoX5FWUSInht6QuBiQd_juM9BuIXQQv8t-xXNnJ0LRnOoddCni8EM-pI9kUa3ysaYU2nvaXTUI7kyYEklh4sPyFDqRyi59uMqSGoKjhC4PNceA3E73ds9JQnd4FiqAM5CBi5SNE68Ea3QOAqufK7Usv7ZMbjfNiXrSRp04rUnzAUKLcEG70fbBBWiiCgrHzD8_MlY4bZwZQ8EWuqAGI6ZoKmcnr34A",
  },
  {
    id: 2,
    category: "Académico",
    date: "20 de febrero, 2025",
    title: "Inauguración del Nuevo Laboratorio de Cómputo",
    desc: "El colegio inauguró un laboratorio de cómputo de última generación con 40 nuevas estaciones de trabajo, financiado por el Ministerio de Educación.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlYbzxbz-EDea4o2m0rKFzxWaCoeAEGFES2FYv-tyey6bCVLy5v3DWSVTmXAPRnojO7nOaY_xGdAxrYQz0-J3TaphjjMwoUriQESIiVLblFNDCJUVQE5BDgFJfUWLR7c4HJ0Lx-CbScs_iXcxWYOleqQKKi_XAbiZIryZsEvN011Q8uYwsrCFnHpLkSwnr02nkj-bhPyBOE_CnEbY6pKRto0xgWysprdmQmYvX3YvEpbo0rhbL1zm32mxkOEapRCFoHyWidxXw-Q",
  },
  {
    id: 3,
    category: "Comunidad",
    date: "15 de enero, 2025",
    title: "Estudiantes Lanzan Campaña de Limpieza Comunitaria",
    desc: "Estudiantes de los programas de Turismo y Medio Ambiente organizaron una exitosa iniciativa de limpieza comunitaria en Dulce Nombre.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOFp8zsfA-1Q-6gZqGjqHzxRTYqKqBbbz9cZ4X1CrT13YQw8JElYxwCDJu5bY9_9wwxfpByroRNQ_ZyNncHuwc-YOBKHZ0nIJ_QqJRMDVTyCpp0YEx9e6MOtiqBzKPF6q6NNyOUR_vAVHDuIC4NK9uxKHsfllidxCllvzquyUzBnhc5hVXjCgDjJ9oSuP31FvWucR5Xmkf6letiOAwU2_dRJ5ma3iahHfNc-OQMHwxnb-VLfWtDXVTE51soL7UD95555_u37NRAQ",
  },
];

const categoryColors = {
  Eventos: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Académico:
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Comunidad:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
};

export default function News() {
  return (
    <section className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Noticias y Anuncios
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${categoryColors[item.category]}`}
                >
                  {item.category}
                </span>
                <span className="text-xs text-slate-400">{item.date}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                {item.title}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
