// ExhibitionPageCarouselData.ts

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

export const ExhibitionPageCarouselData: Slide[] = [
  {
    image: "/images/exhibition1.jpg",
    badge: "Art & Exhibitions",
    title: "Celebrate Creativity,",
    subtitle: "Across Borders",
    description:
      "Explore international exhibitions that showcase the richness of African and European cultures.",
    primaryLink: { href: "/contact", text: "Visit Exhibition" },
    secondaryLink: { href: "/contact", text: "Host an Exhibition" },
  },
  {
    image: "/images/exhibition2.jpg",
    badge: "Visual Arts",
    title: "Masterpieces,",
    subtitle: "On Display",
    description:
      "From traditional to contemporary, discover inspiring visual art from emerging and renowned artists.",
    primaryLink: { href: "/contact", text: "Explore Visual Arts" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/exhibition3.jpg",
    badge: "Cultural Heritage",
    title: "Preserving History,",
    subtitle: "For Tomorrow",
    description:
      "Exhibitions that highlight cultural artifacts and heritage, preserving them for future generations.",
    primaryLink: { href: "/contact", text: "See Heritage" },
    secondaryLink: { href: "/contact", text: "Support Preservation" },
  },
  {
    image: "/images/exhibition4.jpg",
    badge: "Photography",
    title: "Through the Lens,",
    subtitle: "Stories Untold",
    description:
      "Photography exhibitions that capture powerful moments of cultural and social life.",
    primaryLink: { href: "/contact", text: "View Gallery" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/exhibition5.jpg",
    badge: "Sculpture & Installations",
    title: "Art in Form,",
    subtitle: "And Space",
    description:
      "Explore innovative sculptures and installations that redefine spaces and perspectives.",
    primaryLink: { href: "/contact", text: "Discover Sculptures" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/exhibition6.jpg",
    badge: "Innovation & Design",
    title: "Future of Art,",
    subtitle: "Meets Technology",
    description:
      "Exhibitions blending creativity, innovation, and digital technologies for new artistic expressions.",
    primaryLink: { href: "/contact", text: "Experience Innovation" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/exhibition7.jpg",
    badge: "Fashion & Textiles",
    title: "Weaving Culture,",
    subtitle: "Into Fashion",
    description:
      "Textile and fashion showcases that celebrate cultural identity and sustainable design.",
    primaryLink: { href: "/contact", text: "Explore Fashion" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/exhibition8.jpg",
    badge: "Youth & Emerging Artists",
    title: "Young Voices,",
    subtitle: "Bold Visions",
    description:
      "Supporting emerging talent through exhibitions that give young artists a global platform.",
    primaryLink: { href: "/contact", text: "Support Youth Art" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/exhibition9.jpg",
    badge: "Cultural Exchange",
    title: "Shared Stories,",
    subtitle: "Global Impact",
    description:
      "Exhibitions that connect communities and promote dialogue through cultural narratives.",
    primaryLink: { href: "/contact", text: "Join Exchange" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/exhibition10.jpg",
    badge: "Global Collaboration",
    title: "Art Unites,",
    subtitle: "The World",
    description:
      "Collaborative exhibitions where artists from different continents create shared works of art.",
    primaryLink: { href: "/contact", text: "Connect With Us" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
];
