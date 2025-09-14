// GrantSourcingCarouselData.ts

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

export const GrantSourcingCarouselData: Slide[] = [
  {
    image: "/grant-sourcing/grant-sourcing2.png",
    badge: "Grant Sourcing",
    title: "Empowering Projects and Communities,",
    subtitle: "Through Funding",
    description:
      "Access funding opportunities designed to support cultural programs, innovation, and sustainable development.",
    primaryLink: { href: "#programs", text: "Find Grants" },
    secondaryLink: { href: "/contact", text: "Apply Now" },
  },
  {
    image: "/grant-sourcing/grant-sourcing.png",
    badge: "Grant Sourcing",
    title: "Building Partnerships",
    subtitle: "For Growth",
    description:
      "We connect organizations with international funding bodies, creating partnerships that make cultural impact possible.",
    primaryLink: { href: "#programs", text: "View Opportunities" },
    secondaryLink: { href: "/contact", text: "Partner With Us" },
  },
  {
    image: "/grant-sourcing/grant-sourcing3.png",
    badge: "Grant Sourcing",
    title: "Investing in Culture",
    subtitle: "Securing the Future",
    description:
      "Sourcing grants to preserve heritage, empower communities, and drive cultural innovation across borders.",
    primaryLink: { href: "#programs", text: "Explore Funding" },
    secondaryLink: { href: "/contact", text: "Get Support" },
  },
];
