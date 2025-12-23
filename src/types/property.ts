// TypeScript types for Property data

export interface PropertyHost {
  name: string;
  avatar: string;
  is_superhost: boolean;
}

export type ListingType = 'rent' | 'sale' | 'both';

export type Amenity = 
  | 'wifi' 
  | 'pool' 
  | 'parking' 
  | 'air_conditioning' 
  | 'kitchen'
  | 'gym'
  | 'security'
  | 'garden'
  | 'breakfast'
  | 'beach_access'
  | 'restaurant'
  | 'river_view';

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price_per_night: number | null;
  sale_price: number | null;
  listing_type: ListingType;
  rating: number;
  review_count: number;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  max_guests: number;
  amenities: Amenity[];
  host: PropertyHost;
}
