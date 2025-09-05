// CooperationPageCarouselData.ts

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

export const CooperationPageCarouselData: Slide[] = [
  {
    image: "/sample/banner-1.png",
    // image: "/people-to-people-cooperation/people-to-people-cooperation-slide1.png",
    badge: "People-to-People Cooperation",
    title: "Strengthen Partnerships,",
    subtitle: "Across Borders",
    description:
      "Fostering cooperation between civil society, governments, and institutions in Europe and Africa.",
    primaryLink: { href: "/contact", text: "Start a Partnership" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/people-to-people-cooperation/people-to-people-cooperation-slide9.png",
    badge: "Cultural Diplomacy",
    title: "Dialogue Through,",
    subtitle: "Art and Culture",
    description:
      "Using cultural exchange to build trust, understanding, and sustainable cooperation between nations.",
    primaryLink: { href: "/contact", text: "Join the Dialogue" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/people-to-people-cooperation/people-to-people-cooperation-slide7.png",
    badge: "Educational Collaboration",
    title: "Expand Knowledge,",
    subtitle: "Through Partnerships",
    description:
      "Encouraging student exchange, joint research, and capacity-building initiatives worldwide.",
    primaryLink: { href: "/contact", text: "Support Education" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  // {
  //   image: "/people-to-people-cooperation/people-to-people-cooperation-slide1.png",
  //   badge: "Health & Wellbeing",
  //   title: "Improve Healthcare,",
  //   subtitle: "Together",
  //   description:
  //     "Collaborating across continents to strengthen healthcare systems and patient access.",
  //   primaryLink: { href: "/contact", text: "Partner in Health" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/people-to-people-cooperation/people-to-people-cooperation-slide1.png",
  //   badge: "Youth Empowerment",
  //   title: "Inspire Young Leaders,",
  //   subtitle: "Shape Tomorrow",
  //   description:
  //     "Investing in youth as changemakers through mentorship, leadership, and innovation programs.",
  //   primaryLink: { href: "/contact", text: "Support Youth" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/people-to-people-cooperation/people-to-people-cooperation-slide1.png",
  //   badge: "Sustainable Development",
  //   title: "Cooperate for,",
  //   subtitle: "A Greener Future",
  //   description:
  //     "Promoting climate action and sustainable growth through global cooperation projects.",
  //   primaryLink: { href: "/contact", text: "Join Sustainability Efforts" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/people-to-people-cooperation/people-to-people-cooperation-slide1.png",
  //   badge: "Innovation & Technology",
  //   title: "Bridge Innovation,",
  //   subtitle: "Across Continents",
  //   description:
  //     "Building digital bridges with innovation hubs and cross-border technology partnerships.",
  //   primaryLink: { href: "/contact", text: "Foster Innovation" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/people-to-people-cooperation/people-to-people-cooperation-slide1.png",
  //   badge: "Women in Leadership",
  //   title: "Empower Women,",
  //   subtitle: "Drive Change",
  //   description:
  //     "Strengthening cooperation through women-led initiatives in governance, culture, and business.",
  //   primaryLink: { href: "/contact", text: "Support Women Leaders" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/people-to-people-cooperation/people-to-people-cooperation-slide1.png",
  //   badge: "Intercultural Understanding",
  //   title: "Celebrate Diversity,",
  //   subtitle: "Foster Peace",
  //   description:
  //     "Encouraging intercultural dialogue to promote tolerance, mutual respect, and peaceful coexistence.",
  //   primaryLink: { href: "/contact", text: "Join the Conversation" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/people-to-people-cooperation/people-to-people-cooperation-slide1.png",
  //   badge: "Global Cooperation • Shared Futures",
  //   title: "United Communities,",
  //   subtitle: "Stronger Together",
  //   description:
  //     "Building a global future of solidarity through creativity, diplomacy, and collaboration.",
  //   primaryLink: { href: "/contact", text: "Connect With Us" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
