import aboutData from "../content/settings/about.json";

export default function About() {
  const {
    heroImage,
    heroTitle,
    heroSubtitle,
    heroBadge,
    timeline,
    mission,
    vision,
    facilities,
    services,
    anthemTitle,
    anthemVerses,
    historyImages,
  } = aboutData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Hero Section */}
      <section className="relative h-[450px] rounded-xl overflow-hidden bg-slate-900 group">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
        <img
          alt="Campus principal"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"
          src={heroImage}
        />
        <div className="relative z-20 h-full flex flex-col justify-end p-12 space-y-4">
          <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
            {heroBadge}
          </span>
          <h1 className="text-5xl font-black text-white max-w-2xl leading-tight">
            {heroTitle}
          </h1>
          <p className="text-slate-300 max-w-xl text-lg">{heroSubtitle}</p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            Nuestro Legado
          </h2>
          <div className="space-y-8 relative border-l-2 border-slate-200 ml-3 pl-8">
            {timeline.map((event) => (
              <div key={event.year} className="relative">
                <div
                  className={`absolute -left-[41px] top-0 w-4 h-4 rounded-full ring-4 ring-background-light ${
                    event.isHighlighted ? "bg-primary" : "bg-slate-300"
                  }`}
                />
                <h4 className="font-bold text-lg">
                  {event.title} ({event.year})
                </h4>
                <p className="text-slate-600 mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden h-64">
            <img
              alt="Estudiantes en taller"
              className="w-full h-full object-cover grayscale"
              src={historyImages[0]}
            />
          </div>
          <div className="rounded-lg overflow-hidden h-64 mt-8">
            <img
              alt="Graduación"
              className="w-full h-full object-cover grayscale"
              src={historyImages[1]}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        {[mission, vision].map((item) => (
          <div
            key={item.title}
            className="p-8 bg-white border border-slate-200 rounded-xl space-y-4 hover:shadow-lg transition-shadow"
          >
            <span className="material-symbols-outlined text-primary text-4xl">
              {item.icon}
            </span>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Facilities Gallery */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Nuestras Instalaciones</h2>
          <p className="text-slate-500">
            Espacios de primer nivel diseñados para el aprendizaje práctico.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                alt={facility.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                src={facility.image}
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <h4 className="font-bold text-lg">{facility.name}</h4>
                  <p className="text-sm">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-100 rounded-2xl p-10 grid md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div key={service.title} className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                {service.icon}
              </span>
              {service.title}
            </h3>
            <p className="text-slate-600">{service.description}</p>
            <ul className="space-y-2 text-sm">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-primary">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* School Anthem */}
      <section className="max-w-3xl mx-auto text-center space-y-12 py-12 border-y border-slate-200">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">{anthemTitle}</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="italic text-lg text-slate-700 leading-loose space-y-8 font-light">
          {anthemVerses.map((verse, i) => (
            <p key={i} className="whitespace-pre-line">
              {verse}
            </p>
          ))}
        </div>
        <button className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
          <span className="material-symbols-outlined">play_circle</span>
          Escuchar Himno
        </button>
      </section>

      {/* Work With Us */}
      <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-slate-50 p-10 space-y-6">
            <h2 className="text-3xl font-bold">Trabaje con Nosotros</h2>
            <p className="text-slate-600">
              Únase a nuestra comunidad de profesionales educativos y ayude a
              formar la próxima generación de expertos técnicos.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
                <div>
                  <h5 className="font-bold">Oportunidades de Crecimiento</h5>
                  <p className="text-sm text-slate-500">
                    Capacitación continua en métodos pedagógicos modernos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">
                  groups
                </span>
                <div>
                  <h5 className="font-bold">Cultura Colaborativa</h5>
                  <p className="text-sm text-slate-500">
                    Trabaje junto a expertos en diversos campos técnicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 p-10">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-netlify="true"
              name="work-with-us"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="hidden" name="form-name" value="work-with-us" />
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">
                  Nombre Completo
                </label>
                <input
                  className="w-full bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary p-2"
                  placeholder="Juan Pérez"
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700">
                  Correo Electrónico
                </label>
                <input
                  className="w-full bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary p-2"
                  placeholder="juan@ejemplo.com"
                  type="email"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-bold text-slate-700">
                  Especialización
                </label>
                <select className="w-full bg-slate-50 border-slate-200 rounded-lg focus:ring-primary focus:border-primary p-2">
                  <option>Instrucción Técnica</option>
                  <option>Docente Académico</option>
                  <option>Personal Administrativo</option>
                  <option>Consejería y Apoyo</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Subir CV (PDF)
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary transition-colors">
                    cloud_upload
                  </span>
                  <p className="text-sm text-slate-500">
                    <span className="text-primary font-bold">
                      Clic para subir
                    </span>{" "}
                    o arrastra y suelta
                  </p>
                  <p className="text-xs text-slate-400 uppercase">
                    Tamaño máximo 5MB
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <button
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
                  type="submit"
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
