// InclusionPageCarouselData.ts

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

export const InclusionPageCarouselData: Slide[] = [
  {
    image: "/images/inclusion1.jpg",
    badge: "Inclusion & Accessibility",
    title: "Creating Inclusive,",
    subtitle: "Experiences for All",
    description:
      "Ensuring all programs are accessible and inclusive, giving people of all abilities opportunities to participate fully in cultural exchange and education.",
    primaryLink: { href: "/#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Request Support" },
  },
  {
    image: "/images/inclusion2.jpg",
    badge: "Equal Opportunities",
    title: "Breaking Barriers,",
    subtitle: "Building Futures",
    description:
      "Providing resources and support to ensure no one is left behind in cultural, educational, and social opportunities.",
    primaryLink: { href: "/#programs", text: "Get Involved" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/inclusion3.jpg",
    badge: "Accessible Design",
    title: "Design for All,",
    subtitle: "Participation for All",
    description:
      "Promoting universal design in events, workshops, and experiences to foster inclusivity and accessibility.",
    primaryLink: { href: "/#programs", text: "See Initiatives" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/inclusion4.jpg",
    badge: "Cultural Exchange",
    title: "Diverse Voices,",
    subtitle: "Shared Experiences",
    description:
      "Encouraging cross-cultural dialogue and exchange that values inclusivity, respect, and mutual learning.",
    primaryLink: { href: "/#programs", text: "Join Exchange" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/inclusion5.jpg",
    badge: "Education for All",
    title: "Accessible Learning,",
    subtitle: "Empowered Communities",
    description:
      "Educational programs designed to meet the needs of learners of all abilities and backgrounds.",
    primaryLink: { href: "/#programs", text: "Start Learning" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/inclusion6.jpg",
    badge: "Support Systems",
    title: "Together,",
    subtitle: "We Thrive",
    description:
      "Providing accessible resources and networks to ensure everyone has the support they need to succeed.",
    primaryLink: { href: "/#programs", text: "Find Support" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  // {
  //   image: "/images/inclusion7.jpg",
  //   badge: "Community Engagement",
  //   title: "Inclusive Communities,",
  //   subtitle: "Stronger Together",
  //   description:
  //     "Empowering communities to create inclusive spaces where diversity is celebrated and valued.",
  //   primaryLink: { href: "/#programs", text: "Join Community" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/inclusion8.jpg",
  //   badge: "Diversity & Equity",
  //   title: "Celebrating Diversity,",
  //   subtitle: "Ensuring Equity",
  //   description:
  //     "Promoting equity and fairness in all cultural and educational programs.",
  //   primaryLink: { href: "/#programs", text: "Support Equity" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/inclusion9.jpg",
  //   badge: "Innovation for Access",
  //   title: "Technology,",
  //   subtitle: "For Inclusion",
  //   description:
  //     "Leveraging digital tools and innovation to expand accessibility for individuals with diverse needs.",
  //   primaryLink: { href: "/#programs", text: "Explore Solutions" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/inclusion10.jpg",
  //   badge: "Global Inclusion",
  //   title: "One World,",
  //   subtitle: "Inclusive Future",
  //   description:
  //     "Collaborating across borders to build inclusive, equitable, and accessible societies worldwide.",
  //   primaryLink: { href: "/#programs", text: "Join Movement" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
