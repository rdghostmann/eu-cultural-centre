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

export const ResearchTourData: Slide[] = [
  {
    image: "/research-tours/reasearch-tours5.png",
    badge: "Research Tour",
    title: "Academic Research",
    subtitle: "Exchange",
    description:
      "Comprehensive support for researchers conducting cultural studies and fieldwork across Africa.",
    primaryLink: { href: "#programs", text: "Explore Research Areas" },
    secondaryLink: { href: "/contact", text: "Apply for Residency" },
  },
  {
    image: "/research-tours/reasearch-tours2.png",
    badge: "Research Tour",
    title: "Collaborative Fieldwork",
    subtitle: "International Partnerships",
    description:
      "Join hands with global institutions for joint research, data collection, and knowledge sharing.",
    primaryLink: { href: "#programs", text: "View Partnerships" },
    secondaryLink: { href: "/contact", text: "Partner With Us" },
  },
  {
    image: "/research-tours/reasearch-tours3.png",
    badge: "Research Tour",
    title: "Heritage Documentation",
    subtitle: "Preservation Projects",
    description:
      "Participate in heritage documentation tours focused on preserving cultural sites and traditions.",
    primaryLink: { href: "#programs", text: "See Heritage Tours" },
    secondaryLink: { href: "/contact", text: "Join a Project" },
  },
  {
    image: "/research-tours/reasearch-tours4.png",
    badge: "Research Tour",
    title: "Innovation in Research",
    subtitle: "Tech & Data",
    description:
      "Explore the use of technology and data science in advancing cultural research and analysis.",
    primaryLink: { href: "#programs", text: "Discover Innovations" },
    secondaryLink: { href: "/contact", text: "Collaborate" },
  },
  {
    image: "/research-tours/reasearch-tours5.png",
    badge: "Research Tour",
    title: "Community Impact Studies",
    subtitle: "Social Development",
    description:
      "Conduct studies on the impact of cultural programs on local communities and social change.",
    primaryLink: { href: "#programs", text: "Impact Studies" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
  {
    image: "/research-tours/reasearch-tours6.png",
    badge: "Research Tour",
    title: "Youth Research Exchange",
    subtitle: "Student Opportunities",
    description:
      "Empowering young researchers through exchange programs, mentorship, and hands-on fieldwork.",
    primaryLink: { href: "#programs", text: "Youth Programs" },
    secondaryLink: { href: "/contact", text: "Apply Now" },
  },
];
