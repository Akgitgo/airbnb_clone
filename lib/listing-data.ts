export interface Host {
  name: string;
  avatarUrl: string;
  isSuperhost: boolean;
  yearsHosting: number;
  rating: number;
  reviewsCount: number;
  responseRate: string;
  responseTime: string;
  bio: string;
  coHosts?: { name: string; avatarUrl: string }[];
}

export interface Amenity {
  id: string;
  category: 'Bathroom' | 'Bedroom and laundry' | 'Entertainment' | 'Heating and cooling' | 'Home safety' | 'Internet and office' | 'Kitchen and dining' | 'Location features' | 'Outdoor' | 'Services';
  name: string;
  description?: string;
  icon: string;
  available: boolean;
}

export interface Review {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
    location: string;
    yearsOnAirbnb: number;
  };
  rating: number;
  date: string;
  comment: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  caption: string;
  category: 'Living room' | 'Bedroom' | 'Kitchen' | 'Exterior' | 'Bathroom';
}

export interface ListingData {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  guestCount: number;
  bedroomCount: number;
  bedCount: number;
  bathroomCount: number;
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  host: Host;
  photos: PhotoItem[];
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  description: string[];
  sleepingArrangements: {
    roomName: string;
    bedType: string;
    bedIcon: string;
  }[];
  amenities: Amenity[];
  ratingsBreakdown: {
    cleanliness: number;
    accuracy: number;
    communication: number;
    location: number;
    checkIn: number;
    value: number;
  };
  reviews: Review[];
  houseRules: {
    checkIn: string;
    checkout: string;
    maxGuests: number;
    petsAllowed: boolean;
    smokingAllowed: boolean;
    additionalRules?: string[];
  };
}

