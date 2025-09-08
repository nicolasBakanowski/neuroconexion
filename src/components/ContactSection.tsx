import Image from "next/image";

export default function ContactSection() {
  return (
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
  );
}
