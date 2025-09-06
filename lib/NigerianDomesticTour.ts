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
    image: "/culture/culture-slider1.png",
    badge: "Nigeria Domestic Tourism",
    title: "Explore Nigeria’s Hidden Gems & ",
    subtitle: "Cultural Wonders",
    description:
      "From mountain resorts to desert safaris, discover Nigeria’s breathtaking landscapes and cultural festivals in 2026.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
];
