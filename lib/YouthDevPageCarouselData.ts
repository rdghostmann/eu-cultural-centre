// YouthDevPageCarouselData.ts

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

export const YouthDevPageCarouselData: Slide[] = [
  {
    image: "/youth-development/youth-dev-1.png",
    badge: "Empower • Educate • Inspire",
    title: "Youth Development,",
    subtitle: "By ECC Nigeria",
    description:
      "Building skills, confidence, and opportunities for the next generation of leaders.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/youth-development/youth-dev-2.png",
    badge: "Empower • Educate • Inspire",
    title: "Youth Development,",
    subtitle: "By ECC Nigeria",
    description:
      "Building skills, confidence, and opportunities for the next generation of leaders.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/youth-development/youth-dev-3.png",
    badge: "Empower • Educate • Inspire",
    title: "Youth Development,",
    subtitle: "By ECC Nigeria",
    description:
      "Building skills, confidence, and opportunities for the next generation of leaders.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/youth-development/youth-dev-4.png",
    badge: "Empower • Educate • Inspire",
    title: "Youth Development,",
    subtitle: "By ECC Nigeria",
    description:
      "Building skills, confidence, and opportunities for the next generation of leaders.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/youth-development/youth-dev-5.png",
    badge: "Empower • Educate • Inspire",
    title: "Youth Development,",
    subtitle: "By ECC Nigeria",
    description:
      "Building skills, confidence, and opportunities for the next generation of leaders.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/youth-development/youth-dev-6.png",
    badge: "Empower • Educate • Inspire",
    title: "Youth Development,",
    subtitle: "By ECC Nigeria",
    description:
      "Building skills, confidence, and opportunities for the next generation of leaders.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/youth-development/youth-dev-7.png",
    badge: "Empower • Educate • Inspire",
    title: "Youth Development,",
    subtitle: "By ECC Nigeria",
    description:
      "Building skills, confidence, and opportunities for the next generation of leaders.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  // {
  //   image: "/youth-development/youth-dev-8.png",
  //   badge: "Cultural Exchange",
  //   title: "Connect,",
  //   subtitle: "Across Borders",
  //   description:
  //     "Promoting intercultural understanding and global citizenship through exchange programs.",
  //   primaryLink: { href: "#programs", text: "See Exchanges" },
  //   secondaryLink: { href: "/contact", text: "Apply Now" },
  // },
  // {
  //   image: "/youth-development/youth-dev-9.png",
  //   badge: "Health & Wellbeing",
  //   title: "Strong Minds,",
  //   subtitle: "Healthy Futures",
  //   description:
  //     "Encouraging holistic wellbeing through sports, mental health programs, and active lifestyles.",
  //   primaryLink: { href: "#programs", text: "Health Initiatives" },
  //   secondaryLink: { href: "/contact", text: "Get Support" },
  // },
  // {
  //   image: "/youth-development/youth-dev-10.png",
  //   badge: "Global Citizenship",
  //   title: "Youth,",
  //   subtitle: "For a Better World",
  //   description:
  //     "Equipping young people to become advocates of peace, sustainability, and positive global change.",
  //   primaryLink: { href: "#programs", text: "Join Movements" },
  //   secondaryLink: { href: "/contact", text: "Partner With Us" },
  // },
];
