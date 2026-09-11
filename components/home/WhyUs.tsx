import {
  Shield,
  CreditCard,
  Clock,
  MapPin,
  Headphones,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Assurance tous risques",
    description: "Tous nos véhicules sont couverts par une assurance complète. Roulez en toute sérénité.",
  },
  {
    icon: CreditCard,
    title: "Tarifs transparents",
    description: "Aucun frais caché. Le prix affiché est le prix que vous payez. Kilométrage illimité inclus.",
  },
  {
    icon: Clock,
    title: "Disponible 24h/24",
    description: "Réservez à tout moment, récupérez votre voiture à l'heure qui vous convient.",
  },
  {
    icon: MapPin,
    title: "Livraison à domicile",
    description: "Nous vous livrons votre voiture à votre hôtel, riad ou adresse de votre choix à Agadir.",
  },
  {
    icon: Headphones,
    title: "Support client dédié",
    description: "Notre équipe est disponible par téléphone et WhatsApp pour vous assister en toutes circonstances.",
  },
  {
    icon: Star,
    title: "Flotte récente & entretenue",
    description: "Des véhicules de 2022 à 2024, régulièrement contrôlés et nettoyés entre chaque location.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Pourquoi nous choisir
          </p>
          <h2 className="text-4xl font-extrabold text-white">
            L'expérience Ouirani Cars
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Nous mettons tout en œuvre pour que votre location soit parfaite, du début à la fin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="bg-gray-800/50 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 hover:bg-gray-800 transition-all group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors mb-4">
                <feat.icon className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
