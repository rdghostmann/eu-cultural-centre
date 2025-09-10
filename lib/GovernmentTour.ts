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
      " Protocol and cultural support for delegations, missions, and official visits to foster international cooperation",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Tour" },
  },
  {
    image: "/government-delegation/government-delegation-slide3.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Protocol and cultural support for delegations, missions, and official visits to foster international cooperation",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Tour" },
  },
  {
    image: "/government-delegation/government-delegation-slide1.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Protocol and cultural support for delegations, missions, and official visits to foster international cooperation",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Tour" },
  },
  {
    image: "/government-delegation/government-delegation-slide8.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Protocol and cultural support for delegations, missions, and official visits to foster international cooperation",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Tour" },
  },
  {
    image: "/government-delegation/government-delegation-slide16.png",
    badge: "Government Tours",
    title: "Cultural Diplomacy",
    subtitle: "Official Delegations",
    description:
      " Protocol and cultural support for delegations, missions, and official visits to foster international cooperation",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Tour" },
  },
];
