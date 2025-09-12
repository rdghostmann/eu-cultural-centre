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
    badge: "Relief & Aid",
    title: "Supporting Communities,",
    subtitle: "In Crisis",
    description:
      "Providing emergency relief and humanitarian aid to vulnerable communities affected by conflict, natural disasters, and displacement.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
  {
    image: "/humanitarian/humanitarian-slide12.png",
    badge: "Health & Nutrition",
    title: "Saving Lives,",
    subtitle: "Through Care",
    description:
      "Delivering health services, nutrition programs, and medical support to ensure the well-being of at-risk populations worldwide.",
    primaryLink: { href: "#programs", text: "Learn More" },
    secondaryLink: { href: "/contact", text: "Volunteer Today" },
  },
  {
    image: "/humanitarian/humanitarian-slide13.png",
    badge: "Education & Protection",
    title: "Education,",
    subtitle: "In Emergencies",
    description:
      "Ensuring children and young people in crisis have access to safe learning environments, protection, and hope for the future.",
    primaryLink: { href: "#programs", text: "See Initiatives" },
    secondaryLink: { href: "/contact", text: "Donate Now" },
  },
  {
    image: "/humanitarian/humanitarian-slide10.png",
    badge: "Sustainable Recovery",
    title: "From Relief,",
    subtitle: "To Resilience",
    description:
      "Building long-term resilience by supporting livelihoods, community rebuilding, and sustainable recovery programs.",
    primaryLink: { href: "#programs", text: "Discover More" },
    secondaryLink: { href: "/contact", text: "Partner With Us" },
  },
];
