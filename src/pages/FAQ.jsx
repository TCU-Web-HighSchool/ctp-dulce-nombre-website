import { useState } from "react";
import { Link } from "react-router-dom";
import faqData from "../content/settings/faq.json";

const _faqModules = import.meta.glob("../content/faq/*.json", {
  eager: true,
  import: "default",
});
const faqs = Object.values(_faqModules)
  .sort((a, b) => (a.order || 0) - (b.order || 0))
  .filter((f) => f.active !== false);

const {
  heroTitle,
  heroSubtitle,
  searchPlaceholder,
  categories,
  contactCtaTitle,
  contactCtaDescription,
  contactCtaButton,
} = faqData;

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <span
          className="material-symbols-outlined text-primary shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "Todos" || faq.category === activeCategory;
    const matchesSearch =
      !search ||
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const grouped = filtered.reduce((acc, faq) => {
    if (!acc[faq.category]) acc[faq.category] = [];
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div>
      {/* Hero Search Section */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {heroTitle}
          </h1>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">{heroSubtitle}</p>
          <div className="relative max-w-lg mx-auto">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs + FAQ Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {Object.entries(grouped).length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <span className="material-symbols-outlined text-5xl mb-4 block">
              search_off
            </span>
            <p className="text-lg font-semibold">
              No se encontraron resultados
            </p>
            <p className="text-sm mt-1">
              Intenta con otros términos de búsqueda
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-xs font-black text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    {category === "Matrícula"
                      ? "how_to_reg"
                      : category === "Académico"
                        ? "school"
                        : "admin_panel_settings"}
                  </span>
                  {category}
                </h2>
                <div className="space-y-3">
                  {items.map((faq) => (
                    <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {contactCtaTitle}
            </h3>
            <p className="text-slate-500 text-sm">{contactCtaDescription}</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            {contactCtaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
