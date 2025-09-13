// EducationPageCarouselData.ts

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

export const EducationPageCarouselData: Slide[] = [
  {
    image: "/education/education.png",
    badge: "Education & Knowledge Exchange",
    title: "Empower Through Learning",
    subtitle: "Unlock Potential",
    description:
      "Bridging cultures and creating opportunities for growth through education.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Apply Now" },
  },
  // {
  //   image: "/education/education0.png",
  //   badge: "Education & Knowledge Exchange",
  //   title: "Expand Horizons",
  //   subtitle: "Global Knowledge",
  //   description:
  //     "Connecting learners worldwide for academic excellence and cultural exchange.",
  //   primaryLink: { href: "#programs", text: "Explore Programs" },
  //   secondaryLink: { href: "/contact", text: "Apply Now" },
  // },
  {
    image: "/education/education1.png",
    badge: "Education & Knowledge Exchange",
    title: "Inspire Innovation",
    subtitle: "Transform Education",
    description:
      "Fostering creativity and critical thinking for future leaders.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Apply Now" },
  },
  {
    image: "/education/education2.png",
    badge: "Education & Knowledge Exchange",
    title: "Collaborate & Grow",
    subtitle: "Shared Success",
    description:
      "Building partnerships for impactful learning and development.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Apply Now" },
  },
  {
    image: "/education/education3.png",
    badge: "Education & Knowledge Exchange",
    title: "E-Learning,",
    subtitle: "Without Borders",
    description:
      "Expanding access to quality education through digital platforms and tools.",
    primaryLink: { href: "#programs", text: "Start Learning" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/education/education4.jpg",
    badge: "Education & Knowledge Exchange",
    title: "Educate Youth,",
    subtitle: "Shape the Future",
    description:
      "Encouraging youth leadership through mentorship, innovation, and education.",
    primaryLink: { href: "#programs", text: "Empower Youth" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
];
