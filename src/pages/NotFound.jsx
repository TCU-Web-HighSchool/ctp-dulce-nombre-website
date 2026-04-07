import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-primary/10 text-primary p-6 rounded-full mb-6">
        <span className="material-symbols-outlined text-6xl">search_off</span>
      </div>
      <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
      <p className="text-xl font-semibold text-slate-700 mb-2">
        Página no encontrada
      </p>
      <p className="text-slate-500 max-w-sm mb-8">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
      >
        <span className="material-symbols-outlined text-lg">home</span>
        Volver al Inicio
      </Link>
    </div>
  );
}
