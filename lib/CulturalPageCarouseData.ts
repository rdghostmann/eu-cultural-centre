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
    image: "/images/culture1.jpg",
    badge: "Culture, Arts & Heritage",
    title: "Celebrate Arts,",
    subtitle: "Inspire Communities",
    description:
      "Showcasing diverse artistic expressions from Europe and Africa to foster unity.",
    primaryLink: { href: "/contact", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join Our Community" },
  },
  {
    image: "/images/culture2.jpg",
    badge: "Performing Arts",
    title: "Dance, Music,",
    subtitle: "Shared Across Borders",
    description:
      "Promoting cultural performances that connect traditions and inspire creativity.",
    primaryLink: { href: "/contact", text: "Discover Performances" },
    secondaryLink: { href: "/contact", text: "Join the Celebration" },
  },
  {
    image: "/images/culture3.jpg",
    badge: "Visual Storytelling",
    title: "Art as,",
    subtitle: "A Universal Language",
    description:
      "Encouraging visual arts to communicate shared experiences and inspire dialogue.",
    primaryLink: { href: "/contact", text: "Explore Exhibitions" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/culture4.jpg",
    badge: "Cultural Exchange",
    title: "Connecting Heritage,",
    subtitle: "Across Generations",
    description:
      "Bringing together people to exchange traditions, values, and cultural heritage.",
    primaryLink: { href: "/contact", text: "Join Exchanges" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/culture5.jpg",
    badge: "Preserving Heritage",
    title: "Safeguard Traditions,",
    subtitle: "Empower Communities",
    description:
      "Working to protect cultural heritage for future generations worldwide.",
    primaryLink: { href: "/contact", text: "Support Heritage" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/culture6.jpg",
    badge: "Creative Innovation",
    title: "Blend Tradition,",
    subtitle: "With Modern Expression",
    description:
      "Fusing innovation with traditional art forms to keep cultures alive and evolving.",
    primaryLink: { href: "/contact", text: "Support Innovation" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/culture7.jpg",
    badge: "Global Festivals",
    title: "Celebrate Together,",
    subtitle: "Across Borders",
    description:
      "Hosting festivals that unite artists, performers, and audiences from around the world.",
    primaryLink: { href: "/contact", text: "Join a Festival" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/culture8.jpg",
    badge: "Education & Culture",
    title: "Learn Through,",
    subtitle: "Arts and Heritage",
    description:
      "Using cultural programs as powerful tools for education and empowerment.",
    primaryLink: { href: "/contact", text: "Support Education" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/culture9.jpg",
    badge: "Youth & Creativity",
    title: "Empower Youth,",
    subtitle: "Through Expression",
    description:
      "Encouraging young people to explore identity through arts and creativity.",
    primaryLink: { href: "/contact", text: "Support Youth" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/culture10.jpg",
    badge: "Global Connections",
    title: "Cultural Diversity,",
    subtitle: "Shared Humanity",
    description:
      "Promoting cultural diversity as a foundation for unity, peace, and collaboration.",
    primaryLink: { href: "/contact", text: "Connect With Us" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
];
