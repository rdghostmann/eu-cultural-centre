// HumanitarianPageCarouselData.ts

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
export const HumanitarianPageCarouselData: Slide[] = [
  {
    image: "/humanitarian/humanitarian-slide1.png",
    badge: "Humanitarian",
    title: "Relief & Aid",
    subtitle: "In Crisis",
    description:
      "Emergency relief and aid for vulnerable communities worldwide.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
  {
    image: "/humanitarian/humanitarian-slide12.png",
    badge: "Humanitarian",
    title: "Health & Nutrition",
    subtitle: "Through Care",
    description:
      "Delivering health services, nutrition programs, and medical support.",
    primaryLink: { href: "#programs", text: "Learn More" },
    secondaryLink: { href: "/contact", text: "Volunteer Today" },
  },
  {
    image: "/humanitarian/humanitarian-slide13.png",
    badge: "Humanitarian",
    title: "Education & Protection",
    subtitle: "In Emergencies",
    description:
      "Safe learning and protection for children in crisis.",
    primaryLink: { href: "#programs", text: "See Initiatives" },
    secondaryLink: { href: "/contact", text: "Donate Now" },
  },
  {
    image: "/humanitarian/humanitarian-slide10.png",
    badge: "Humanitarian",
    title: "Sustainable Recovery",
    subtitle: "To Resilience",
    description:
      "Supporting livelihoods and sustainable community recovery programs.",
    primaryLink: { href: "#programs", text: "Discover More" },
    secondaryLink: { href: "/contact", text: "Partner With Us" },
  },
];