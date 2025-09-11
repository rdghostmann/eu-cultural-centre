// ResearchPageCarouselData.ts

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

export const ResearchPageCarouselData: Slide[] = [
  {
    image: "/research/research1.png",
    badge: "Creative & Cultural Research",
    title: "Advancing Knowledge",
    subtitle: "Through Research",
    description:
      "Research and innovation that strengthens cultural sectors, informs policy decisions, and creates evidence-based solutions for cooperation between Europe and Africa.",
    primaryLink: { href: "#programs", text: "Explore Research" },
    secondaryLink: { href: "/contact", text: "Collaborate With Us" },
  },
  {
    image: "/research/research2.png",
    badge: "Creative & Cultural Research",
    title: "Advancing Knowledge",
    subtitle: "Through Research",
    description:
      "Research and innovation that strengthens cultural sectors, informs policy decisions, and creates evidence-based solutions for cooperation between Europe and Africa.",
    primaryLink: { href: "#programs", text: "Explore Research" },
    secondaryLink: { href: "/contact", text: "Collaborate With Us" },
  },
  {
    image: "/research/research3.png",
    badge: "Creative & Cultural Research",
    title: "Advancing Knowledge",
    subtitle: "Through Research",
    description:
      "Research and innovation that strengthens cultural sectors, informs policy decisions, and creates evidence-based solutions for cooperation between Europe and Africa.",
    primaryLink: { href: "#programs", text: "Explore Research" },
    secondaryLink: { href: "/contact", text: "Collaborate With Us" },
  },
  {
    image: "/research/research4.png",
    badge: "Creative & Cultural Research",
    title: "Advancing Knowledge",
    subtitle: "Shared History",
    description:
      "Research that safeguards cultural heritage while promoting innovation in conservation methods.",
    primaryLink: { href: "#programs", text: "View Projects" },
    secondaryLink: { href: "/contact", text: "Join Efforts" },
  },
  // {
  //   image: "/research/research5.jpg",
  //   badge: "Innovation & Culture",
  //   title: "Researching,",
  //   subtitle: "Future Solutions",
  //   description:
  //     "Exploring how technology and innovation can support cultural sustainability and collaboration.",
  //   primaryLink: { href: "#programs", text: "Explore Innovation" },
  //   secondaryLink: { href: "/contact", text: "Collaborate" },
  // },
  // {
  //   image: "/research/research6.jpg",
  //   badge: "Youth & Education",
  //   title: "Empowering Youth,",
  //   subtitle: "Through Knowledge",
  //   description:
  //     "Encouraging youth-driven research and academic collaboration across Europe and Africa.",
  //   primaryLink: { href: "#programs", text: "See Initiatives" },
  //   secondaryLink: { href: "/contact", text: "Get Involved" },
  // },
  // {
  //   image: "/research/research7.jpg",
  //   badge: "Cross-Border Studies",
  //   title: "Connecting Regions,",
  //   subtitle: "Through Data",
  //   description:
  //     "Promoting joint research projects that link African and European institutions and scholars.",
  //   primaryLink: { href: "#programs", text: "Discover Research" },
  //   secondaryLink: { href: "/contact", text: "Collaborate" },
  // },
  // {
  //   image: "/research/research8.jpg",
  //   badge: "Social Innovation",
  //   title: "Culture,",
  //   subtitle: "As a Solution",
  //   description:
  //     "Investigating how cultural initiatives contribute to solving pressing social and environmental challenges.",
  //   primaryLink: { href: "#programs", text: "Learn More" },
  //   secondaryLink: { href: "/contact", text: "Support Research" },
  // },
  // {
  //   image: "/research/research9.jpg",
  //   badge: "Knowledge Sharing",
  //   title: "Research,",
  //   subtitle: "Made Accessible",
  //   description:
  //     "Ensuring research outputs are open, accessible, and impactful for communities and policymakers alike.",
  //   primaryLink: { href: "#programs", text: "Access Resources" },
  //   secondaryLink: { href: "/contact", text: "Publish With Us" },
  // },
  // {
  //   image: "/research/research10.jpg",
  //   badge: "Global Cooperation",
  //   title: "Knowledge,",
  //   subtitle: "Without Borders",
  //   description:
  //     "Building networks of scholars and cultural actors who collaborate internationally for shared solutions.",
  //   primaryLink: { href: "#programs", text: "Join Networks" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
