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
    image: "/healthcare/health-care.png",
    badge: "Health Care",
    title: "Empowering Healthy Communities",
    subtitle: "Wellness For All",
    description:
      "Promoting wellness and preventive care for stronger, healthier communities.",
    primaryLink: { href: "#programs", text: "Join Program" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/healthcare/health-care1.png",
    badge: "Health Care",
    title: "Global Health Partnerships",
    subtitle: "Collaborate For Impact",
    description:
      "Advancing healthcare through partnerships between African and European institutions.",
    primaryLink: { href: "#programs", text: "Partner With Us" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/healthcare/health-care2.png",
    badge: "Health Care",
    title: "Training For Tomorrow",
    subtitle: "Save Lives Today",
    description:
      "Workshops and training for healthcare professionals to improve global health.",
    primaryLink: { href: "#programs", text: "Start Training" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/healthcare/health-care3.png",
    badge: "Health Care",
    title: "Building Medical Capacity",
    subtitle: "Expert Training",
    description:
      "Empowering professionals with skills for better healthcare delivery worldwide.",
    primaryLink: { href: "#programs", text: "Start Training" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
];