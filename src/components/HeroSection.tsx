import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#F3E8E2] py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Psicología Social & Psicoanálisis para tu bienestar
          </h1>
          <p className="mb-6">
            Acompañamiento profesional para que encuentres nuevas formas de
            comprender, conectar y transformar tu vida.
          </p>
          <button className="bg-[#8DA977] text-white px-6 py-3 rounded-md">
            Agenda tu sesión
          </button>
        </div>
        <div className="justify-self-center">
          <Image src="/hero.png" alt="Ilustración" width={320} height={320} />
        </div>
      </div>
    </section>
  );
}
