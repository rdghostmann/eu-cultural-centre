// EnvironmentPageCarouselData.ts

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

export const EnvironmentPageCarouselData: Slide[] = [
  {
    image: "/images/environment1.jpg",
    badge: "Environment & Climate Action",
    title: "Building a,",
    subtitle: "Sustainable Future",
    description:
      "Climate education and action programs for a greener, more sustainable world.",
    primaryLink: { href: "/contact", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join the Movement" },
  },
  {
    image: "/images/environment2.jpg",
    badge: "Renewable Energy",
    title: "Clean Energy,",
    subtitle: "For All",
    description:
      "Promoting solar, wind, and renewable energy solutions across communities.",
    primaryLink: { href: "/contact", text: "Support Clean Energy" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/images/environment3.jpg",
    badge: "Climate Education",
    title: "Learn Green,",
    subtitle: "Act Green",
    description:
      "Empowering youth and communities with knowledge to combat climate change.",
    primaryLink: { href: "/contact", text: "Start Learning" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
  // {
  //   image: "/images/environment4.jpg",
  //   badge: "Conservation",
  //   title: "Protect Nature,",
  //   subtitle: "Preserve Life",
  //   description:
  //     "Safeguarding biodiversity and ecosystems for future generations.",
  //   primaryLink: { href: "/contact", text: "Support Conservation" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/environment5.jpg",
  //   badge: "Community Action",
  //   title: "Local Action,",
  //   subtitle: "Global Impact",
  //   description:
  //     "Grassroots projects tackling environmental issues through collective action.",
  //   primaryLink: { href: "/contact", text: "Join a Project" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/environment6.jpg",
  //   badge: "Sustainable Cities",
  //   title: "Green Spaces,",
  //   subtitle: "Healthy Lives",
  //   description:
  //     "Developing eco-friendly cities that balance growth and sustainability.",
  //   primaryLink: { href: "/contact", text: "Support Green Cities" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/environment7.jpg",
  //   badge: "Water & Oceans",
  //   title: "Protect Our,",
  //   subtitle: "Blue Planet",
  //   description:
  //     "Preserving oceans, rivers, and freshwater for human and ecological health.",
  //   primaryLink: { href: "/contact", text: "Protect Oceans" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/environment8.jpg",
  //   badge: "Climate Innovation",
  //   title: "Innovate,",
  //   subtitle: "For Sustainability",
  //   description:
  //     "Harnessing technology and ideas to solve pressing climate challenges.",
  //   primaryLink: { href: "/contact", text: "Support Innovation" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/environment9.jpg",
  //   badge: "Youth for Climate",
  //   title: "Empower Youth,",
  //   subtitle: "Lead Change",
  //   description:
  //     "Inspiring young leaders to take charge in the fight for a sustainable future.",
  //   primaryLink: { href: "/contact", text: "Empower Youth" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/environment10.jpg",
  //   badge: "Global Collaboration",
  //   title: "Together,",
  //   subtitle: "For the Planet",
  //   description:
  //     "Working across nations to achieve climate resilience and global sustainability.",
  //   primaryLink: { href: "/contact", text: "Connect With Us" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
