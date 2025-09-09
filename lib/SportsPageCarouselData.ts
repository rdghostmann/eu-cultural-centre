// SportPageCarouselData.ts

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

export const SportPageCarouselData: Slide[] = [
  {
    image: "/sports/sports-slide-1.png",
    badge: "Sports, Tourism & Events",
    title: "Sports as a Bridge,",
    subtitle: "Between Cultures",
    description:
      "Using sports and travel as powerful tools for education, cultural exchange, and building lasting connections across Europe and Africa.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join an Event" },
  },
  {
    image: "/sports/sports-slide-2.png",
   badge: "Sports, Tourism & Events",
    title: "Sports as a Bridge,",
    subtitle: "Between Cultures",
    description:
      "Using sports and travel as powerful tools for education, cultural exchange, and building lasting connections across Europe and Africa.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join an Event" },
  },
  {
    image: "/sports/sports-slide-3.png",
    badge: "Cultural Exchange",
    title: "Travel,",
    subtitle: "With Purpose",
    description:
      "Sports tourism initiatives that bring communities together through shared cultural and athletic experiences.",
    primaryLink: { href: "#programs", text: "View Tours" },
    secondaryLink: { href: "/contact", text: "Join Now" },
  },
  ];
