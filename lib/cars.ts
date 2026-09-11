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
    pricePerDay: 200,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    year: 2023,
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=900&q=85",
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
    pricePerDay: 230,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    year: 2023,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=85",
    features: ["Climatisation", "Bluetooth", "Airbags", "USB"],
    available: true,
    popular: true,
  },
  {
    id: 3,
    name: "Renault Clio 5",
    brand: "Renault",
    category: "économique",
    pricePerDay: 290,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    year: 2024,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=900&q=85",
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
    pricePerDay: 360,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    year: 2024,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=85",
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
    pricePerDay: 430,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Diesel",
    year: 2023,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=85",
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
    pricePerDay: 1200,
    seats: 5,
    transmission: "Automatique",
    fuel: "Diesel",
    year: 2023,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=900&q=85",
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
    pricePerDay: 560,
    seats: 5,
    transmission: "Automatique",
    fuel: "Diesel",
    year: 2024,
    image: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=900&q=85",
    features: ["Climatisation bi-zone", "GPS", "Caméra recul", "Bluetooth", "Siège chauffant", "Aide au stationnement"],
    available: true,
    popular: true,
    badge: "SUV Familial",
  },
];

export const categories = ["Tous", "économique", "berline", "SUV", "luxe"] as const;
