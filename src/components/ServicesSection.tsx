export default function ServicesSection() {
  return (
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
  );
}
