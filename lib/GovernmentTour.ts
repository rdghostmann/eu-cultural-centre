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

export const GovernmentTourData: Slide[] = [
  {
    image: "/government-delegation/government-delegation-slide12.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Professional protocol support and cultural programming for government delegations, diplomatic missions, and high-level official visits promoting international cooperation.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
  {
    image: "/government-delegation/government-delegation-slide3.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Professional protocol support and cultural programming for government delegations, diplomatic missions, and high-level official visits promoting international cooperation.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
  {
    image: "/government-delegation/government-delegation-slide1.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Professional protocol support and cultural programming for government delegations, diplomatic missions, and high-level official visits promoting international cooperation.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
  {
    image: "/government-delegation/government-delegation-slide8.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Professional protocol support and cultural programming for government delegations, diplomatic missions, and high-level official visits promoting international cooperation.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
  {
    image: "/government-delegation/government-delegation-slide16.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Professional protocol support and cultural programming for government delegations, diplomatic missions, and high-level official visits promoting international cooperation.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
];
