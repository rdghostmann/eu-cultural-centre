// LanguageCoursePageCarouselData.ts

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

export const LanguageCoursePageCarouselData: Slide[] = [
  {
    image: "/sample/banner-1.png",
    badge: "Language & Communication",
    title: "Learn Languages,",
    subtitle: "Connect Cultures",
    description:
      "Empowering learners to communicate across borders and foster cultural understanding through language education.",
    primaryLink: { href: "/programs", text: "Explore Courses" },
    secondaryLink: { href: "/contact", text: "Join Now" },
  },
  {
    image: "/sample/banner-2png",
    badge: "Cultural Exchange",
    title: "Bridge Worlds,",
    subtitle: "Through Words",
    description:
      "Promoting cross-cultural dialogue and exchange by providing inclusive and engaging language courses.",
    primaryLink: { href: "/programs", text: "Start Learning" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/sample/banner-1.png",
    badge: "Multilingual Education",
    title: "One World,",
    subtitle: "Many Languages",
    description:
      "Encouraging multilingualism to strengthen connections, opportunities, and global citizenship.",
    primaryLink: { href: "/programs", text: "See Programs" },
    secondaryLink: { href: "/contact", text: "Join Community" },
  },
  // {
  //   image: "/images/language4.jpg",
  //   badge: "Interactive Learning",
  //   title: "Engage,",
  //   subtitle: "Learn Together",
  //   description:
  //     "Offering interactive courses and workshops that combine language learning with cultural immersion.",
  //   primaryLink: { href: "/programs", text: "Join Workshops" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/language5.jpg",
  //   badge: "Digital Learning",
  //   title: "Languages,",
  //   subtitle: "Anywhere, Anytime",
  //   description:
  //     "Providing online and blended courses accessible to learners across Europe, Africa, and beyond.",
  //   primaryLink: { href: "/programs", text: "Start Online" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/language6.jpg",
  //   badge: "Youth Empowerment",
  //   title: "Young Voices,",
  //   subtitle: "Global Futures",
  //   description:
  //     "Equipping young people with language skills to thrive in global education and careers.",
  //   primaryLink: { href: "/programs", text: "Youth Courses" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/language7.jpg",
  //   badge: "Professional Training",
  //   title: "Languages,",
  //   subtitle: "For Careers",
  //   description:
  //     "Specialized courses for professionals to strengthen international communication and workplace success.",
  //   primaryLink: { href: "/programs", text: "View Training" },
  //   secondaryLink: { href: "/contact", text: "Enroll Now" },
  // },
  // {
  //   image: "/images/language8.jpg",
  //   badge: "Heritage & Identity",
  //   title: "Preserve,",
  //   subtitle: "Cultural Roots",
  //   description:
  //     "Supporting heritage language learning to keep cultural identity alive across generations.",
  //   primaryLink: { href: "/programs", text: "Preserve Heritage" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/language9.jpg",
  //   badge: "Language & Technology",
  //   title: "AI Tools,",
  //   subtitle: "Smarter Learning",
  //   description:
  //     "Leveraging digital platforms, apps, and AI to make language learning engaging and effective.",
  //   primaryLink: { href: "/programs", text: "Try Tools" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/language10.jpg",
  //   badge: "Global Citizenship",
  //   title: "Languages,",
  //   subtitle: "For a Shared Future",
  //   description:
  //     "Building global citizens who connect, collaborate, and thrive through multilingual communication.",
  //   primaryLink: { href: "/programs", text: "Join Movement" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
