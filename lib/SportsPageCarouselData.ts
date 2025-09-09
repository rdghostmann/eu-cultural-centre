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
    image: "/sports/sports-slide-1.png",
    badge: "Sports, Tourism & Events",
    title: "Sports as a Bridge,",
    subtitle: "Between Cultures",
    description:
      "Using sports and travel as powerful tools for education, cultural exchange, and building lasting connections across Europe and Africa.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join an Event" },
  },
  {
    image: "/sports/sports-slide-2.png",
   badge: "Sports, Tourism & Events",
    title: "Sports as a Bridge,",
    subtitle: "Between Cultures",
    description:
      "Using sports and travel as powerful tools for education, cultural exchange, and building lasting connections across Europe and Africa.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/contact", text: "Join an Event" },
  },
  {
    image: "/sports/sports-slide-3.png",
    badge: "Cultural Exchange",
    title: "Travel,",
    subtitle: "With Purpose",
    description:
      "Sports tourism initiatives that bring communities together through shared cultural and athletic experiences.",
    primaryLink: { href: "#programs", text: "View Tours" },
    secondaryLink: { href: "/contact", text: "Join Now" },
  },
  // {
  //   image: "/sports/sports-slide-2.png",
  //  badge: "Cultural Exchange",
  //   title: "Travel,",
  //   subtitle: "With Purpose",
  //   description:
  //     "Sports tourism initiatives that bring communities together through shared cultural and athletic experiences.",
  //   primaryLink: { href: "#programs", text: "View Tours" },
  //   secondaryLink: { href: "/contact", text: "Join Now" },
  // },
  // {
  //   image: "/sports/sports-slide-5.png",
  //   badge: "Wellbeing & Health",
  //   title: "Active Lifestyles,",
  //   subtitle: "For All",
  //   description:
  //     "Promoting health, wellness, and active living through community-driven sports initiatives.",
  //   primaryLink: { href: "#programs", text: "Join Activities" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/sports/sports-slide-6.png",
  //   badge: "Inclusivity in Sports",
  //   title: "Equal Access,",
  //   subtitle: "For Everyone",
  //   description:
  //     "Supporting diversity and inclusion by making sports accessible to all genders, ages, and abilities.",
  //   primaryLink: { href: "#programs", text: "See Initiatives" },
  //   secondaryLink: { href: "/contact", text: "Support Inclusion" },
  // },
  // {
  //   image: "/sports/sports-slide-7.png",
  //   badge: "Tourism Development",
  //   title: "Culture,",
  //   subtitle: "Through Travel",
  //   description:
  //     "Promoting tourism that highlights cultural heritage while encouraging sustainable practices.",
  //   primaryLink: { href: "#programs", text: "Explore Tourism" },
  //   secondaryLink: { href: "/contact", text: "Partner With Us" },
  // },
  // {
  //   image: "/sports/sports-slide-8.png",
  //   badge: "Peace & Unity",
  //   title: "Games,",
  //   subtitle: "For Harmony",
  //   description:
  //     "Harnessing sports as a tool for peacebuilding, dialogue, and conflict resolution.",
  //   primaryLink: { href: "#programs", text: "Peace Programs" },
  //   secondaryLink: { href: "/contact", text: "Join the Movement" },
  // },
  // {
  //   image: "/sports/sports-slide-9.png",
  //   badge: "Skills Development",
  //   title: "Sports,",
  //   subtitle: "For Careers",
  //   description:
  //     "Creating pathways for young athletes and professionals in the sports and tourism industries.",
  //   primaryLink: { href: "#programs", text: "Career Programs" },
  //   secondaryLink: { href: "/contact", text: "Start Now" },
  // },
  // {
  //   image: "/sports/sports-slide-10.png",
  //   badge: "Global Cooperation",
  //   title: "United,",
  //   subtitle: "Through Sports",
  //   description:
  //     "Building partnerships between African and European communities through international sports diplomacy.",
  //   primaryLink: { href: "#programs", text: "Join Partnerships" },
  //   secondaryLink: { href: "/contact", text: "Collaborate" },
  // },
];
