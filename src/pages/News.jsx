import { useState } from "react";
import { useNavigate } from "react-router-dom";
import newsData from "../content/settings/news.json";

const _newsModules = import.meta.glob("../content/news/*.json", {
  eager: true,
  import: "default",
});
const news = Object.entries(_newsModules)
  .sort((a, b) => b[0].localeCompare(a[0]))
  .map(([, d]) => d)
  .filter((n) => !n.draft);

const archiveData = news.reduce((acc, item) => {
  const date = new Date(item.date);
  const year = String(date.getFullYear());
  const month = date.toLocaleDateString("es-CR", { month: "long" });
  const cap = month.charAt(0).toUpperCase() + month.slice(1);
  if (!acc[year]) acc[year] = [];
  if (!acc[year].includes(cap)) acc[year].push(cap);
  return acc;
}, {});

const dynamicArchive = Object.entries(archiveData)
  .sort(([a], [b]) => b.localeCompare(a))
  .map(([year, months]) => ({ year, months }));

const fmtDate = (d) => {
  try {
    return new Date(d).toLocaleDateString("es-CR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return d;
  }
};

const { pageTitle, filterCategories } = newsData;

const categoryBadgeColors = {
  Académico: "bg-primary text-white",
  Deportes: "bg-slate-800 text-white",
  Cultural: "bg-slate-800 text-white",
};

export default function News() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [expandedYear, setExpandedYear] = useState(
    dynamicArchive[0]?.year ?? "2026",
  );

  const filtered =
    activeCategory === "Todos"
      ? news
      : news.filter((n) => n.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-6">
          {/* Archive */}
          <div className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">
                calendar_month
              </span>
              <h2 className="font-bold text-base text-slate-900">
                Archivo de Anuncios
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              {dynamicArchive.map((item) => (
                <div key={item.year}>
                  <button
                    onClick={() =>
                      setExpandedYear(
                        expandedYear === item.year ? null : item.year,
                      )
                    }
                    className="flex w-full items-center justify-between py-2 px-3 rounded-lg bg-slate-100 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-colors"
                  >
                    <span>{item.year}</span>
                    <span
                      className="material-symbols-outlined text-sm transition-transform"
                      style={{
                        transform:
                          expandedYear === item.year
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      expand_more
                    </span>
                  </button>
                  {expandedYear === item.year && item.months.length > 0 && (
                    <div className="mt-1 flex flex-col pl-4">
                      {item.months.map((month) => (
                        <a
                          key={month}
                          href="#"
                          className="py-1.5 text-sm text-slate-600 hover:text-primary transition-colors"
                        >
                          {month}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#"
                className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-600 mt-2"
              >
                <span className="material-symbols-outlined text-sm">
                  folder_open
                </span>
                <span>Publicaciones Antiguas</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              {pageTitle}
            </h2>
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
              {filterCategories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${
                    activeCategory === cat.label
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((item) => (
              <article
                key={item.title}
                className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${
                        categoryBadgeColors[item.category] ||
                        "bg-slate-800 text-white"
                      }`}
                    >
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="px-2 py-1 bg-black/50 text-white text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-md">
                        Nuevo
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    {fmtDate(item.date)}
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {item.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <button
                      onClick={() =>
                        navigate(`/news/${encodeURIComponent(item.title)}`)
                      }
                      className="text-sm font-bold text-primary flex items-center gap-1 group/btn"
                    >
                      Leer Artículo
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                      <span className="material-symbols-outlined">share</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-8 mt-4">
            <p className="text-sm text-slate-500 font-medium">
              Mostrando {filtered.length} de {filtered.length} anuncios
            </p>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="flex items-center justify-center size-9 rounded-lg bg-primary text-white text-sm font-bold">
                1
              </button>
              <button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 text-sm font-medium hover:text-primary transition-all">
                2
              </button>
              <button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 text-sm font-medium hover:text-primary transition-all">
                3
              </button>
              <span className="px-2 text-slate-400">...</span>
              <button className="flex items-center justify-center size-9 rounded-lg border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
