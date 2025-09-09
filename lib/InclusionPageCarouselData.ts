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
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(1).png",
    badge: "Inclusion & Accessibility",
    title: "Creating Inclusive,",
    subtitle: "Experiences for All",
    description:
      "Ensuring all programs are accessible and inclusive, giving people of all abilities opportunities to participate fully in cultural exchange and education.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Request Support" },
  },
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(4).png",
    badge: "Inclusion & Accessibility",
    title: "Creating Inclusive,",
    subtitle: "Experiences for All",
    description:
      "Ensuring all programs are accessible and inclusive, giving people of all abilities opportunities to participate fully in cultural exchange and education.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Request Support" },
  },
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(2).png",
    badge: "Inclusion & Accessibility",
    title: "Creating Inclusive,",
    subtitle: "Experiences for All",
    description:
      "Ensuring all programs are accessible and inclusive, giving people of all abilities opportunities to participate fully in cultural exchange and education.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Request Support" },
  },
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(3).png",
    badge: "Inclusion & Accessibility",
    title: "Creating Inclusive,",
    subtitle: "Experiences for All",
    description:
      "Ensuring all programs are accessible and inclusive, giving people of all abilities opportunities to participate fully in cultural exchange and education.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Request Support" },
  },
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(5).png",
    badge: "Inclusion & Accessibility",
    title: "Creating Inclusive,",
    subtitle: "Experiences for All",
    description:
      "Ensuring all programs are accessible and inclusive, giving people of all abilities opportunities to participate fully in cultural exchange and education.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Request Support" },
  },
  {
    image: "/inclusion-accessibility/inclusion-&-accessebility-slide(6).png",
    badge: "Inclusion & Accessibility",
    title: "Creating Inclusive,",
    subtitle: "Experiences for All",
    description:
      "Ensuring all programs are accessible and inclusive, giving people of all abilities opportunities to participate fully in cultural exchange and education.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Request Support" },
  },
  // {
  //   image: "/inclusion-accessibility/inclusion7.jpg",
  //   badge: "Community Engagement",
  //   title: "Inclusive Communities,",
  //   subtitle: "Stronger Together",
  //   description:
  //     "Empowering communities to create inclusive spaces where diversity is celebrated and valued.",
  //   primaryLink: { href: "#programs", text: "Join Community" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/inclusion-accessibility/inclusion8.jpg",
  //   badge: "Diversity & Equity",
  //   title: "Celebrating Diversity,",
  //   subtitle: "Ensuring Equity",
  //   description:
  //     "Promoting equity and fairness in all cultural and educational programs.",
  //   primaryLink: { href: "#programs", text: "Support Equity" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/inclusion-accessibility/inclusion9.jpg",
  //   badge: "Innovation for Access",
  //   title: "Technology,",
  //   subtitle: "For Inclusion",
  //   description:
  //     "Leveraging digital tools and innovation to expand accessibility for individuals with diverse needs.",
  //   primaryLink: { href: "#programs", text: "Explore Solutions" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/inclusion-accessibility/inclusion10.jpg",
  //   badge: "Global Inclusion",
  //   title: "One World,",
  //   subtitle: "Inclusive Future",
  //   description:
  //     "Collaborating across borders to build inclusive, equitable, and accessible societies worldwide.",
  //   primaryLink: { href: "#programs", text: "Join Movement" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
