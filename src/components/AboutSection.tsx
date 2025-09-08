import Image from "next/image";
import { FaBrain, FaComments, FaUsers, FaLock } from "react-icons/fa";

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
              <FaBrain className="text-[#8DA977] mr-2 mt-1" />
              Acompaño procesos de autoconocimiento y reflexión.
            </li>
            <li className="flex items-start">
              <FaComments className="text-[#8DA977] mr-2 mt-1" />
              Trabajo desde la palabra y la escucha para comprender emociones y vínculos.
            </li>
            <li className="flex items-start">
              <FaUsers className="text-[#8DA977] mr-2 mt-1" />
              Integro psicoanálisis y psicología social para entender a la persona y su contexto.
            </li>
            <li className="flex items-start">
              <FaLock className="text-[#8DA977] mr-2 mt-1" />
              Brindo un espacio seguro y confidencial para explorar y avanzar con conciencia.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
