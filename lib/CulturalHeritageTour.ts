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

export const CulturalHeritageTourData: Slide[] = [
  {
    image: "/culture/culture-slider1.png",
    badge: "Cultural Heritage Tours",
    title: "Discover Living Heritage",
    subtitle: "Discover Ancient Traditions",
    description:
      "Journey through time with expert-guided tours to UNESCO World Heritage sites, traditional festivals, and cultural landmarks that preserve Africa's rich heritage.",
    primaryLink: { href: "#tours", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Book a Heritage Tour" },
  },
];
