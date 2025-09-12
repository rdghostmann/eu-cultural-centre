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
    image: "/sample/banner-1.png",
    badge: "Grant Sourcing",
    title: "Celebrate Creativity,",
    subtitle: "Across Borders",
    description:
      "Explore international exhibitions that showcase the richness of African and European cultures.",
    primaryLink: { href: "#programs", text: "Visit Exhibition" },
    secondaryLink: { href: "/contact", text: "Host an Exhibition" },
  },
  {
    image: "/sample/banner-2.png",
    badge: "Grant Sourcing",
    title: "Masterpieces,",
    subtitle: "On Display",
    description:
      "From traditional to contemporary, discover inspiring visual art from emerging and renowned artists.",
    primaryLink: { href: "#programs", text: "Explore Visual Arts" },
    secondaryLink: { href: "/contact", text: "Learn More" },
  },
  {
    image: "/sample/banner-1.png",
    badge: "Grant Sourcing",
    title: "Preserving History,",
    subtitle: "For Tomorrow",
    description:
      "Exhibitions that highlight cultural artifacts and heritage, preserving them for future generations.",
    primaryLink: { href: "#programs", text: "See Heritage" },
    secondaryLink: { href: "/contact", text: "Support Preservation" },
  },
 ];
