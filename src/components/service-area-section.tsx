import Image from "next/image";

export function ServiceAreaSection() {
  return (
    <section className="py-16 sm:py-20 bg-section-gray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Unser Einzugsgebiet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir betreuen in ganz Bensheim und Umgebung - schnell, zuverlässig
            und immer in Ihrer Nähe
          </p>
        </div>

        {/* Map Image */}
        <div className="relative mx-auto max-w-2xl">
          <Image
            src="/ServiceArea.png"
            alt="Unser Einzugsgebiet - Bensheim und Umgebung"
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
