import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Youssef Benali",
    city: "Casablanca",
    rating: 5,
    text: "Service exceptionnel ! La voiture était impeccable, livrée directement à mon hôtel. Je recommande vivement Ouirani Cars pour tout séjour à Agadir.",
    date: "Octobre 2024",
  },
  {
    name: "Sophie Martin",
    city: "Paris",
    rating: 5,
    text: "Très bonne expérience. Tarifs compétitifs, personnel sympathique et professionnel. J'ai loué un SUV pour explorer la région, parfait pour les pistes de Souss-Massa.",
    date: "Septembre 2024",
  },
  {
    name: "Rachid Ait Omar",
    city: "Agadir",
    rating: 5,
    text: "Je loue régulièrement chez Ouirani Cars pour mes déplacements professionnels. Toujours ponctuel, toujours propre. Une équipe de confiance.",
    date: "Novembre 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Avis clients
          </p>
          <h2 className="text-4xl font-extrabold text-white">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-800/50 border border-white/5 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.city}</p>
                </div>
                <span className="text-gray-600 text-xs">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
