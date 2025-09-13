// TrainingPageCarouselData.ts

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

export const TrainingPageCarouselData: Slide[] = [
  {
    image: "/training-workshop/training-workshop.png",
    badge: "Training & Workshop",
    title: "Learn, Lead, Excel",
    subtitle: "",
    description:
      "Empowering professionals, entrepreneurs, and students through tailored training programs that build capacity and unlock potential.",
    primaryLink: { href: "#programs", text: "Explore Trainings" },
    secondaryLink: { href: "/contact", text: "Get Started" },
  },
  {
    image: "/training-workshop/training-workshop1.png",
    badge: "Training & Workshop",
    title: "Future-Ready,",
    subtitle: "Skill Sets",
    description:
      "Practical workshops and hands-on courses designed to equip learners with 21st-century skills for career growth and global opportunities.",
    primaryLink: { href: "#programs", text: "Join Workshops" },
    secondaryLink: { href: "/contact", text: "Enroll Now" },
  },
  {
    image: "/training-workshop/training-workshop2.png",
    badge: "Training & Workshop",
    title: "Train for Impact,",
    subtitle: "Transform Communities",
    description:
      "From leadership training to digital innovation, our programs focus on creating change-makers who drive sustainable development worldwide.",
    primaryLink: { href: "#programs", text: "See Impact" },
    secondaryLink: { href: "/contact", text: "Register Today" },
  },
  {
    image: "/training-workshop/training-workshop3.png",
    badge: "Training & Workshop",
    title: "Bridging Skills and Careers",
    subtitle: "Across Borders",
    description:
      "Cross-cultural training and international capacity-building initiatives that prepare participants for opportunities in Europe and Africa.",
    primaryLink: { href: "#programs", text: "Discover More" },
    secondaryLink: { href: "/contact", text: "Apply Now" },
  },
];
