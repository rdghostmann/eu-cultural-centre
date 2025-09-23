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

export const ContactPageCarouselData: Slide[] = [
  {
    image: "/contact-us/contact-us-1.png",
    badge: "Get In Touch",
    title: "Connect With Us",
    subtitle: "We're Here For You",
    description: "Reach out for partnership, support, or general inquiries. Our team is ready to assist you.",
    primaryLink: { href: "#contact-form", text: "Contact Now" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/contact-us/contact-us-2.png",
    badge: "Get In Touch",
    title: "Partner With ECC",
    subtitle: "Grow Together",
    description: "Collaborate with us on cultural, educational, and community projects across continents.",
    primaryLink: { href: "#contact-form", text: "Start Partnership" },
    secondaryLink: { href: "/about", text: "Our Mission" },
  },
  {
    image: "/contact-us/contact-us-3.png",
    badge: "Get In Touch",
    title: "Share Your Ideas",
    subtitle: "Shape Our Future",
    description: "We value your feedback and suggestions to help us improve and serve you better.",
    primaryLink: { href: "#contact-form", text: "Send Feedback" },
    secondaryLink: { href: "/about", text: "Get Involved" },
  },
  {
    image: "/contact-us/contact-us-3.png",
    badge: "Get In Touch",
    title: "Join Our Community",
    subtitle: "Be Part Of ECC",
    description: "Subscribe for updates and opportunities to participate in our programs and events.",
    primaryLink: { href: "#contact-form", text: "Subscribe" },
    secondaryLink: { href: "/about", text: "Discover More" },
  },
];