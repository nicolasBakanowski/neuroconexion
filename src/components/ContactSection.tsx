import Image from "next/image";
import FadeInSection from "./FadeInSection";

const WHATSAPP_BASE = "https://wa.me/5493582446357?text=";

export default function ContactSection() {
  return (
    <FadeInSection id="contacto" className="px-4 py-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Demos el primer paso juntos
          </h2>
          <p className="mb-6">
            Si es tu primera vez en este camino, estoy aquí para acompañarte.
          </p>
          <a
            href={`${WHATSAPP_BASE}${encodeURIComponent(
              "Hola, me gustaría dar el primer paso"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8DA977] text-white px-6 py-3 rounded-md inline-block"
          >
            Escribime por WhatsApp
          </a>
        </div>
        <div className="justify-self-center mt-8 md:mt-17">
          <Image src="/hero2.png" alt="Ilustración" width={320} height={320} />
        </div>
      </div>
    </FadeInSection>
  );
}
