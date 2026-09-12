export type Car = {
  id: number;
  name: string;
  brand: string;
  category: "économique" | "berline" | "SUV" | "luxe";
  pricePerDay: number;
  seats: number;
  transmission: "Manuelle" | "Automatique";
  fuel: "Essence" | "Diesel" | "Hybride";
  year: number;
  image: string;
  features: string[];
  available: boolean;
  popular?: boolean;
  badge?: string;
};

export const cars: Car[] = [
  {
    id: 1,
    name: "Dacia Logan",
    brand: "Dacia",
    category: "économique",
    pricePerDay: 29,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    year: 2023,
    image: "/cars/dacia-logan.jpg",
    features: ["Climatisation", "Bluetooth", "USB", "Radio"],
    available: true,
    popular: true,
    badge: "Meilleur prix",
  },
  {
    id: 2,
    name: "Dacia Sandero",
    brand: "Dacia",
    category: "économique",
    pricePerDay: 29,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    year: 2023,
    image: "/cars/dacia-sandero.jpg",
    features: ["Climatisation", "Bluetooth", "Airbags", "USB"],
    available: true,
    popular: true,
  },
  {
    id: 3,
    name: "Renault Clio 5",
    brand: "Renault",
    category: "économique",
    pricePerDay: 32,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    year: 2024,
    image: "/cars/clio5.jpg",
    features: ["Climatisation", "GPS", "Bluetooth", "Écran tactile", "USB-C"],
    available: true,
    popular: true,
    badge: "Nouveauté 2024",
  },
  {
    id: 4,
    name: "Renault Clio 5 Automatique",
    brand: "Renault",
    category: "berline",
    pricePerDay: 35,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    year: 2024,
    image: "/cars/clio5-auto.jpg",
    features: ["Climatisation auto", "GPS", "Bluetooth", "Écran tactile", "Boîte automatique"],
    available: true,
    popular: true,
    badge: "Automatique",
  },
  {
    id: 5,
    name: "Dacia Duster",
    brand: "Dacia",
    category: "SUV",
    pricePerDay: 42,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Diesel",
    year: 2024,
    image: "/cars/dacia-duster.jpg",
    features: ["Climatisation", "GPS", "4x4", "Bluetooth", "Caméra recul", "Tout-terrain"],
    available: true,
    popular: true,
    badge: "4x4",
  },
  {
    id: 6,
    name: "Volkswagen Touareg",
    brand: "Volkswagen",
    category: "luxe",
    pricePerDay: 110,
    seats: 5,
    transmission: "Automatique",
    fuel: "Diesel",
    year: 2023,
    image: "/cars/vw-touareg.jpg",
    features: ["Climatisation tri-zone", "GPS Premium", "Cuir Nappa", "Toit panoramique", "Caméra 360°", "Massage"],
    available: true,
    popular: true,
    badge: "Premium",
  },
  {
    id: 7,
    name: "Hyundai Tucson",
    brand: "Hyundai",
    category: "SUV",
    pricePerDay: 60,
    seats: 5,
    transmission: "Automatique",
    fuel: "Diesel",
    year: 2024,
    image: "/cars/hyundai-tucson.jpg",
    features: ["Climatisation bi-zone", "GPS", "Caméra recul", "Bluetooth", "Siège chauffant", "Aide au stationnement"],
    available: true,
    popular: true,
    badge: "SUV Familial",
  },
];

export const categories = ["Tous", "économique", "berline", "SUV", "luxe"] as const;
