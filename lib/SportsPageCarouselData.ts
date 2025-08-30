// SportPageCarouselData.ts

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

export const SportPageCarouselData: Slide[] = [
  {
    image: "/images/sport1.jpg",
    badge: "Sports, Tourism & Events",
    title: "Sports as a Bridge,",
    subtitle: "Between Cultures",
    description:
      "Using sports and travel as powerful tools for education, cultural exchange, and building lasting connections across Europe and Africa.",
    primaryLink: { href: "/#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join an Event" },
  },
  {
    image: "/images/sport2.jpg",
    badge: "Youth Empowerment",
    title: "Inspiring Youth,",
    subtitle: "Through Sports",
    description:
      "Engaging young people in sporting activities that foster leadership, teamwork, and intercultural dialogue.",
    primaryLink: { href: "/#programs", text: "Youth Programs" },
    secondaryLink: { href: "/contact", text: "Get Involved" },
  },
  {
    image: "/images/sport3.jpg",
    badge: "Cultural Exchange",
    title: "Travel,",
    subtitle: "With Purpose",
    description:
      "Sports tourism initiatives that bring communities together through shared cultural and athletic experiences.",
    primaryLink: { href: "/#programs", text: "View Tours" },
    secondaryLink: { href: "/contact", text: "Join Now" },
  },
  {
    image: "/images/sport4.jpg",
    badge: "Global Events",
    title: "Competitions,",
    subtitle: "That Unite",
    description:
      "Hosting international sporting and cultural events that highlight cooperation and friendship across borders.",
    primaryLink: { href: "/#programs", text: "See Events" },
    secondaryLink: { href: "/contact", text: "Participate" },
  },
  // {
  //   image: "/images/sport5.jpg",
  //   badge: "Wellbeing & Health",
  //   title: "Active Lifestyles,",
  //   subtitle: "For All",
  //   description:
  //     "Promoting health, wellness, and active living through community-driven sports initiatives.",
  //   primaryLink: { href: "/#programs", text: "Join Activities" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/sport6.jpg",
  //   badge: "Inclusivity in Sports",
  //   title: "Equal Access,",
  //   subtitle: "For Everyone",
  //   description:
  //     "Supporting diversity and inclusion by making sports accessible to all genders, ages, and abilities.",
  //   primaryLink: { href: "/#programs", text: "See Initiatives" },
  //   secondaryLink: { href: "/contact", text: "Support Inclusion" },
  // },
  // {
  //   image: "/images/sport7.jpg",
  //   badge: "Tourism Development",
  //   title: "Culture,",
  //   subtitle: "Through Travel",
  //   description:
  //     "Promoting tourism that highlights cultural heritage while encouraging sustainable practices.",
  //   primaryLink: { href: "/#programs", text: "Explore Tourism" },
  //   secondaryLink: { href: "/contact", text: "Partner With Us" },
  // },
  // {
  //   image: "/images/sport8.jpg",
  //   badge: "Peace & Unity",
  //   title: "Games,",
  //   subtitle: "For Harmony",
  //   description:
  //     "Harnessing sports as a tool for peacebuilding, dialogue, and conflict resolution.",
  //   primaryLink: { href: "/#programs", text: "Peace Programs" },
  //   secondaryLink: { href: "/contact", text: "Join the Movement" },
  // },
  // {
  //   image: "/images/sport9.jpg",
  //   badge: "Skills Development",
  //   title: "Sports,",
  //   subtitle: "For Careers",
  //   description:
  //     "Creating pathways for young athletes and professionals in the sports and tourism industries.",
  //   primaryLink: { href: "/#programs", text: "Career Programs" },
  //   secondaryLink: { href: "/contact", text: "Start Now" },
  // },
  // {
  //   image: "/images/sport10.jpg",
  //   badge: "Global Cooperation",
  //   title: "United,",
  //   subtitle: "Through Sports",
  //   description:
  //     "Building partnerships between African and European communities through international sports diplomacy.",
  //   primaryLink: { href: "/#programs", text: "Join Partnerships" },
  //   secondaryLink: { href: "/contact", text: "Collaborate" },
  // },
];
