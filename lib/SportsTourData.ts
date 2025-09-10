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
  title: "Sports Without Borders",
    subtitle: "",
    description:
      "Uniting European and African athletes through competition and training",
    primaryLink: { href: "#programs", text: "View Programs" },
    secondaryLink: { href: "/contact", text: "Register a Team" },
  },
  {
    image: "/sports/sports-slide-1.png",
    badge: "Sport Tours & Tournaments",
  title: "Sports Without Borders",
    subtitle: "",
    description:
      "Uniting European and African athletes through competition and training",
    primaryLink: { href: "#programs", text: "View Programs" },
    secondaryLink: { href: "/contact", text: "Register a Team" },
  },
  {
    image: "/sports/sports-slide-3.png",
    badge: "Sport Tours & Tournaments",
  title: "Sports Without Borders",
    subtitle: "",
    description:
      "Uniting European and African athletes through competition and training",
    primaryLink: { href: "#programs", text: "View Programs" },
    secondaryLink: { href: "/contact", text: "Register a Team" },
  },
];
