import Image from "next/image";
import { FaBrain, FaComments, FaUsers, FaLock } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="px-4 py-14">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="justify-self-center md:justify-self-start">
          <Image src="/leaf.png" alt="Hoja" width={360} height={360} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
          <p className="mb-6 text-lg">Psicóloga Social y psicoanalista</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaBrain
                size={22}
                className="text-[#8DA977] flex-shrink-0 mr-3"
              />
              <span>Acompaño procesos de autoconocimiento y reflexión.</span>
            </li>
            <li className="flex items-center">
              <FaComments
                size={22}
                className="text-[#8DA977] flex-shrink-0 mr-3"
              />
              <span>
                Trabajo desde la palabra y la escucha para comprender emociones
                y vínculos.
              </span>
            </li>
            <li className="flex items-center">
              <FaUsers
                size={22}
                className="text-[#8DA977] flex-shrink-0 mr-3"
              />
              <span>
                Integro psicoanálisis y psicología social para entender a la
                persona y su contexto.
              </span>
            </li>
            <li className="flex items-center">
              <FaLock size={22} className="text-[#8DA977] flex-shrink-0 mr-3" />
              <span>
                Brindo un espacio seguro y confidencial para explorar y avanzar
                con conciencia.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
