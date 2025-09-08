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

export const SportsTourData: Slide[] = [
  {
    image: "/sports/sports-slide-1.png",
    badge: "Sport Tours & Tournaments",
    title: "Sport Excellence &",
    subtitle: "Cultural Exchange",
    description:
      "Elite sports programs combining athletic development with cultural exchange, bringing together teams and athletes from Europe and Africa for competition, training, and friendship.",
    primaryLink: { href: "/programs", text: "View Programs" },
    secondaryLink: { href: "/contact", text: "Register a Team" },
  },
  {
    image: "/sports/sports-slide-1.png",
    badge: "Sport Tours & Tournaments",
     title: "Sport Excellence &",
    subtitle: "Cultural Exchange",
    description:
      "Elite sports programs combining athletic development with cultural exchange, bringing together teams and athletes from Europe and Africa for competition, training, and friendship.",
   primaryLink: { href: "/programs", text: "View Programs" },
    secondaryLink: { href: "/contact", text: "Register a Team" },
  },
  {
    image: "/sports/sports-slide-3.png",
    badge: "Sport Tours & Tournaments",
     title: "Sport Excellence &",
    subtitle: "Cultural Exchange",
     description:
      "Elite sports programs combining athletic development with cultural exchange, bringing together teams and athletes from Europe and Africa for competition, training, and friendship.",
    primaryLink: { href: "/programs", text: "View Programs" },
    secondaryLink: { href: "/contact", text: "Register a Team" },
  },
];
