import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Sobre el Colegio", to: "/about" },
  { label: "Calendario Académico", to: "/academic" },
  { label: "Proceso de Admisión", to: "/admissions" },
  { label: "Centro de Empleos", to: "/job-board" },
  { label: "Preguntas Frecuentes", to: "/faq" },
];

const socialLinks = [
  { icon: "social_leaderboard", label: "Facebook", href: "#" },
  { icon: "camera", label: "Instagram", href: "#" },
  { icon: "link", label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-lg">
                <span className="material-symbols-outlined text-2xl">
                  school
                </span>
              </div>
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-xl">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">
              Enlaces Rápidos
            </h4>
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
            <h4 className="text-slate-900 font-bold mb-6">
              Contáctenos
            </h4>
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
                <span className="text-slate-500 text-sm">
                  +506 2551-0000
                </span>
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
            <h4 className="text-slate-900 font-bold mb-6">
              Ubicación
            </h4>
            <div className="rounded-xl overflow-hidden h-32 w-full border border-slate-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3QbuuXbF6_06ELGkFiX8odJnbOkij-UfFDYPoFBNW2W_7LcK3HbpLNEO0AeTm_a1WIZt2zotUS74H9ZQKE_C304n7wZXZTm9Y6fHp7saxLNQQKOXJWkPXG8tuSWc2U-pS833jdi-Tl48hNPYnGcrxmWJytCOdeZzuzkO1bR78rQPBfvsX42rWdMmz2qeE9zQBqwTbQMrQcpVAUfbkwSXrMtcO2wyL1eEaTp-WzgEpDVf7CC9LGsIqnFb_EbB87jD_sG35_m9Tg"
                alt="Map - Dulce Nombre, Cartago"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Dulce+Nombre+Cartago+Costa+Rica"
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
