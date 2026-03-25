import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import academicData from "../content/settings/academic.json";

const _progModules = import.meta.glob("../content/programs/*.json", {
  eager: true,
  import: "default",
});
const specialties = Object.values(_progModules)
  .sort((a, b) => (a.order || 0) - (b.order || 0))
  .filter((p) => p.active !== false);

const COLOR_MAP = {
  primary: "#135bec",
  orange: "#f97316",
  red: "#ef4444",
  green: "#22c55e",
};

const calendarEvents = (academicData.calendarEvents || []).map((evt) => ({
  title: evt.title,
  start: evt.start,
  end: evt.end || undefined,
  backgroundColor: COLOR_MAP[evt.color] || COLOR_MAP.primary,
  borderColor: COLOR_MAP[evt.color] || COLOR_MAP.primary,
}));

const {
  pageTitle,
  pageSubtitle,
  tabs,
  calendarTitle,
  calendarSubtitle,
  scholarshipTitle,
  scholarshipDescription,
  scholarshipBenefits,
  sidebarImage,
  sidebarImageCaption,
  eventLegend,
} = academicData;

export default function Academic() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <a className="hover:text-primary transition-colors" href="/">
          Inicio
        </a>
        <span className="material-symbols-outlined text-[16px]">
          chevron_right
        </span>
        <span className="text-slate-900 font-medium">Programas Académicos</span>
      </nav>

      {/* Hero Title */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">{pageSubtitle}</p>
      </div>

      {/* Tabbed Interface */}
      <div className="mb-12">
        <div className="border-b border-slate-200">
          <nav className="flex gap-8 overflow-x-auto pb-px">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2 ${
                  activeTab === index
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Specialties Grid */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties
            .filter((s) => s.active)
            .map((program) => (
              <div
                key={program.title}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">
                    {program.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {program.summary}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {program.duration}
                  </span>
                  <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                    Ver Plan
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">
                {calendarTitle}
              </h2>
              <p className="text-slate-500 text-sm">{calendarSubtitle}</p>
            </div>
            <div className="p-6 [&_.fc]:border-0 [&_.fc-toolbar-title]:text-lg [&_.fc-toolbar-title]:font-bold [&_.fc-button-primary]:bg-slate-100 [&_.fc-button-primary]:text-slate-600 [&_.fc-button-primary]:border-0 [&_.fc-button-primary]:shadow-none [&_.fc-button-primary:hover]:bg-slate-200 [&_.fc-button-primary:not(:disabled).fc-button-active]:bg-primary [&_.fc-button-primary:not(:disabled).fc-button-active]:text-white [&_.fc-day-today]:bg-primary/5 [&_.fc-col-header-cell]:py-2 [&_.fc-col-header-cell]:text-xs [&_.fc-col-header-cell]:font-black [&_.fc-col-header-cell]:uppercase [&_.fc-col-header-cell]:text-slate-400 [&_.fc-col-header-cell]:bg-slate-50 [&_th]:border-slate-100 [&_td]:border-slate-100 [&_.fc-scrollgrid]:border-slate-100 [&_.fc-daygrid-day]:min-h-[6rem]">
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                initialDate="2026-01-01"
                events={calendarEvents}
                locale="es"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "",
                }}
                buttonText={{
                  today: "Hoy",
                }}
                height="auto"
                dayMaxEvents={3}
                eventContent={(arg) => (
                  <div
                    className="text-white text-[11px] font-semibold px-1.5 py-0.5 rounded leading-tight w-full"
                    style={{ backgroundColor: arg.event.backgroundColor }}
                  >
                    {arg.event.title}
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Scholarship Card */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[80px] text-primary">
                payments
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {scholarshipTitle}
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {scholarshipDescription}
            </p>
            <ul className="space-y-3 mb-8">
              {scholarshipBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    check_circle
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <button className="w-full bg-primary text-white py-3 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all">
              Solicitar Ayuda
            </button>
          </div>

          {/* Event Legend */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Leyenda
            </h4>
            <div className="space-y-4">
              {eventLegend.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className={`size-3 rounded-full ${item.color === "primary" ? "bg-primary" : item.color === "orange" ? "bg-orange-500" : item.color === "red" ? "bg-red-500" : "bg-emerald-500"}`}
                  />
                  <span className="text-sm text-slate-600 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden h-48 relative group">
            <img
              alt={sidebarImageCaption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={sidebarImage}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-4">
              <p className="text-white text-sm font-bold">
                {sidebarImageCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
