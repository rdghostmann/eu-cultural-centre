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
    image: "/tourism/tourism-slide-1.png",
    badge: "Tourism • Culture • Adventure",
    title: "Discover Unique,",
    subtitle: "Journeys With ECC Nigeria",
    description:
      "Promoting sustainable travel, cultural exchange, and memorable experiences across Nigeria and beyond.",
    primaryLink: { href: "/contact", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/tourism/tourism-slide-2.png",
    badge: "Eco-Tourism",
    title: "Sustainable Travel,",
    subtitle: "That Preserves Nature",
    description:
      "Encouraging eco-friendly practices while exploring Nigeria’s breathtaking landscapes and wildlife.",
    primaryLink: { href: "/#programs", text: "Explore Eco-Tours" },
    secondaryLink: { href: "/contact", text: "Join Us" },
  },
  {
    image: "/tourism/tourism-slide-3.png",
    badge: "Cultural Heritage",
    title: "Experience,",
    subtitle: "Nigeria’s Rich History",
    description:
      "Showcasing ancient traditions, local festivals, and cultural heritage sites that connect the past with the present.",
    primaryLink: { href: "/#programs", text: "View Heritage Tours" },
    secondaryLink: { href: "/contact", text: "Start Your Journey" },
  },
  {
    image: "/tourism/tourism-slide-4.png",
    badge: "Adventure Travel",
    title: "Thrill,",
    subtitle: "In Every Journey",
    description:
      "From hiking trails to adrenaline-filled adventures, discover experiences that inspire exploration and resilience.",
    primaryLink: { href: "/#programs", text: "Find Adventures" },
    secondaryLink: { href: "/contact", text: "Book Now" },
  },
  {
    image: "/tourism/tourism-slide-5.png",
    badge: "Community Tourism",
    title: "Travel,",
    subtitle: "That Gives Back",
    description:
      "Empowering local communities through tourism that creates jobs, supports artisans, and shares authentic stories.",
    primaryLink: { href: "/#programs", text: "See Community Tours" },
    secondaryLink: { href: "/contact", text: "Support Locals" },
  },
  {
    image: "/tourism/tourism-slide-6.png",
    badge: "Culinary Tourism",
    title: "Taste,",
    subtitle: "Nigeria’s Flavors",
    description:
      "Discover authentic Nigerian cuisine through culinary tours, food festivals, and local dining experiences.",
    primaryLink: { href: "/#programs", text: "Food Experiences" },
    secondaryLink: { href: "/contact", text: "Join a Tour" },
  },
  {
    image: "/tourism/tourism-slide-7.png",
    badge: "Youth & Travel",
    title: "Inspiring Youth,",
    subtitle: "Through Exploration",
    description:
      "Providing opportunities for young people to explore new cultures, broaden horizons, and build networks.",
    primaryLink: { href: "/#programs", text: "Youth Travel" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
  // {
  //   image: "/tourism/tourism-slide-8.png",
  //   badge: "Festivals & Events",
  //   title: "Celebrate,",
  //   subtitle: "Cultural Vibrance",
  //   description:
  //     "Promoting local and international cultural festivals that highlight Nigeria’s diverse heritage and creativity.",
  //   primaryLink: { href: "/#programs", text: "View Events" },
  //   secondaryLink: { href: "/contact", text: "Attend With Us" },
  // },
  // {
  //   image: "/tourism/tourism-slide-9.png",
  //   badge: "Cross-Border Travel",
  //   title: "Connecting,",
  //   subtitle: "Africa & Europe",
  //   description:
  //     "Building tourism partnerships that create meaningful cross-border cultural and travel experiences.",
  //   primaryLink: { href: "/#programs", text: "Explore Partnerships" },
  //   secondaryLink: { href: "/contact", text: "Collaborate" },
  // },
  // {
  //   image: "/tourism/tourism-slide-10.png",
  //   badge: "Global Tourism Cooperation",
  //   title: "Travel,",
  //   subtitle: "Without Borders",
  //   description:
  //     "Promoting international cooperation in tourism to strengthen cultural diplomacy and global understanding.",
  //   primaryLink: { href: "/#programs", text: "Join Journeys" },
  //   secondaryLink: { href: "/contact", text: "Partner With Us"},
  // }
]
