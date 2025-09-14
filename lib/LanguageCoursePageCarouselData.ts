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
    image: "/language-courses/language-course.png",
    badge: "Language Courses",
    title: "Learn a New Language",
    subtitle: "Open New Doors",
    description: "Master languages for travel, study, and career growth.",
    primaryLink: { href: "#programs", text: "Explore Courses" },
    secondaryLink: { href: "/contact", text: "Join Now" },
  },
  {
    image: "/language-courses/language-course1.png",
    badge: "Language Courses",
    title: "Speak with Confidence",
    subtitle: "Anywhere You Go",
    description: "Build practical skills to connect with people worldwide.",
    primaryLink: { href: "#programs", text: "Browse Languages" },
    secondaryLink: { href: "/contact", text: "Enroll Today" },
  },
  {
    image: "/language-courses/language-course2.png",
    badge: "Cultural Exchange",
    title: "Bridge Worlds",
    subtitle: "Through Words",
    description: "Foster dialogue and understanding through language.",
    primaryLink: { href: "#programs", text: "Start Learning" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/language-courses/language-course3.png",
    badge: "Language Courses",
    title: "One World & Voices",
    subtitle: "Many ",
    description: "Celebrate diversity with the power of multilingualism.",
    primaryLink: { href: "#programs", text: "See Programs" },
    secondaryLink: { href: "/contact", text: "Join Community" },
  },
];

