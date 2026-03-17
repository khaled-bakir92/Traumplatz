import { FAQ } from "@/lib/seo-config";

interface CityFaqSectionProps {
  faqs: FAQ[];
  cityName: string;
  serviceName: string;
}

export function CityFaqSection({ faqs, cityName, serviceName }: CityFaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Häufige Fragen zu {serviceName} in {cityName}
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
