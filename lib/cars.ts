export type Car = {
  id: number;
  name: string;
  brand: string;
  category: "économique" | "berline" | "SUV" | "luxe" | "utilitaire";
  pricePerDay: number;
  seats: number;
  transmission: "Manuelle" | "Automatique";
  fuel: "Essence" | "Diesel" | "Hybride";
  year: number;
  image: string;
  features: string[];
  available: boolean;
  popular?: boolean;
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
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    features: ["Climatisation", "Bluetooth", "USB", "Radio"],
    available: true,
    popular: true,
  },
  {
    id: 2,
    name: "Dacia Sandero",
    brand: "Dacia",
    category: "économique",
    pricePerDay: 220,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    year: 2023,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    features: ["Climatisation", "Bluetooth", "Airbags", "USB"],
    available: true,
    popular: true,
  },
  {
    id: 3,
    name: "Clio 5",
    brand: "Renault",
    category: "économique",
    pricePerDay: 280,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Essence",
    year: 2024,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    features: ["Climatisation", "GPS", "Bluetooth", "Écran tactile", "USB"],
    available: true,
    popular: true,
  },
  {
    id: 4,
    name: "Clio 5 Automatique",
    brand: "Renault",
    category: "berline",
    pricePerDay: 350,
    seats: 5,
    transmission: "Automatique",
    fuel: "Essence",
    year: 2024,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    features: ["Climatisation", "GPS", "Bluetooth", "Écran tactile", "Boîte auto"],
    available: true,
    popular: true,
  },
  {
    id: 5,
    name: "Dacia Duster",
    brand: "Dacia",
    category: "SUV",
    pricePerDay: 420,
    seats: 5,
    transmission: "Manuelle",
    fuel: "Diesel",
    year: 2023,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    features: ["Climatisation", "GPS", "4x4", "Bluetooth", "Caméra recul"],
    available: true,
    popular: true,
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
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
    features: ["Climatisation tri-zone", "GPS Premium", "Cuir", "Toit pano", "Caméra 360", "Massage"],
    available: true,
    popular: true,
  },
  {
    id: 7,
    name: "Hyundai Tucson",
    brand: "Hyundai",
    category: "SUV",
    pricePerDay: 550,
    seats: 5,
    transmission: "Automatique",
    fuel: "Diesel",
    year: 2024,
    image: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=80",
    features: ["Climatisation", "GPS", "Caméra recul", "Bluetooth", "Siège chauffant"],
    available: true,
    popular: true,
  },
];

export const categories = ["Tous", "économique", "berline", "SUV", "luxe"] as const;
