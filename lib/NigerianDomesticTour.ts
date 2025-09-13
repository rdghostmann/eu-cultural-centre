// CulturalCarouselData.ts

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

export const NigerianDomesticTourData: Slide[] = [
  {
    image: "/nigerian-domestic-tour/slider.png",
    badge: "Nigeria Domestic Tourism",
    title: "Discover Nigeria’s Natural Beauty",
    subtitle: "Cultural Wonders",
    description:
      "Experience mountains, deserts, and vibrant festivals across Nigeria’s diverse landscapes.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
  {
    image: "/nigerian-domestic-tour/slider5.png",
    badge: "Nigeria Domestic Tourism",
    title: "Uncover Hidden Destinations",
    subtitle: "Cultural Wonders",
    description:
      "Journey to lesser-known sites and enjoy authentic Nigerian hospitality and culture.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
  {
    image: "/nigerian-domestic-tour/slider3.png",
    badge: "Nigeria Domestic Tourism",
    title: "Celebrate Local Festivals",
    subtitle: "Cultural Wonders",
    description:
      "Join colorful festivals and events that showcase Nigeria’s rich traditions and heritage.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
  {
    image: "/nigerian-domestic-tour/slider4.png",
    badge: "Nigeria Domestic Tourism",
    title: "Adventure Awaits",
    subtitle: "Cultural Wonders",
    description:
      "Embark on exciting safaris, nature walks, and cultural tours throughout Nigeria.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
  {
    image: "/nigerian-domestic-tour/slider1.png",
    badge: "Nigeria Domestic Tourism",
    title: "Experience Heritage Sites",
    subtitle: "Cultural Wonders",
    description:
      "Visit historic landmarks and cultural centers that tell Nigeria’s unique story.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
];
