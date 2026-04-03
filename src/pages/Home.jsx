import { Link } from "react-router-dom";
import homeData from "../content/settings/home.json";

const {
  heroBadge,
  heroTitle,
  heroDescription,
  heroCtaLabel,
  heroCtaLink,
  heroImage,
  heroBadgeValue,
  heroBadgeLabel,
  stats,
  quickAccessTitle,
  quickAccessCards,
} = homeData;

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3a6b93]/10 border border-[#3a6b93]/20 text-[#3a6b93] text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3a6b93] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3a6b93]"></span>
                </span>
                {heroBadge}
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight">
                {heroTitle.split("**").map((part, i) =>
                  i % 2 === 1 ? (
                    <span key={i} className="text-[#3a6b93]">
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                {heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={heroCtaLink}
                  className="px-8 py-4 bg-[#3a6b93] text-white rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl "
                >
                  {heroCtaLabel}
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-[#3a6b93]/5 rounded-4xl blur-2xl group-hover:bg-[#3a6b93]/10 transition-colors"></div>
              <div className="relative rounded-4xl overflow-hidden aspect-4/3 shadow-2xl border border-slate-200">
                <img
                  src={heroImage}
                  alt="Students in a technical laboratory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 bg-[#3a6b93]/10 rounded-full flex items-center justify-center text-[#3a6b93]">
                    <span className="material-symbols-outlined text-3xl">
                      verified
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 leading-none">
                      {heroBadgeValue}
                    </p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                      {heroBadgeLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center md:items-start p-4 ${
                  i > 0 ? "md:border-l border-slate-100" : ""
                }`}
              >
                <span className="text-4xl font-black text-[#3a6b93] mb-1 tracking-tighter">
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

      <section className="py-24 bg-slate-50">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {quickAccessTitle}
            </h2>
            <div className="h-1 w-20 bg-[#3a6b93] mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickAccessCards.map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col grow">
                  <div className="bg-[#3a6b93]/10 text-[#3a6b93] p-3 rounded-xl w-fit mb-6">
                    <span className="material-symbols-outlined text-2xl">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                  <Link
                    to={card.to}
                    className="mt-auto flex items-center gap-2 text-[#3a6b93] font-bold text-sm hover:underline"
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

      {/* <section className="py-20 px-4">
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
              className="flex-1 px-6 py-4 rounded-xl focus:ring-2 focus:ring-white/50 text-white border-2 border-white"
            />
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}
