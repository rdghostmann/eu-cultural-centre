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

export const SchoolExchangeToursData: Slide[] = [
  {
    image: "/school-exchange-tours/school-exchange-tours-slide1.png",
    badge: "School Exchange Tour",
    title: "Global Classrooms",
    subtitle: "Learning Beyond Borders",
    description:
      "Connect students and educators through immersive exchange programs that foster cross-cultural understanding.",
    primaryLink: { href: "#programs", text: "See Exchange Programs" },
    secondaryLink: { href: "/contact", text: "Apply Now" },
  },
  {
    image: "/school-exchange-tours/school-exchange-tours-slide2.png",
    badge: "School Exchange Tour",
    title: "Cultural Immersion",
    subtitle: "Experience New Traditions",
    description:
      "Students experience new cultures, languages, and traditions, building lifelong friendships and global perspectives.",
    primaryLink: { href: "#programs", text: "Explore Tours" },
    secondaryLink: { href: "/contact", text: "Join a Tour" },
  },
  {
    image: "/school-exchange-tours/school-exchange-tours-slide3.png",
    badge: "School Exchange Tour",
    title: "Academic Collaboration",
    subtitle: "Shared Knowledge",
    description:
      "Partner schools collaborate on joint projects, research, and academic competitions for mutual growth.",
    primaryLink: { href: "#programs", text: "View Collaborations" },
    secondaryLink: { href: "/contact", text: "Partner With Us" },
  },
  {
    image: "/school-exchange-tours/school-exchange-tours-slide4.png",
    badge: "School Exchange Tour",
    title: "Youth Leadership",
    subtitle: "Empowering Future Leaders",
    description:
      "Leadership workshops and mentorship programs help students develop skills for success in a global society.",
    primaryLink: { href: "#programs", text: "Leadership Programs" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
];