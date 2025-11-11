export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  tags: string[];
  averageCost: number;
  bestTimeToVisit: string;
}

export interface Attraction {
  id: string;
  name: string;
  destinationId: string;
  description: string;
  imageUrl: string;
  category: string;
  duration: string;
  cost: number;
  rating: number;
}

export interface Accommodation {
  id: string;
  name: string;
  destinationId: string;
  type: string;
  pricePerNight: number;
  rating: number;
  imageUrl: string;
}

export interface ItineraryItem {
  id: string;
  day: number;
  attractionId: string;
  startTime: string;
  notes?: string;
}

export interface Itinerary {
  id: string;
  userId: string;
  destinationId: string;
  title: string;
  startDate: string;
  endDate: string;
  items: ItineraryItem[];
  totalBudget: number;
  createdAt: string;
}

export interface UserPreferences {
  interests: string[];
  budgetRange: [number, number];
  travelStyle: string;
  preferredActivities: string[];
}
