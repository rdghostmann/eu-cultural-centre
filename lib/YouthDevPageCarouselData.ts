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
    primaryLink: { href: "/contact", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/youth-development/youth-dev-2.png",
    badge: "Leadership Training",
    title: "Shaping,",
    subtitle: "Future Leaders",
    description:
      "Empowering young people with leadership skills to take initiative and create lasting change in their communities.",
    primaryLink: { href: "/#programs", text: "View Programs" },
    secondaryLink: { href: "/contact", text: "Join Us" },
  },
  {
    image: "/youth-development/youth-dev-3.png",
    badge: "Education & Skills",
    title: "Knowledge,",
    subtitle: "That Transforms",
    description:
      "Providing educational opportunities, vocational training, and digital skills to prepare youth for the future.",
    primaryLink: { href: "/#programs", text: "Explore Courses" },
    secondaryLink: { href: "/contact", text: "Enroll Now" },
  },
  {
    image: "/youth-development/youth-dev-4.png",
    badge: "Entrepreneurship",
    title: "Innovate,",
    subtitle: "And Thrive",
    description:
      "Encouraging entrepreneurship and creativity by supporting youth-led startups and small businesses.",
    primaryLink: { href: "/#programs", text: "See Opportunities" },
    secondaryLink: { href: "/contact", text: "Get Support" },
  },
  {
    image: "/youth-development/youth-dev-5.png",
    badge: "Mentorship",
    title: "Guiding,",
    subtitle: "The Next Generation",
    description:
      "Connecting young people with mentors who provide guidance, support, and career development.",
    primaryLink: { href: "/#programs", text: "Find Mentors" },
    secondaryLink: { href: "/contact", text: "Become a Mentor" },
  },
  {
    image: "/youth-development/youth-dev-6.png",
    badge: "Innovation & Technology",
    title: "Digital,",
    subtitle: "Empowerment",
    description:
      "Equipping youth with digital literacy, coding, and technology skills to succeed in the modern world.",
    primaryLink: { href: "/#programs", text: "Tech Programs" },
    secondaryLink: { href: "/contact", text: "Start Learning" },
  },
  {
    image: "/youth-development/youth-dev-7.png",
    badge: "Community Service",
    title: "Building,",
    subtitle: "Together",
    description:
      "Fostering responsibility and teamwork through volunteer opportunities and service-learning projects.",
    primaryLink: { href: "/#programs", text: "Volunteer" },
    secondaryLink: { href: "/contact", text: "Join a Project" },
  },
  // {
  //   image: "/youth-development/youth-dev-8.png",
  //   badge: "Cultural Exchange",
  //   title: "Connect,",
  //   subtitle: "Across Borders",
  //   description:
  //     "Promoting intercultural understanding and global citizenship through exchange programs.",
  //   primaryLink: { href: "/#programs", text: "See Exchanges" },
  //   secondaryLink: { href: "/contact", text: "Apply Now" },
  // },
  // {
  //   image: "/youth-development/youth-dev-9.png",
  //   badge: "Health & Wellbeing",
  //   title: "Strong Minds,",
  //   subtitle: "Healthy Futures",
  //   description:
  //     "Encouraging holistic wellbeing through sports, mental health programs, and active lifestyles.",
  //   primaryLink: { href: "/#programs", text: "Health Initiatives" },
  //   secondaryLink: { href: "/contact", text: "Get Support" },
  // },
  // {
  //   image: "/youth-development/youth-dev-10.png",
  //   badge: "Global Citizenship",
  //   title: "Youth,",
  //   subtitle: "For a Better World",
  //   description:
  //     "Equipping young people to become advocates of peace, sustainability, and positive global change.",
  //   primaryLink: { href: "/#programs", text: "Join Movements" },
  //   secondaryLink: { href: "/contact", text: "Partner With Us" },
  // },
];
