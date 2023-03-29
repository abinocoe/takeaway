export interface Article {
  id: number;
  title: string;
  description: string;
  donation_description: string;
  collection: {
    id: number;
  };
  section: string;
  location: Location;
  collection_notes: string;
  value: Value
  created_at: string
  updated_at: string;
  status: string;
  expiry: string;
  reactions: Reactions;
  is_owner: boolean;
  conversations: Conversations;
  photos: Image[];
  images: Image[];
  user: User;
  first: boolean;
  last_listed: string;
  pickups: {
      multiple: boolean;
      users: User[];
      items: number;
  },
  veteran_delay: number
}

interface Location {
  latitude: number;
  longitude: number;
  distance: number;
  town: string;
  country: string;
}

interface Value {
  price: number;
  currency: string;
  payment_type: string;
}

interface Reactions {
  likes: number;
  by_user: boolean;
  views: number;
  impressions: number;
}

interface Conversations {
  linked: number;
  request_id: number | null;
}

interface Image {
    uid: string;
    files: {
        original: string;
        large: string;
        medium: string;
        small: string;
    },
    dimensions: {
        width: number,
        height: number
    }
}

interface User {
  id: number
  first_name: string
  current_avatar: {
      original: string;
      large: string;
      small: string;
  },
  roles: Role[];
  location: {
      latitude: number;
      longitude: number;
  };
  rating: {
      rating: number;
      number: 15;
  };
  verifications: Verification[]
}

interface Verification {
  method: string;
}

type Role = 'Consumer' | 'Food Waste Hero' | 'Volunteer' | 'Administrator' 