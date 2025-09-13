// EventsPageCarouselData.ts

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

export const EventsPageCarouselData: Slide[] = [
  {
    image: "/events/event2.png",
    badge: "Events",
    title: "Celebrate Culture",
    subtitle: "Embrace Diversity",
    description:
      "Join vibrant festivals that showcase arts, heritage, and traditions from Africa and Europe.",
    primaryLink: { href: "#programs", text: "Join a Festival" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/events/event11.png",
    badge: "Events",
    title: "Learn Together",
    subtitle: "Grow Together",
    description:
      "Interactive workshops designed to share knowledge, skills, and intercultural understanding.",
    primaryLink: { href: "#programs", text: "Attend a Workshop" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/events/event4.png",
    badge: "Events",
    title: "Play Fair",
    subtitle: "Build Unity",
    description:
      "Sports tournaments and games that promote friendship, health, and cross-cultural exchange.",
    primaryLink: { href: "#programs", text: "Join a Tournament" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/events/event5.png",
    badge: "Events",
    title: "Dialogue,",
    subtitle: "For Cooperation",
    description:
      "International forums where leaders, citizens, and organizations engage in constructive dialogue.",
    primaryLink: { href: "#programs", text: "Join a Forum" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
 
  {
    image: "/events/event7.png",
    badge: "Events",
    title: "Visual Arts,",
    subtitle: "Without Borders",
    description:
      "Exhibitions that highlight creativity and foster cultural appreciation between nations.",
    primaryLink: { href: "#programs", text: "Visit Exhibition" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },

  {
    image: "/events/event9.png",
    badge: "Events",
    title: "Stronger Together",
    subtitle: "Through Community",
    description:
      "Local and regional gatherings that build lasting connections across cultures.",
    primaryLink: { href: "#programs", text: "Join a Gathering" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/events/event10.png",
    badge: "Events",
    title: "One World",
    subtitle: "Shared Future",
    description:
      "Uniting people worldwide through cultural events and cross-border collaborations.",
    primaryLink: { href: "#programs", text: "Connect With Us" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
];
