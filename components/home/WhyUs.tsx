import {
  Shield,
  CreditCard,
  Clock,
  MapPin,
  Headphones,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Assurance tous risques",
    description: "Tous nos véhicules sont couverts. Roulez en toute sérénité.",
  },
  {
    icon: CreditCard,
    title: "Aucun frais caché",
    description: "Le prix affiché est le prix payé. Kilométrage illimité inclus.",
  },
  {
    icon: Clock,
    title: "Disponible 24h/24",
    description: "Réservez à tout moment, récupérez votre voiture quand vous voulez.",
  },
  {
    icon: MapPin,
    title: "Livraison à domicile",
    description: "Livraison à votre hôtel ou adresse à Agadir sur demande.",
  },
  {
    icon: Headphones,
    title: "Support WhatsApp",
    description: "Notre équipe vous répond par téléphone et WhatsApp à toute heure.",
  },
  {
    icon: Wrench,
    title: "Flotte récente & entretenue",
    description: "Véhicules 2023–2024, régulièrement contrôlés et nettoyés.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Pourquoi nous choisir
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              L'expérience
              <br />
              <span className="text-orange-400">Ouirani Cars</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Depuis plus de 10 ans à Agadir, nous mettons tout en œuvre pour que 
              votre location soit parfaite. Service humain, prix justes, véhicules fiables.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {["YB", "SM", "RA"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 border-2 border-gray-900 text-white text-xs font-bold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold">+500 clients satisfaits</p>
                <p className="text-gray-500 text-sm">Note moyenne 4.9/5</p>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-gray-800/60 border border-white/5 rounded-2xl p-5 hover:border-orange-500/30 hover:bg-gray-800 transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors mb-3">
                  <feat.icon className="h-5 w-5 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold mb-1.5">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
