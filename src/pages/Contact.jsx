import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Contáctenos
        </h1>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            ¿Tienes alguna pregunta o necesitas más información? Llena el
            formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
          <ul className="space-y-5">
            {[
              {
                icon: "location_on",
                label: "Dulce Nombre, Cartago, Costa Rica",
              },
              { icon: "call", label: "+506 2551-0000" },
              { icon: "mail", label: "info@ctpdulcenombre.ed.cr" },
              { icon: "schedule", label: "Lun – Vie: 8:00 AM – 4:00 PM" },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-4 text-slate-600 dark:text-slate-400"
              >
                <span className="material-symbols-outlined text-primary text-xl">
                  {item.icon}
                </span>
                <span className="text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center bg-green-50 dark:bg-green-900/20 rounded-2xl p-12 border border-green-200 dark:border-green-800 text-center gap-4">
            <span className="material-symbols-outlined text-5xl text-green-500">
              check_circle
            </span>
            <p className="text-xl font-bold text-slate-900 dark:text-white">
              ¡Mensaje enviado!
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Nos pondremos en contacto pronto.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