export const mockListing: ListingData = {
  id: 'cabin-serenade-big-sur',
  title: 'Architectural Forest Villa with Panoramic Ocean Views',
  subtitle: 'Entire cabin in Big Sur, California, United States',
  location: 'Big Sur, California, United States',
  badge: 'Guest favorite',
  rating: 4.96,
  reviewCount: 148,
  guestCount: 6,
  bedroomCount: 3,
  bedCount: 4,
  bathroomCount: 2.5,
  pricePerNight: 580,
  cleaningFee: 160,
  serviceFee: 85,
  host: {
    name: 'Elena & Marcus',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
    isSuperhost: true,
    yearsHosting: 6,
    rating: 4.98,
    reviewsCount: 412,
    responseRate: '100%',
    responseTime: 'within an hour',
    bio: 'Architect and landscape designer duo loving the wild rugged coast of Big Sur. We designed this timber home to be an intimate sanctuary surrounded by ancient redwoods and ocean mist.',
  },
  highlights: [
    {
      icon: 'sparkles',
      title: 'Top 1% of homes on Airbnb',
      description: 'One of the most loved homes on Airbnb based on ratings, reviews, and reliability.',
    },
    {
      icon: 'door',
      title: 'Self check-in',
      description: 'Check yourself in with the smart lock keypad.',
    },
    {
      icon: 'medal',
      title: 'Elena & Marcus is a Superhost',
      description: 'Superhosts are experienced, highly rated Hosts who are committed to providing great stays.',
    },
    {
      icon: 'calendar',
      title: 'Free cancellation for 48 hours',
      description: 'Get a full refund if your travel plans change.',
    },
  ],
  photos: [
    {
      id: 'p1',
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
      alt: 'Exterior view of architectural timber villa nestled in forest',
      caption: 'Main lodge architecture framed by coastal redwoods at golden hour',
      category: 'Exterior',
    },
    {
      id: 'p2',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Spacious living room with floor-to-ceiling windows and fireplace',
      caption: 'Sunlit living room with Scandinavian oak furniture and stone fireplace',
      category: 'Living room',
    },
    {
      id: 'p3',
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern minimalist kitchen with marble island and wooden cabinetry',
      caption: 'Fully equipped chef kitchen with state-of-the-art induction and espresso station',
      category: 'Kitchen',
    },
    {
      id: 'p4',
      url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Master bedroom with king bed and panoramic view of redwood canopy',
      caption: 'Primary bedroom suite with plush organic linens and deck access',
      category: 'Bedroom',
    },
    {
      id: 'p5',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      alt: 'Luxury spa bathroom with soaking tub overlooking forest',
      caption: 'Spa bathroom featuring custom cedar soaking tub and rain shower',
      category: 'Bathroom',
    },
    {
      id: 'p6',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      alt: 'Panoramic outdoor cedar deck with fire pit and lounge seating',
      caption: 'Sunset cedar deck facing the Pacific coast horizon',
      category: 'Exterior',
    },
    {
      id: 'p7',
      url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cozy guest bedroom with queen bed and skylight',
      caption: 'Guest bedroom with forest canopy views and warm ambient lighting',
      category: 'Bedroom',
    },
    {
      id: 'p8',
      url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      alt: 'Dining area overlooking forest with custom walnut dining table',
      caption: 'Handcrafted ten-seat dining table for shared family dinners',
      category: 'Living room',
    },
  ],
  description: [
    'Welcome to The Redwood Sanctuary, an award-winning architectural retreat suspended quietly among towering hundred-year-old coastal redwoods in the heart of Big Sur.',
    'Designed by renowned sustainable architects, the residence merges indoor comfort with natural wilderness through dramatic 20-foot glass walls, salvaged Douglas fir timbers, and expansive cantilevered decks offering glimpses of the Pacific Ocean.',
    'Wake up to morning birdsong and mist floating through the canyon. Unwind with freshly ground pour-over coffee on the wraparound patio, take a scenic drive down to Pfeiffer Beach, or spend evenings gathered by the sculptural stone hearth with local Monterey wines.',
    'High-speed Starlink Wi-Fi ensures seamless remote work capability while feeling completely off-the-grid.',
  ],
  sleepingArrangements: [
    {
      roomName: 'Bedroom 1 (Master suite)',
      bedType: '1 king bed',
      bedIcon: 'bed-double',
    },
    {
      roomName: 'Bedroom 2 (Guest wing)',
      bedType: '1 queen bed',
      bedIcon: 'bed-double',
    },
    {
      roomName: 'Bedroom 3 (Garden room)',
      bedType: '2 single beds',
      bedIcon: 'bed-single',
    },
  ],
  amenities: [
    { id: 'wifi', category: 'Internet and office', name: 'Fast Starlink Wi-Fi (220 Mbps)', icon: 'wifi', available: true },
    { id: 'view', category: 'Location features', name: 'Ocean & mountain forest views', icon: 'mountain', available: true },
    { id: 'kitchen', category: 'Kitchen and dining', name: 'Chef kitchen with gourmet appliances', icon: 'utensils', available: true },
    { id: 'hottub', category: 'Outdoor', name: 'Private cedar hot tub', icon: 'bath', available: true },
    { id: 'fireplace', category: 'Heating and cooling', name: 'Indoor wood-burning stone fireplace', icon: 'flame', available: true },
    { id: 'workspace', category: 'Internet and office', name: 'Dedicated workspace with ergonomic chair', icon: 'laptop', available: true },
    { id: 'parking', category: 'Services', name: 'Free parking on premises (EV charger)', icon: 'car', available: true },
    { id: 'washer', category: 'Bedroom and laundry', name: 'In-unit washer & dryer', icon: 'shirt', available: true },
    { id: 'ac', category: 'Heating and cooling', name: 'Central air conditioning & heating', icon: 'snowflake', available: true },
    { id: 'security', category: 'Home safety', name: 'Exterior security cameras & smoke alarms', icon: 'shield', available: true },
    { id: 'bbq', category: 'Outdoor', name: 'Weber gas grill & outdoor dining set', icon: 'fire', available: true },
    { id: 'sound', category: 'Entertainment', name: 'Sonos sound system throughout villa', icon: 'music', available: true },
  ],
  ratingsBreakdown: {
    cleanliness: 4.97,
    accuracy: 4.98,
    communication: 5.0,
    location: 4.96,
    checkIn: 4.99,
    value: 4.88,
  },
  reviews: [
    {
      id: 'rev-1',
      author: {
        name: 'Sarah Jenkins',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80',
        location: 'San Francisco, California',
        yearsOnAirbnb: 8,
      },
      rating: 5,
      date: 'October 2026',
      comment: 'An absolute masterpiece of a property. The silence and morning mist through the redwoods were rejuvenating. Kitchen is exceptionally well stocked, and watching the sunset from the cedar tub is unforgettable. We will definitely be back!',
    },
    {
      id: 'rev-2',
      author: {
        name: 'David Chen',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80',
        location: 'Seattle, Washington',
        yearsOnAirbnb: 5,
      },
      rating: 5,
      date: 'September 2026',
      comment: 'Elena & Marcus were impeccable hosts. Check-in was effortless, communication was instantaneous, and every tiny architectural detail was thoughtfully curated. Starlink worked flawlessly for video calls.',
    },
    {
      id: 'rev-3',
      author: {
        name: 'Amara Okafor',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=128&h=128&q=80',
        location: 'London, United Kingdom',
        yearsOnAirbnb: 4,
      },
      rating: 5,
      date: 'August 2026',
      comment: 'Pictures cannot do this sanctuary justice. The tranquility is unreal. Falling asleep listening to the gentle ocean breeze in the trees was pure magic.',
    },
    {
      id: 'rev-4',
      author: {
        name: 'Liam Murphy',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80',
        location: 'Austin, Texas',
        yearsOnAirbnb: 6,
      },
      rating: 5,
      date: 'July 2026',
      comment: 'Hands down the highest quality Airbnb we have ever stayed at in North America. The beds are heavenly and the design aesthetic is museum quality.',
    },
  ],
  houseRules: {
    checkIn: '3:00 PM – 8:00 PM',
    checkout: '11:00 AM',
    maxGuests: 6,
    petsAllowed: false,
    smokingAllowed: false,
    additionalRules: [
      'Quiet hours begin at 10:00 PM to respect wildlife and neighboring preserves.',
      'No commercial photography or drone flights without prior written approval.',
      'Footwear-free inside the home to preserve original reclaimed timber flooring.',
    ],
  },
};
