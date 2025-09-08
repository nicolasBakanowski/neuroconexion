// app/calendar/page.tsx (o donde prefieras)
// "use client";

"use client";
import { useMemo, useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); // opcional: hora
  const [name, setName] = useState(""); // opcional: nombre

  const fechaLegible = useMemo(() => {
    if (!date) return "";
    try {
      const opts: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const base = new Date(date + (time ? `T${time}:00` : "T12:00:00"));
      // Forzar español (Argentina)
      return (
        base.toLocaleDateString("es-AR", opts) +
        (time ? ` a las ${time} hs` : "")
      );
    } catch {
      return "";
    }
  }, [date, time]);

  const phone = "5493584379276";
  const mensaje = useMemo(() => {
    const saludo = name ? `Hola, soy ${name}.` : "Hola";
    const cuerpo = fechaLegible
      ? `Me gustaría agendar una sesión el ${fechaLegible}.`
      : "Me gustaría agendar una sesión.";
    const cierre = "¿Podemos coordinar?";
    return encodeURIComponent([saludo, cuerpo, cierre].join(" "));
  }, [fechaLegible, name]);

  const whatsAppUrl = `https://wa.me/${phone}?text=${mensaje}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0E8] p-6">
      <div className="w-full max-w-xl">
        <div className="rounded-3xl bg-white/90 shadow-lg ring-1 ring-[#E18A63]/40 p-6 sm:p-8">
          <header className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-[#4A3B37]">
              Agenda tu sesión
            </h1>
            <p className="text-sm text-[#6E5B50] mt-1">
              Elegí una fecha (y opcionalmente una hora) para coordinar por
              WhatsApp.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-xs font-medium text-[#5C3A2E] mb-1">
                Tu nombre (opcional)
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej: Ana"
                className="rounded-xl border border-[#E18A63]/40 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8DA977]/50"
              />
            </label>

            <div className="hidden sm:block" />

            <label className="flex flex-col">
              <span className="text-xs font-medium text-[#5C3A2E] mb-1">
                Fecha
              </span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-xl border border-[#E18A63]/40 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8DA977]/50"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs font-medium text-[#5C3A2E] mb-1">
                Hora (opcional)
              </span>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="rounded-xl border border-[#E18A63]/40 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8DA977]/50"
              />
            </label>
          </div>

          <div className="mt-5">
            {fechaLegible ? (
              <p className="text-sm text-[#4A3B37]">
                Has seleccionado:{" "}
                <span className="font-medium capitalize">{fechaLegible}</span>
              </p>
            ) : (
              <p className="text-sm text-[#6E5B50]">
                Seleccioná una fecha para continuar.
              </p>
            )}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!date}
              className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition
                ${
                  date
                    ? "bg-[#8DA977] text-white hover:brightness-95"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
            >
              {/* ícono simple */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 5.98L0 24l6.17-1.6A12 12 0 1 0 20.52 3.48Zm-8.5 18.02a9.95 9.95 0 0 1-5.08-1.4l-.36-.21-3.67.95.98-3.57-.24-.37a9.96 9.96 0 1 1 8.37 4.6Zm5.7-7.46c-.31-.16-1.84-.9-2.13-1.01-.29-.11-.5-.16-.72.16-.21.31-.83 1.01-1.02 1.22-.19.21-.38.23-.7.08-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.55-1.86-1.73-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.72-1.74-.99-2.38-.26-.63-.52-.54-.72-.55h-.62c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.61s1.12 3.03 1.28 3.24c.16.21 2.21 3.37 5.35 4.72.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.11-.29-.18-.6-.34Z" />
              </svg>
              Agendar por WhatsApp
            </a>

            <button
              type="button"
              onClick={() => {
                setDate("");
                setTime("");
                setName("");
              }}
              className="text-[#5C3A2E]/70 hover:text-[#5C3A2E] text-sm px-3 py-2"
            >
              Limpiar
            </button>
          </div>

          <div className="mt-4 text-[12px] text-[#6E5B50]">
            {date ? (
              <span>
                Se abrirá WhatsApp con este mensaje:{" "}
                <span className="font-medium">
                  {decodeURIComponent(mensaje)}
                </span>
              </span>
            ) : (
              <span>El botón se habilita al elegir una fecha.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
