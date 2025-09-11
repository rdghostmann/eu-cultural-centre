// AboutPageCarouselData.ts
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

export const AboutPageCarouselData: Slide[] = [
  {
    image: "/images/slider1.jpg",
    badge: "Connecting Cultures",
    title: "Join Our Network,",
    subtitle: "Transform Communities",
    description: "Promoting intercultural dialogue between Africa, Europe, and the world.",
    primaryLink: { href: "#about-us", text: "Get Involved" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/slider2.jpg",
    badge: "Building Bridges",
    title: "Strengthen Partnerships,",
    subtitle: "Across Borders",
    description: "Creating sustainable cultural and educational partnerships worldwide.",
    primaryLink: { href: "#about-us", text: "Partner With Us" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/slider3.jpg",
    badge: "Celebrating Diversity",
    title: "Advance Understanding,",
    subtitle: "Through Culture",
    description: "Celebrating diversity and encouraging global intercultural dialogue.",
    primaryLink: { href: "#about-us", text: "Join the Dialogue" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/slider4.jpg",
    badge: "Art as a Universal Language",
    title: "Unite Through Art,",
    subtitle: "Inspire Generations",
    description: "Art as a bridge fostering creativity, empathy, and global exchange.",
    primaryLink: { href: "#about-us", text: "Explore With Us" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  // {
  //   image: "/images/slider5.jpg",
  //   badge: "Education Without Borders",
  //   title: "Knowledge For All,",
  //   subtitle: "Global Learning",
  //   description: "Promoting cross-continental education for empowered communities.",
  //   primaryLink: { href: "#about-us", text: "Support Education" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/slider6.jpg",
  //   badge: "Innovation Meets Tradition",
  //   title: "Shape The Future,",
  //   subtitle: "Together",
  //   description: "Blending tradition with innovation to inspire cultural growth.",
  //   primaryLink: { href: "#about-us", text: "Get Involved" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/slider7.jpg",
  //   badge: "Preserve Heritage • Embrace Identity",
  //   title: "Celebrate Heritage,",
  //   subtitle: "Preserve Identity",
  //   description: "Protecting heritage while fostering inclusive global collaboration.",
  //   primaryLink: { href: "#about-us", text: "Preserve With Us" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/slider8.jpg",
  //   badge: "Dialogue Across Continents",
  //   title: "Building Bridges,",
  //   subtitle: "Connecting People",
  //   description: "Encouraging intercultural dialogue between Europe, Africa, and beyond.",
  //   primaryLink: { href: "#about-us", text: "Join the Conversation" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/slider9.jpg",
  //   badge: "Empowering the Next Generation",
  //   title: "Inspire Youth,",
  //   subtitle: "Shape Tomorrow",
  //   description: "Empowering youth with culture, education, and opportunities for change.",
  //   primaryLink: { href: "#about-us", text: "Support Youth" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/slider10.jpg",
  //   badge: "Global Connections • Shared Futures",
  //   title: "Global Connections,",
  //   subtitle: "Shared Futures",
  //   description: "Fostering a united future through creativity and collaboration.",
  //   primaryLink: { href: "#about-us", text: "Connect With Us" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
