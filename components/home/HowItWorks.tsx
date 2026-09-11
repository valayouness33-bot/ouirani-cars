const steps = [
  {
    step: "01",
    title: "Choisissez votre voiture",
    description: "Parcourez notre catalogue et sélectionnez le véhicule qui correspond à vos besoins et votre budget.",
  },
  {
    step: "02",
    title: "Faites votre réservation",
    description: "Remplissez le formulaire de réservation en ligne ou appelez-nous directement. Confirmation immédiate.",
  },
  {
    step: "03",
    title: "Récupérez votre clé",
    description: "Présentez-vous à notre agence ou recevez votre voiture directement à votre adresse à Agadir.",
  },
  {
    step: "04",
    title: "Profitez de la route",
    description: "Partez l'esprit libre ! Notre équipe reste joignable 24h/24 en cas de besoin.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Simple & rapide
          </p>
          <h2 className="text-4xl font-extrabold text-white">
            Comment ça marche ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          {steps.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/30 mb-6 z-10">
                <span className="text-2xl font-black text-orange-400">{s.step}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
