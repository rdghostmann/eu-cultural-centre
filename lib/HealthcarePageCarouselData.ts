// HealthcarePageCarouselData.ts

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

export const HealthcarePageCarouselData: Slide[] = [
  {
    image: "/sample/banner-1.png",
    badge: "Telemedicine",
    title: "Healthcare,",
    subtitle: "Anywhere, Anytime",
    description:
      "Access medical expertise remotely through secure, innovative telemedicine solutions.",
    primaryLink: { href: "/programs", text: "Get Telemedicine" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/sample/banner-1.png",
    badge: "Community Health",
    title: "Stronger Communities,",
    subtitle: "Healthier Lives",
    description:
      "Promoting preventive care and wellness programs for healthier communities across regions.",
    primaryLink: { href: "/programs", text: "Join Program" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/sample/banner-1.png",
    badge: "Global Partnerships",
    title: "Collaborate,",
    subtitle: "For Better Health",
    description:
      "Building strong partnerships between African and European institutions for healthcare advancement.",
    primaryLink: { href: "/programs", text: "Partner With Us" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/sample/banner-1.png",
    badge: "Medical Training",
    title: "Train Today,",
    subtitle: "Save Lives Tomorrow",
    description:
      "Capacity-building workshops and training programs for healthcare professionals worldwide.",
    primaryLink: { href: "/programs", text: "Start Training" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  // {
  //   image: "/images/healthcare5.jpg",
  //   badge: "Research & Innovation",
  //   title: "Innovating,",
  //   subtitle: "For Health Solutions",
  //   description:
  //     "Supporting medical research and innovative technologies for improved patient outcomes.",
  //   primaryLink: { href: "/programs", text: "Support Research" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/healthcare6.jpg",
  //   badge: "Public Health",
  //   title: "Prevention,",
  //   subtitle: "For a Safer Future",
  //   description:
  //     "Public health campaigns addressing challenges like pandemics, nutrition, and sanitation.",
  //   primaryLink: { href: "/programs", text: "Join Campaign" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/healthcare7.jpg",
  //   badge: "Patient Empowerment",
  //   title: "Informed Patients,",
  //   subtitle: "Better Care",
  //   description:
  //     "Programs designed to educate patients, ensuring access to quality healthcare choices.",
  //   primaryLink: { href: "/programs", text: "Get Resources" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/healthcare8.jpg",
  //   badge: "Technology & AI",
  //   title: "Smart Healthcare,",
  //   subtitle: "Smarter Future",
  //   description:
  //     "Using AI, data, and digital tools to revolutionize healthcare delivery globally.",
  //   primaryLink: { href: "/programs", text: "Explore Technology" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/healthcare9.jpg",
  //   badge: "Mental Health",
  //   title: "Caring Minds,",
  //   subtitle: "Caring Hearts",
  //   description:
  //     "Promoting awareness, access, and support for mental health and well-being.",
  //   primaryLink: { href: "/programs", text: "Get Support" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
  // {
  //   image: "/images/healthcare10.jpg",
  //   badge: "Global Health",
  //   title: "One World,",
  //   subtitle: "One Health",
  //   description:
  //     "Connecting nations to address healthcare challenges through unity and cooperation.",
  //   primaryLink: { href: "/programs", text: "Join Movement" },
  //   secondaryLink: { href: "/contact", text: "Learn More" },
  // },
];
