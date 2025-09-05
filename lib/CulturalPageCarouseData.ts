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

export const CulturalPageCarouselData: Slide[] = [
  {
    image: "/culture/culture-slider1.png",
    badge: "Culture, Arts & Heritage",
    title: "Celebrate Arts,",
    subtitle: "Inspire Communities",
    description:
      "Showcasing diverse artistic expressions from Europe and Africa to foster unity.",
    primaryLink: { href: "/contact", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join Our Community" },
  },
  {
    image: "/culture/culture-slider18.png",
    badge: "Performing Arts",
    title: "Dance, Music,",
    subtitle: "Shared Across Borders",
    description:
      "Promoting cultural performances that connect traditions and inspire creativity.",
    primaryLink: { href: "/contact", text: "Discover Performances" },
    secondaryLink: { href: "/contact", text: "Join the Celebration" },
  },
  {
    image: "/culture/culture-slider17.png",
    badge: "Visual Storytelling",
    title: "Art as,",
    subtitle: "A Universal Language",
    description:
      "Encouraging visual arts to communicate shared experiences and inspire dialogue.",
    primaryLink: { href: "/contact", text: "Explore Exhibitions" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/culture/culture-slider3.png",
    badge: "Cultural Exchange",
    title: "Connecting Heritage,",
    subtitle: "Across Generations",
    description:
      "Bringing together people to exchange traditions, values, and cultural heritage.",
    primaryLink: { href: "/contact", text: "Join Exchanges" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/culture/culture-slider5.png",
    badge: "Preserving Heritage",
    title: "Safeguard Traditions,",
    subtitle: "Empower Communities",
    description:
      "Working to protect cultural heritage for future generations worldwide.",
    primaryLink: { href: "/contact", text: "Support Heritage" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/culture/culture-slider6.png",
    badge: "Creative Innovation",
    title: "Blend Tradition,",
    subtitle: "With Modern Expression",
    description:
      "Fusing innovation with traditional art forms to keep cultures alive and evolving.",
    primaryLink: { href: "/contact", text: "Support Innovation" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/culture/culture-slider17.png",
    badge: "Global Festivals",
    title: "Celebrate Together,",
    subtitle: "Across Borders",
    description:
      "Hosting festivals that unite artists, performers, and audiences from around the world.",
    primaryLink: { href: "/contact", text: "Join a Festival" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/culture/culture-slider19.png",
    badge: "Education & Culture",
    title: "Learn Through,",
    subtitle: "Arts and Heritage",
    description:
      "Using cultural programs as powerful tools for education and empowerment.",
    primaryLink: { href: "/contact", text: "Support Education" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/culture/culture-slider41.png",
    badge: "Youth & Creativity",
    title: "Empower Youth,",
    subtitle: "Through Expression",
    description:
      "Encouraging young people to explore identity through arts and creativity.",
    primaryLink: { href: "/contact", text: "Support Youth" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/culture/culture-slider39.png",
    badge: "Global Connections",
    title: "Cultural Diversity,",
    subtitle: "Shared Humanity",
    description:
      "Promoting cultural diversity as a foundation for unity, peace, and collaboration.",
    primaryLink: { href: "/contact", text: "Connect With Us" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
];
