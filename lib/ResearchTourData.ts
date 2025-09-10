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

export const ResearchTourData: Slide[] = [
  {
    image: "/study-field-trips/study-field-trips slide-1.png",
    badge: "Research Tour",
    title: "Academic Research ",
    subtitle: "Exchange",
    description:
      "Comprehensive support for researchers conducting cultural studies and fieldwork across Africa.",
    primaryLink: { href: "#tours", text: "Explore Research Areas" },
    secondaryLink: { href: "/contact", text: "Apply for Residency" },
  },
  {
    image: "/study-field-trips/study-field-trips slide-1.png",
       badge: "Research Tour",
    title: "Academic Research ",
    subtitle: "Exchange",
    description:
      "Comprehensive support for researchers conducting cultural studies and fieldwork across Africa.",
    primaryLink: { href: "#tours", text: "Explore Research Areas" },
    secondaryLink: { href: "/contact", text: "Apply for Residency" },
  },
];
