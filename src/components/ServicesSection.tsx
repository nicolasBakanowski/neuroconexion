// app/components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP_BASE = "https://wa.me/5493582446357?text=";

const cards = [
  {
    title: "Sesiones de Psicoanálisis",
    desc: "Exploración profunda de emociones, pensamientos y vínculos, en un espacio seguro y confidencial.",
    icon: "/psicoanalisis.png",
    href: `${WHATSAPP_BASE}${encodeURIComponent(
      "Hola, me gustaría saber más sobre Sesiones de Psicoanálisis"
    )}`,
  },
  {
    title: "Acompañamiento en Psicología Social",
    desc: "Comprensión de dinámicas personales y grupales, y su impacto en tu vida cotidiana.",
    icon: "/acompañamiento.png",
    href: `${WHATSAPP_BASE}${encodeURIComponent(
      "Hola, me gustaría saber más sobre Acompañamiento en Psicología Social"
    )}`,
  },
  {
    title: "Herramientas de Autoconocimiento",
    desc: "Estrategias y reflexiones prácticas para identificar patrones y fortalecer tu bienestar emocional.",
    icon: "/autoconocimiento.png",
    href: `${WHATSAPP_BASE}${encodeURIComponent(
      "Hola, me gustaría saber más sobre Herramientas de Autoconocimiento"
    )}`,
  },
  {
    title: "Charlas y Talleres",
    desc: "Espacios de aprendizaje y reflexión sobre vínculos, emociones y desarrollo personal.",
    icon: "/talleres.png",
    href: `${WHATSAPP_BASE}${encodeURIComponent(
      "Hola, me gustaría saber más sobre Charlas y Talleres"
    )}`,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="px-4 py-16 bg-[#FBF6EF]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#5C3A2E] mb-12">
          Servicios
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="
                group relative flex flex-col p-6 bg-white
                rounded-2xl border border-[#E18A63]
                shadow-[0_1px_0_0_rgba(0,0,0,0.03)]
                transition-transform duration-200 hover:-translate-y-0.5
              "
            >
              {/* Icono dinámico */}
              <div className="mb-4 mx-auto flex items-center justify-center">
                <Image
                  src={c.icon}
                  alt={`Icono ${c.title}`}
                  width={100}
                  height={100}
                  className="object-contain"
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
                target="_blank"
                rel="noopener noreferrer"
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

              {/* borde interior */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#E18A63]/20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
