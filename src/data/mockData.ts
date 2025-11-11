import { Destination, Attraction, Accommodation } from "@/types";

export const mockDestinations: Destination[] = [
  {
    id: "1",
    name: "Tokyo",
    country: "Japan",
    description: "A vibrant metropolis blending ultramodern and traditional, from neon-lit skyscrapers to historic temples.",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    rating: 4.8,
    tags: ["Culture", "Food", "Shopping", "Technology"],
    averageCost: 150,
    bestTimeToVisit: "March-May, September-November"
  },
  {
    id: "2",
    name: "Paris",
    country: "France",
    description: "The City of Light, renowned for art, fashion, gastronomy, and iconic landmarks like the Eiffel Tower.",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    rating: 4.7,
    tags: ["Art", "Romance", "History", "Food"],
    averageCost: 180,
    bestTimeToVisit: "April-June, September-October"
  },
  {
    id: "3",
    name: "Bali",
    country: "Indonesia",
    description: "A tropical paradise with stunning beaches, terraced rice paddies, and ancient temples.",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.6,
    tags: ["Beach", "Nature", "Wellness", "Adventure"],
    averageCost: 80,
    bestTimeToVisit: "April-October"
  },
  {
    id: "4",
    name: "New York",
    country: "USA",
    description: "The city that never sleeps, offering world-class museums, theaters, restaurants, and iconic landmarks.",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    rating: 4.7,
    tags: ["Urban", "Culture", "Entertainment", "Shopping"],
    averageCost: 200,
    bestTimeToVisit: "April-June, September-November"
  },
  {
    id: "5",
    name: "Santorini",
    country: "Greece",
    description: "Stunning sunsets, white-washed buildings, and crystal-clear waters make this island unforgettable.",
    imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    rating: 4.9,
    tags: ["Beach", "Romance", "Relaxation", "Photography"],
    averageCost: 140,
    bestTimeToVisit: "April-November"
  },
  {
    id: "6",
    name: "Dubai",
    country: "UAE",
    description: "A futuristic city of superlatives, from the world's tallest building to luxury shopping and beaches.",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    rating: 4.5,
    tags: ["Luxury", "Shopping", "Modern", "Desert"],
    averageCost: 170,
    bestTimeToVisit: "November-March"
  }
];

export const mockAttractions: Attraction[] = [
  {
    id: "a1",
    name: "Senso-ji Temple",
    destinationId: "1",
    description: "Tokyo's oldest and most significant Buddhist temple",
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=80",
    category: "Culture",
    duration: "2 hours",
    cost: 0,
    rating: 4.7
  },
  {
    id: "a2",
    name: "Tokyo Skytree",
    destinationId: "1",
    description: "Tallest structure in Japan with panoramic city views",
    imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=400&q=80",
    category: "Landmark",
    duration: "2-3 hours",
    cost: 25,
    rating: 4.6
  },
  {
    id: "a3",
    name: "Eiffel Tower",
    destinationId: "2",
    description: "Iconic iron lattice tower and symbol of Paris",
    imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&q=80",
    category: "Landmark",
    duration: "2-3 hours",
    cost: 30,
    rating: 4.8
  },
  {
    id: "a4",
    name: "Louvre Museum",
    destinationId: "2",
    description: "World's largest art museum and home to the Mona Lisa",
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80",
    category: "Museum",
    duration: "3-4 hours",
    cost: 20,
    rating: 4.9
  }
];

export const mockAccommodations: Accommodation[] = [
  {
    id: "h1",
    name: "Tokyo Grand Hotel",
    destinationId: "1",
    type: "Hotel",
    pricePerNight: 120,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
  },
  {
    id: "h2",
    name: "Shibuya Modern Apartment",
    destinationId: "1",
    type: "Apartment",
    pricePerNight: 90,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80"
  },
  {
    id: "h3",
    name: "Paris Luxury Suite",
    destinationId: "2",
    type: "Hotel",
    pricePerNight: 200,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80"
  }
];
