"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-[#F3E8E2] py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Psicología Social & Psicoanálisis para tu bienestar
          </h1>
          <p className="mb-6">
            Acompañamiento profesional para que encuentres nuevas formas de
            comprender, conectar y transformar tu vida.
          </p>
          <a
            href="https://wa.me/5493582446357"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8DA977] text-white px-6 py-3 rounded-md inline-block"
          >
            Agenda tu sesión
          </a>
        </motion.div>
        <motion.div
          className="justify-self-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image src="/hero.png" alt="Ilustración" width={320} height={320} />
        </motion.div>
      </div>
    </section>
  );
}
