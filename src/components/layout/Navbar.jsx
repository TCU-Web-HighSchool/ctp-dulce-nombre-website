import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Inicio", to: "/", end: true },
  { label: "Nosotros", to: "/about" },
  { label: "Académico", to: "/academic" },
  { label: "Admisiones", to: "/admissions" },
  { label: "Noticias", to: "/news" },
  { label: "Bolsa de Empleo", to: "/job-board" },
  { label: "Preguntas Frecuentes", to: "/faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-340 mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Logo del  Colegio.jpeg"
              alt="Logo CTP Dulce Nombre"
              className="h-10 w-auto"
            />
            <div>
              <p className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                CTP Dulce Nombre
              </p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mt-0.5">
                Colegio Técnico Profesional
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[#3a6b93]"
                      : "text-slate-600 hover:text-[#3a6b93]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              Contacto
            </Link>

            <a
              href="https://cloudcampuspro.com/home/index.html?p=2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3a6b93] text-white text-sm font-bold hover:bg-[#2e587a] transition-all shadow-lg shadow-[#3a6b93]/20"
            >
              <span className="material-symbols-outlined text-lg">login</span>
              Portal
            </a>

            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Abrir menú"
            >
              <span className="material-symbols-outlined text-xl text-slate-700">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#3a6b93]/10 text-[#3a6b93]"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
