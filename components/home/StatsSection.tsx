const stats = [
  { value: "7", label: "Modèles disponibles", suffix: "" },
  { value: "500", label: "Clients satisfaits", suffix: "+" },
  { value: "10", label: "Années d'expérience", suffix: "ans" },
  { value: "24", label: "Assistance disponible", suffix: "h/24" },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-900 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {stats.map((stat) => (
            <div key={stat.label} className="py-10 px-6 text-center">
              <p className="text-5xl font-black text-white mb-1">
                {stat.value}
                <span className="text-orange-400 text-3xl">{stat.suffix}</span>
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
