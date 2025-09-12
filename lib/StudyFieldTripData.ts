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

export const StudyFieldTripData: Slide[] = [
  {
    image: "/study-field-trips/study-field-trip1.png",
    badge: "Study Field Trip",
    title: "Hands-On Learning",
    subtitle: "Explore Real-World Sites",
    description:
      "Students gain practical knowledge by visiting historical, scientific, and cultural locations.",
    primaryLink: { href: "#programs", text: "See Field Trips" },
    secondaryLink: { href: "/contact", text: "Book a Trip" },
  },
  {
    image: "/study-field-trips/study-field-trip2.png",
    badge: "Study Field Trip",
    title: "Interactive Experiences",
    subtitle: "Engage & Discover",
    description:
      "Field trips designed to spark curiosity and deepen understanding through interactive activities.",
    primaryLink: { href: "#programs", text: "Explore Experiences" },
    secondaryLink: { href: "/contact", text: "Join Now" },
  },
  {
    image: "/study-field-trips/study-field-trip3.png",
    badge: "Study Field Trip",
    title: "Environmental Awareness",
    subtitle: "Nature & Conservation",
    description:
      "Trips focused on environmental education, conservation, and sustainability practices.",
    primaryLink: { href: "#programs", text: "View Nature Trips" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
  {
    image: "/study-field-trips/study-field-trip4.png",
    badge: "Study Field Trip",
    title: "Cultural Exploration",
    subtitle: "Heritage & Traditions",
    description:
      "Discover local heritage, arts, and traditions through immersive field visits.",
    primaryLink: { href: "#programs", text: "See Cultural Trips" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
];