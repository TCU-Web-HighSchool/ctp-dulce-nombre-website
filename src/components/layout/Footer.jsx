import { Link } from "react-router-dom";
import SchoolMap from "../SchoolMap";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/8yUFTcDsv4zaPd7x8";

const quickLinks = [
  { label: "Sobre el Colegio", to: "/about" },
  { label: "Calendario Académico", to: "/academic" },
  { label: "Proceso de Admisión", to: "/admissions" },
  { label: "Centro de Empleos", to: "/job-board" },
  { label: "Preguntas Frecuentes", to: "/faq" },
];

const facebookHref = "#";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/Logo del  Colegio.jpeg"
                alt="Logo CTP Dulce Nombre"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                CTP Dulce Nombre
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Líderes en educación técnica desde 1999. Formando a la próxima
              generación de profesionales mediante la innovación y la
              disciplina.
            </p>
            <div className="flex gap-4">
              <a
                href={facebookHref}
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-500 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contáctenos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  location_on
                </span>
                <span className="text-slate-500 text-sm">
                  Dulce Nombre, Cartago
                  <br />
                  Costa Rica
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  call
                </span>
                <span className="text-slate-500 text-sm">+506 2551-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  mail
                </span>
                <span className="text-slate-500 text-sm">
                  info@ctpdulcenombre.ed.cr
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Ubicación</h4>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden h-32 w-full border border-slate-200 cursor-pointer"
            >
              <SchoolMap interactive={false} zoom={14} popupText={null} />
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline mt-2 inline-block"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CTP Dulce Nombre. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-primary">
              Política de Privacidad
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-primary">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
