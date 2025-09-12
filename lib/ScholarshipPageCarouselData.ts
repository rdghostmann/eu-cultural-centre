// ScholarshipPageCarouselData.ts

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

export const ScholarshipPageCarouselData: Slide[] = [
  {
    image: "/scholarship-programs/scholarship-programs2.png",
    badge: "scholarship-programs",
    title: "Advanced Academic Growth",
    subtitle: "By ECC Nigeria",
    description:
      "Unlocking access to education and empowering future leaders through scholarships and grants.",
    primaryLink: { href: "/#programs", text: "Apply Now" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/scholarship-programs/scholarship-programs3.png",
    badge: "scholarship-programs",
    title: "Undergraduate Scholarships",
    subtitle: "Young Scholars",
    description:
      "Providing financial aid and opportunities for undergraduate students to pursue higher education.",
    primaryLink: { href: "/#programs", text: "Start Application" },
    secondaryLink: { href: "/contact", text: "Get Guidance" },
  },
  {
    image: "/scholarship-programs/scholarship-programs4.png",
    badge: "scholarship-programs",
    title: "Advanced Academic Growth",
    subtitle: "By ECC Nigeria",
    description:
      "Unlocking access to education and empowering future leaders through scholarships and grants.",
    primaryLink: { href: "/#programs", text: "Apply Now" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/scholarship-programs/scholarship-programs1.png",
    badge: "scholarship-programs",
    title: "Advanced Academic Growth",
    subtitle: "By ECC Nigeria",
    description:
      "Unlocking access to education and empowering future leaders through scholarships and grants.",
    primaryLink: { href: "/#programs", text: "Apply Now" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/scholarship-programs/scholarship-programs5.png",
    badge: "scholarship-programs",
    title: "Undergraduate Scholarships",
    subtitle: "Young Scholars",
    description:
      "Providing financial aid and opportunities for undergraduate students to pursue higher education.",
    primaryLink: { href: "/#programs", text: "Start Application" },
    secondaryLink: { href: "/contact", text: "Get Guidance" },
  },
  {
    image: "/scholarship-programs/scholarship-programs6.png",
    badge: "scholarship-programs",
    title: "Undergraduate Scholarships",
    subtitle: "Young Scholars",
    description:
      "Providing financial aid and opportunities for undergraduate students to pursue higher education.",
    primaryLink: { href: "/#programs", text: "Start Application" },
    secondaryLink: { href: "/contact", text: "Get Guidance" },
  },
  // {
  //   image: "/images/scholarship3.jpg",
  //   badge: "Postgraduate Support",
  //   title: "Advanced,",
  //   subtitle: "Academic Growth",
  //   description:
  //     "Helping graduates pursue master’s and doctoral programs to expand knowledge and impact.",
  //   primaryLink: { href: "/apply", text: "Postgraduate Grants" },
  //   secondaryLink: { href: "/about", text: "Learn More" },
  // },
  // {
  //   image: "/images/scholarship4.jpg",
  //   badge: "STEM Focus",
  //   title: "Innovate,",
  //   subtitle: "Through Science",
  //   description:
  //     "Encouraging careers in science, technology, engineering, and mathematics through targeted scholarships.",
  //   primaryLink: { href: "#programs", text: "STEM Opportunities" },
  //   secondaryLink: { href: "/contact", text: "Get Involved" },
  // },
  // {
  //   image: "/images/scholarship5.jpg",
  //   badge: "International Exchange",
  //   title: "Learning,",
  //   subtitle: "Across Borders",
  //   description:
  //     "Providing scholarships for cultural and academic exchange programs in Europe and Africa.",
  //   primaryLink: { href: "#programs", text: "View Exchanges" },
  //   secondaryLink: { href: "/apply", text: "Apply Today" },
  // },
  // {
  //   image: "/images/scholarship6.jpg",
  //   badge: "Merit-Based Awards",
  //   title: "Rewarding,",
  //   subtitle: "Excellence",
  //   description:
  //     "Recognizing academic excellence and leadership potential with merit-based financial support.",
  //   primaryLink: { href: "/apply", text: "See Awards" },
  //   secondaryLink: { href: "/about", text: "Eligibility Info" },
  // },
  // {
  //   image: "/images/scholarship7.jpg",
  //   badge: "Need-Based Grants",
  //   title: "Breaking,",
  //   subtitle: "Barriers to Education",
  //   description:
  //     "Offering need-based scholarships to ensure no talented student is left behind due to financial hardship.",
  //   primaryLink: { href: "/apply", text: "Apply for Support" },
  //   secondaryLink: { href: "/contact", text: "Talk to Us" },
  // },
  // {
  //   image: "/images/scholarship8.jpg",
  //   badge: "Women in Education",
  //   title: "Empowering,",
  //   subtitle: "Girls & Women",
  //   description:
  //     "Promoting gender equality by supporting women and girls in accessing quality education.",
  //   primaryLink: { href: "#programs", text: "Women’s Initiatives" },
  //   secondaryLink: { href: "/apply", text: "Join Now" },
  // },
  // {
  //   image: "/images/scholarship9.jpg",
  //   badge: "Community Impact",
  //   title: "Educating,",
  //   subtitle: "Change Makers",
  //   description:
  //     "Supporting students whose studies will directly benefit their communities and inspire change.",
  //   primaryLink: { href: "/apply", text: "Impact Scholarships" },
  //   secondaryLink: { href: "/about", text: "Learn More" },
  // },
  // {
  //   image: "/images/scholarship10.jpg",
  //   badge: "Global Partnerships",
  //   title: "Education,",
  //   subtitle: "Without Borders",
  //   description:
  //     "Creating pathways for global learning through collaborations with universities and institutions worldwide.",
  //   primaryLink: { href: "#programs", text: "Explore Partnerships" },
  //   secondaryLink: { href: "/contact", text: "Collaborate" },
  // },
];
