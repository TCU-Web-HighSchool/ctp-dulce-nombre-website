import { useState } from "react";
import jobData from "../content/settings/jobboard.json";

const _jobModules = import.meta.glob("../content/jobs/*.json", {
  eager: true,
  import: "default",
});
const jobs = Object.values(_jobModules).filter((j) => j.active !== false);

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

const { pageTitle, pageSubtitle, searchPlaceholder, areas } = jobData;

const typeColors = {
  "Tiempo completo": "bg-green-100 text-green-700",
  "Medio tiempo": "bg-yellow-100 text-yellow-700",
  Pasantía: "bg-purple-100 text-purple-700",
};

export default function JobBoard() {
  const [activeArea, setActiveArea] = useState("Todas");
  const [search, setSearch] = useState("");

  const filtered = jobs.filter((job) => {
    const matchesArea = activeArea === "Todas" || job.area === activeArea;
    const matchesSearch =
      !search ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());
    return matchesArea && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {pageTitle}
          </h1>
          <p className="text-slate-600 max-w-2xl mb-8">{pageSubtitle}</p>
          <div className="relative max-w-lg">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setActiveArea(area)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeArea === area
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Job Cards Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <span className="material-symbols-outlined text-5xl mb-4 block">
              work_off
            </span>
            <p className="text-lg font-semibold">No se encontraron ofertas</p>
            <p className="text-sm mt-1">Intenta con otros filtros</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((job) => (
              <div
                key={job.title}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-12 bg-slate-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                    {job.logo ? (
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML =
                            '<span class="material-symbols-outlined text-slate-400">apartment</span>';
                        }}
                      />
                    ) : (
                      <span className="material-symbols-outlined text-slate-400">
                        apartment
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-500">{job.company}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        typeColors[job.type] || "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        location_on
                      </span>
                      {job.location}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {fmtDate(job.date)}
                  </span>
                </div>
              </div>
            ))}


          </div>
        )}
      </section>
    </div>
  );
}
