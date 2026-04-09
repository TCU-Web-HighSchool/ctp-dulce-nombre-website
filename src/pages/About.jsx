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
      </section>
    </div>
  );
}
