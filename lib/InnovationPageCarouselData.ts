// InnovationPageCarouselData.ts

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

export const InnovationPageCarouselData: Slide[] = [
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(1).png",
    badge: "Innovation & New Media",
    title: "Innovating Culture,",
    subtitle: "Through Technology",
    description:
      "Supporting creative startups, digital heritage projects, and tech solutions that bridge cultures and create new opportunities.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join the Lab" },
  },
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(1).png",
    badge: "Creative Startups",
    title: "Empowering Creators,",
    subtitle: "Fueling Innovation",
    description:
      "Helping young innovators launch and grow creative enterprises at the intersection of culture and technology.",
    primaryLink: { href: "#programs", text: "Launch Startup" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(1).png",
    badge: "Digital Heritage",
    title: "Preserving History,",
    subtitle: "In Digital Form",
    description:
      "Digitizing cultural heritage to ensure global access, preservation, and intergenerational learning.",
    primaryLink: { href: "#programs", text: "View Projects" },
    secondaryLink: { href: "/contact", text: "Contribute" },
  },
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(1).png",
    badge: "Virtual Reality",
    title: "Immersive Worlds,",
    subtitle: "Cultural Journeys",
    description:
      "Using AR and VR to create immersive cultural experiences and enhance cross-border storytelling.",
    primaryLink: { href: "#programs", text: "Try VR Tours" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  // {
  //   image: "/images/innovation5.jpg",
  //   badge: "Media Platforms",
  //   title: "Connecting Voices,",
  //   subtitle: "Through New Media",
  //   description:
  //     "Building innovative platforms that amplify diverse voices and expand cultural narratives globally.",
  //   primaryLink: { href: "#programs", text: "Join Platform" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/innovation6.jpg",
  //   badge: "Digital Storytelling",
  //   title: "Stories,",
  //   subtitle: "Reimagined",
  //   description:
  //     "Empowering creators to share stories in digital, interactive, and impactful formats for global audiences.",
  //   primaryLink: { href: "#programs", text: "Share Story" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/innovation7.jpg",
  //   badge: "Cross-Border Labs",
  //   title: "Collaborate,",
  //   subtitle: "Innovate Together",
  //   description:
  //     "Bringing innovators from Africa and Europe together to co-create solutions for cultural exchange.",
  //   primaryLink: { href: "#programs", text: "Join Lab" },
  //   secondaryLink: { href: "/contact", text: "Collaborate" },
  // },
  // {
  //   image: "/images/innovation8.jpg",
  //   badge: "Tech for Good",
  //   title: "Innovation,",
  //   subtitle: "With Purpose",
  //   description:
  //     "Harnessing technology to solve cultural and social challenges, ensuring meaningful and inclusive impact.",
  //   primaryLink: { href: "#programs", text: "Support Cause" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/innovation9.jpg",
  //   badge: "Future Media",
  //   title: "Next-Gen Media,",
  //   subtitle: "Next-Gen Culture",
  //   description:
  //     "Exploring the future of broadcasting, AI, and media tech to expand cultural reach worldwide.",
  //   primaryLink: { href: "#programs", text: "Explore Media" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/innovation10.jpg",
  //   badge: "Global Creativity",
  //   title: "One Culture,",
  //   subtitle: "Connected Globally",
  //   description:
  //     "Creating global opportunities where innovation and creativity unite communities across continents.",
  //   primaryLink: { href: "#programs", text: "Join Movement" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
