import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-4 py-14">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="justify-self-center md:justify-self-start">
          <Image src="/leaf.png" alt="Hoja" width={360} height={360} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
          <p className="mb-4">Psicóloga Social y psicoanalista</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#8DA977] mr-2">✔</span>Soy una psicóloga
              egresada con orientación psicoanalítica
            </li>
            <li className="flex items-start">
              <span className="text-[#8DA977] mr-2">✔</span>Acompañamiento
              empático y personalizado
            </li>
            <li className="flex items-start">
              <span className="text-[#8DA977] mr-2">✔</span>Transformación
              personal
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
