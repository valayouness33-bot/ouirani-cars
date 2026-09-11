const stats = [
  { value: "500+", label: "Clients satisfaits" },
  { value: "50+", label: "Véhicules disponibles" },
  { value: "10+", label: "Années d'expérience" },
  { value: "24/7", label: "Assistance disponible" },
];

export default function StatsSection() {
  return (
    <section className="bg-orange-500 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="text-orange-100 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
