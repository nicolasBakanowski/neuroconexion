import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans text-[#4A3B37] bg-[#F5F0E8]">
      <section className="bg-[#F3E8E2] py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
              Psicología Social & Psicoanálisis para tu bienestar
            </h1>
            <p className="mb-6">
              Acompañamiento profesional para que encuentres nuevas formas de comprender,
              conectar y transformar tu vida.
            </p>
            <button className="bg-[#8DA977] text-white px-6 py-3 rounded-md">Agenda tu sesión</button>
          </div>
          <div className="justify-self-center">
            <Image src="/hero.svg" alt="Ilustración" width={320} height={320} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="justify-self-center md:justify-self-start">
            <Image src="/leaf.svg" alt="Hoja" width={180} height={180} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
            <p className="mb-4">Psicóloga Social y psicoanalista</p>
            <ul className="space-y-2">
              <li className="flex items-start"><span className="text-[#8DA977] mr-2">✔</span>Soy una psicóloga egresada con orientación psicoanalítica</li>
              <li className="flex items-start"><span className="text-[#8DA977] mr-2">✔</span>Acompañamiento empático y personalizado</li>
              <li className="flex items-start"><span className="text-[#8DA977] mr-2">✔</span>Transformación personal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Servicios</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg bg-white flex flex-col">
              <h3 className="font-semibold mb-2">Psicoanálisis individual</h3>
              <p className="text-sm mb-4 flex-1">Encuentros personalizados para acompañarte en tu proceso.</p>
              <a className="text-[#8DA977] font-medium" href="#">Saber más</a>
            </div>
            <div className="p-6 border rounded-lg bg-white flex flex-col">
              <h3 className="font-semibold mb-2">Terapia de grupo</h3>
              <p className="text-sm mb-4 flex-1">Espacios grupales donde compartir y crear lazos saludables.</p>
              <a className="text-[#8DA977] font-medium" href="#">Saber más</a>
            </div>
            <div className="p-6 border rounded-lg bg-white flex flex-col">
              <h3 className="font-semibold mb-2">Talleres y charlas</h3>
              <p className="text-sm mb-4 flex-1">Propuestas formativas para instituciones y organizaciones.</p>
              <a className="text-[#8DA977] font-medium" href="#">Saber más</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3E8E2] px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Testimonios</h2>
          <div className="space-y-6">
            <p className="italic">&quot;El espacio terapéutico me ayudó a encontrar nuevas miradas sobre mi historia&quot; — Ana</p>
            <p className="italic">&quot;Logré conectar con mis emociones y mejorar mis vínculos&quot; — Luis</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Demos el primer paso juntos</h2>
            <p className="mb-6">Completa el formulario y me pondré en contacto contigo a la brevedad.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full border px-3 py-2 rounded" />
              <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" />
              <textarea placeholder="Mensaje" className="w-full border px-3 py-2 rounded" rows={4} />
              <button type="submit" className="bg-[#8DA977] text-white px-6 py-3 rounded-md">Enviar</button>
            </form>
          </div>
          <div className="hidden md:block justify-self-center">
            <Image src="/leaf.svg" alt="Ilustración" width={200} height={200} />
          </div>
        </div>
      </section>
    </div>
  );
}

