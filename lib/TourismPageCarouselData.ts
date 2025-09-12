// TourismPageCarouselData.ts

export type LinkProps = {
  href: string;
  text: string;
};

export type Slide = {
  image: string;
  badge?: string;
  description?: string;
  primaryLink?: LinkProps;
  secondaryLink?: LinkProps;
  title: string;
  subtitle: string;
};


export const TourismPageCarouselData: Slide[] = [
  {
    image: "/tourism/tourism-slide-4.png",
    badge: "Tourism • Culture • Adventure",
    title: "Explore Nigeria’s Wonders",
    subtitle: "Journeys With ECC Nigeria",
    description:
      "Experience breathtaking landscapes, vibrant cities, and rich traditions with our curated tours.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/tourism/tourism-slide-2.png",
    badge: "Tourism • Culture • Adventure",
    title: "Unforgettable Adventures Await",
    subtitle: "Journeys With ECC Nigeria",
    description:
      "Join us for immersive travel experiences that connect you to local cultures and communities.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/tourism/tourism-slide-3.png",
    badge: "Tourism • Culture • Adventure",
    title: "Discover Hidden Gems",
    subtitle: "Journeys With ECC Nigeria",
    description:
      "Unlock unique destinations and stories that showcase Nigeria’s diverse heritage.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/tourism/tourism-slide-4.png",
    badge: "Tourism • Culture • Adventure", 
    title: "Adventure & Excitement",
    subtitle: "In Every Journey",
    description:
      "Embark on thrilling activities, from hiking to cultural festivals, designed for every explorer.",
    primaryLink: { href: "#programs", text: "Find Adventures" },
    secondaryLink: { href: "/contact", text: "Book Now" },
  },
  {
    image: "/tourism/tourism-slide-5.png",
    badge: "Tourism • Culture • Adventure", 
    title: "Travel That Empowers",
    subtitle: "That Gives Back",
    description:
      "Support local communities and artisans through responsible tourism and meaningful engagement.",
    primaryLink: { href: "#programs", text: "See Community Tours" },
    secondaryLink: { href: "/contact", text: "Support Locals" },
  },
  {
    image: "/tourism/tourism-slide-6.png",
    badge: "Tourism • Culture • Adventure", 
    title: "Savor Nigerian Cuisine",
    subtitle: "Nigeria’s Flavors",
    description:
      "Taste authentic dishes and join culinary journeys that celebrate Nigeria’s food culture.",
    primaryLink: { href: "#programs", text: "Food Experiences" },
    secondaryLink: { href: "/contact", text: "Join a Tour" },
  },
  {
    image: "/tourism/tourism-slide-9.png",
    badge: "Tourism • Culture • Adventure", 
    title: "Youthful Exploration",
    subtitle: "Through Exploration",
    description:
      "Empowering youth to discover new places, cultures, and opportunities for growth.",
    primaryLink: { href: "#programs", text: "Youth Travel" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
  {
    image: "/tourism/tourism-slide-8.png",
    badge: "Tourism • Culture • Adventure", 
    title: "Celebrate Heritage",
    subtitle: "Cultural Vibrance",
    description:
      "Experience vibrant festivals and events that highlight Nigeria’s creative spirit.",
    primaryLink: { href: "#programs", text: "View Events" },
    secondaryLink: { href: "/contact", text: "Attend With Us" },
  },
  {
    image: "/tourism/tourism-slide-9.png",
    badge: "Tourism • Culture • Adventure",
    title: "Bridging Continents",
    subtitle: "Africa & Europe",
    description:
      "Connect with global partners for cross-cultural travel and shared experiences.",
    primaryLink: { href: "#programs", text: "Explore Partnerships" },
    secondaryLink: { href: "/contact", text: "Collaborate" },
  },
]
