import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const _newsModules = import.meta.glob("../content/news/*.json", {
  eager: true,
  import: "default",
});
const allNews = Object.entries(_newsModules)
  .sort((a, b) => b[0].localeCompare(a[0]))
  .map(([, d]) => d)
  .filter((n) => !n.draft);

const categoryBadgeColors = {
  Académico: "bg-primary text-white",
  Deportes: "bg-slate-800 text-white",
  Cultural: "bg-slate-800 text-white",
};

const fmtDate = (d) => {
  try {
    return new Date(d).toLocaleDateString("es-CR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return d;
  }
};

const fmtDateShort = (d) => {
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

const renderContentBlock = (block, index) => {
  if (!block || !block.type) return null;

  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="text-3xl font-bold text-slate-900 mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="text-base leading-8 text-slate-700 mb-6">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="list-disc list-inside space-y-3 text-slate-700 mb-6">
          {Array.isArray(block.items)
            ? block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))
            : null}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-primary pl-6 italic text-slate-600 mt-8 mb-8"
        >
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
};

export default function NewsDetail() {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    // Find the news by title (slug)
    const foundNews = allNews.find((n) => n.title === decodeURIComponent(newsId));
    if (foundNews) {
      setNews(foundNews);
      // Get related news (same category, excluding current)
      const related = allNews
        .filter((n) => n.category === foundNews.category && n.title !== foundNews.title)
        .slice(0, 3);
      setRelatedNews(related);
    } else {
      navigate("/news");
    }
  }, [newsId, navigate]);

  if (!news) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-slate-600">Cargando noticia...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative w-full h-[500px] md:h-[600px] flex items-end overflow-hidden">
        <img
          src={news.img}
          alt={news.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span
                className={`${
                  categoryBadgeColors[news.category] || "bg-slate-800 text-white"
                } px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest`}
              >
                {news.category}
              </span>
              <span className="text-white/80 text-sm font-medium">
                {fmtDate(news.date)}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] max-w-3xl">
              {news.title}
            </h1>
            {news.author && (
              <div className="flex items-center gap-4 mt-6">
                {news.authorImg && (
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    <img alt={news.author} src={news.authorImg} />
                  </div>
                )}
                <div className="text-white">
                  <p className="font-bold text-base">{news.author}</p>
                  {news.authorRole && (
                    <p className="text-sm opacity-80">{news.authorRole}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Sidebar / Metadata */}
        <aside className="lg:col-span-3 order-2 lg:order-1">
          <div className="sticky top-32 flex flex-col gap-8">
            {/* Sharing */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-600">
                Compartir
              </h4>
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">share</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">link</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </button>
              </div>
            </div>

            {/* Read Time & Keywords */}
            {(news.readTime || news.keywords) && (
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
                {news.readTime && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-1">
                      Tiempo de lectura
                    </p>
                    <p className="text-slate-900 font-semibold">{news.readTime}</p>
                  </div>
                )}
                {news.keywords && news.keywords.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">
                      Palabras clave
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {news.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="bg-slate-100 px-2 py-1 rounded-sm text-[10px] font-bold uppercase text-slate-700"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Main Text */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            {news.excerpt && (
              <p className="text-xl font-medium text-primary mb-8 leading-relaxed">
                {news.excerpt}
              </p>
            )}

            {news.content ? (
              Array.isArray(news.content) ? (
                news.content.map(renderContentBlock)
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: news.content,
                  }}
                />
              )
            ) : (
              // Fallback to description if no content provided
              <p className="text-base text-slate-700 mb-6 prose leading-relaxed">{news.desc}</p>
            )}
          </div>

          {/* Call to Action */}
          {news.cta && (
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-lg">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                  {news.cta.title}
                </h3>
                <p className="opacity-90">{news.cta.description}</p>
              </div>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-slate-50 transition-all whitespace-nowrap">
                {news.cta.buttonText || "Más información"}
              </button>
            </div>
          )}
        </div>
      </article>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-xs">
                  Continúa leyendo
                </span>
                <h2 className="text-4xl font-black mt-2 text-slate-900 tracking-tight">
                  Más noticias
                </h2>
              </div>
              <a
                href="/news"
                className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Ver todas <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedNews.map((item) => (
                <article
                  key={item.title}
                  className="bg-white rounded-xl overflow-hidden group hover:shadow-lg hover:border-primary/30 border border-slate-200 transition-all cursor-pointer"
                  onClick={() =>
                    navigate(`/news/${encodeURIComponent(item.title)}`)
                  }
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest ${
                        categoryBadgeColors[item.category] || "text-slate-600"
                      }`}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold mt-3 leading-tight text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-500 font-medium">
                      <span className="material-symbols-outlined text-sm mr-1">
                        schedule
                      </span>
                      {fmtDateShort(item.date)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
