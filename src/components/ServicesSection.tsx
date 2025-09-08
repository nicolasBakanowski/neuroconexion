// app/components/ServicesSection.tsx
"use client";

import Image from "next/image";

const cards = [
  {
    title: "Psicoanálisis individual",
    desc: "Personalizadas sesiones para resignificar y explorar.",
    href: "#",
  },
  {
    title: "Terapia de grupo (social)",
    desc: "Fortalece el lazo conjunto en procesos terapéuticos.",
    href: "#",
  },
  {
    title: "Talleres y charlas",
    desc: "Actividades educativas sobre bienestar psico-emocional.",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-4 py-16 bg-[#FBF6EF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#5C3A2E] mb-12">
          Servicios
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="
                group relative flex flex-col p-6 bg-white
                rounded-2xl border border-[#E18A63]
                shadow-[0_1px_0_0_rgba(0,0,0,0.03)]
                transition-transform duration-200 hover:-translate-y-0.5
                "
            >
              {/* Icono /hero.png como placeholder */}
              <div
                className="
                  mb-4 inline-flex items-center justify-center
                  h-12 w-12 rounded-full
                  ring-1 ring-[#E18A63]/40 bg-[#FFF8F3]
                "
              >
                <Image
                  src="/hero.png"
                  alt="Icono de servicio"
                  width={28}
                  height={28}
                  className="object-contain"
                  priority={false}
                />
              </div>

              <h3 className="text-[17px] font-semibold text-[#5C3A2E] mb-1">
                {c.title}
              </h3>

              <p className="text-sm text-[#6E5B50] leading-relaxed mb-5 flex-1">
                {c.desc}
              </p>

              <a
                href={c.href}
                className="
                  text-[#8DA977] font-semibold text-sm
                  inline-flex items-center gap-2
                  hover:underline underline-offset-2
                "
              >
                Saber más
                <span
                  className="
                    h-[1px] w-3 bg-[#8DA977] transition-all duration-200
                    group-hover:w-5
                  "
                />
              </a>

              {/* borde suave interior como en tarjetas impresas */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#E18A63]/20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
