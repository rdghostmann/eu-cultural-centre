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
    image: "/school-exchange-tours/school-exchange-tours-slide1.png",
    badge: "Education & Knowledge Exchange",
    title: "Transforming Lives,",
    subtitle: "Through Learning",
    description:
      "Comprehensive programs bridging cultures and creating opportunities for growth.",
    primaryLink: { href: "/contact", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Apply Now" },
  },
  {
    image: "/school-exchange-tours/school-exchange-tours-slide2.png",
    badge: "Student Exchange",
    title: "Study Abroad,",
    subtitle: "Expand Horizons",
    description:
      "Opportunities for students to learn abroad and gain international exposure.",
    primaryLink: { href: "/contact", text: "Apply for Exchange" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/school-exchange-tours/school-exchange-tours-slide3.png",
    badge: "Research Collaboration",
    title: "Innovate Together,",
    subtitle: "Advance Knowledge",
    description:
      "Joint research initiatives that solve global challenges through shared expertise.",
    primaryLink: { href: "/contact", text: "Join Research" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/school-exchange-tours/school-exchange-tours-slide1.png",
    badge: "Capacity Building",
    title: "Strengthen Skills,",
    subtitle: "Empower Communities",
    description:
      "Programs designed to build professional and institutional capacity worldwide.",
    primaryLink: { href: "/contact", text: "Support Capacity Building" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  // {
  //   image: "/school-exchange-tours/school-exchange-tours-slide5.png",
  //   badge: "Digital Learning",
  //   title: "E-Learning,",
  //   subtitle: "Without Borders",
  //   description:
  //     "Expanding access to quality education through digital platforms and tools.",
  //   primaryLink: { href: "/contact", text: "Start Learning" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/school-exchange-tours/education6.jpg",
  //   badge: "Youth Empowerment",
  //   title: "Educate Youth,",
  //   subtitle: "Shape the Future",
  //   description:
  //     "Encouraging youth leadership through mentorship, innovation, and education.",
  //   primaryLink: { href: "/contact", text: "Empower Youth" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/school-exchange-tours/education7.jpg",
  //   badge: "Professional Growth",
  //   title: "Train Today,",
  //   subtitle: "Lead Tomorrow",
  //   description:
  //     "Supporting continuous professional development for a global workforce.",
  //   primaryLink: { href: "/contact", text: "Join Training" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/school-exchange-tours/education8.jpg",
  //   badge: "STEM Innovation",
  //   title: "Science & Tech,",
  //   subtitle: "For Global Impact",
  //   description:
  //     "Promoting STEM education to drive innovation and sustainable development.",
  //   primaryLink: { href: "/contact", text: "Support STEM" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/school-exchange-tours/education9.jpg",
  //   badge: "Cultural Exchange in Learning",
  //   title: "Diverse Classrooms,",
  //   subtitle: "Inclusive Futures",
  //   description:
  //     "Integrating cultural understanding into education for global citizenship.",
  //   primaryLink: { href: "/contact", text: "Join the Exchange" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/school-exchange-tours/education10.jpg",
  //   badge: "Global Knowledge • Shared Futures",
  //   title: "United by,",
  //   subtitle: "Education",
  //   description:
  //     "Collaborating across borders to build an educated, connected, and sustainable future.",
  //   primaryLink: { href: "/contact", text: "Connect With Us" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
