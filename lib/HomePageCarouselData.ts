// HomePageCarouselData.ts
import slide1 from "/public/front-page1.jpg"
import slide2 from "/public/front-page2.jpg"
import slide3 from "/public/front-page3.jpg"
import slide4 from "/public/front-page6.jpg"
import slide5 from "/public/front-page10.jpg"


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

export const HomePageCarouselData: Slide[] = [

  {
    image: "/homepageslideshow/front-page1.png",
    badge: "Connecting Cultures",
    title: "Join Our Network,",
    subtitle: "Transform Healthcare",
    description: "Promoting cultural dialogue and sustainable partnerships across continents.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/homepageslideshow/front-page2.png",
    badge: "Building Bridges",
    title: "Empower Patients,",
    subtitle: "Anytime, Anywhere",
    description: "Bridging Africa and Europe through shared heritage and innovation.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/homepageslideshow/front-page3.png",
    badge: "Creating Opportunities",
    title: "Advance Your Practice,",
    subtitle: "With Telemedicine",
    description: "Celebrating diversity and fostering intercultural understanding globally.",
    primaryLink: { href: "#programs", text: "Get Involved" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/homepageslideshow/front-page6.png",
    badge: "Art as a Universal Language",
    title: "Unite Through Art,",
    subtitle: "Inspire Generations",
    description: "Art as a universal language connecting Africa and Europe.",
    primaryLink: { href: "#programs", text: "Explore Programs" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  {
    image: "/homepageslideshow/front-page10.png",
    badge: "Education Without Borders",
    title: "Knowledge For All",
    subtitle: "Global Learning",
    description: "Supporting cultural education that empowers communities and individuals worldwide.",
    primaryLink: { href: "/education", text: "Our Work" },
    secondaryLink: { href: "/about", text: "Learn More" },
  },
  // {
  //   image: "/public/homepageslideshow/front-page6.png",
  //   badge: "Innovation Meets Tradition",
  //   title: "Shape The Future,",
  //   subtitle: "Together",
  //   description: "Blending modern ideas with heritage to drive cultural growth.",
  //   primaryLink: { href: "/initiatives", text: "Discover More" },
  //   secondaryLink: { href: "/about", text: "Learn More" },
  // },
  // {
  //   image: "/public/homepageslideshow/front-page7.png",
  //   badge: "Preserve Heritage • Embrace Identity",
  //   title: "Celebrate Heritage,",
  //   subtitle: "Preserve Identity",
  //   description: "Preserving cultural heritage while encouraging cross-continental collaboration.",
  //   primaryLink: { href: "/heritage", text: "Learn More" },
  //   secondaryLink: { href: "/about", text: "Explore ECC" },
  // },
  // {
  //   image: "/public/homepageslideshow/front-page8.png",
  //   badge: "Dialogue Across Continents",
  //   title: "Building Bridges,",
  //   subtitle: "Connecting People",
  //   description: "Facilitating cultural exchange between Africa, Europe, and the world.",
  //   primaryLink: { href: "#programs", text: "Get Involved" },
  //   secondaryLink: { href: "/about", text: "Our Mission" },
  // },
  // {
  //   image: "/public/homepageslideshow/front-page9.png",
  //   badge: "Empowering the Next Generation",
  //   title: "Inspire Youth,",
  //   subtitle: "Shape Tomorrow",
  //   description: "Empowering the next generation through culture and education initiatives.",
  //   primaryLink: { href: "/youth", text: "Join Us" },
  //   secondaryLink: { href: "/about", text: "Learn More" },
  // },
  // {
  //   image: "/public/homepageslideshow/front-page10.png",
  //   badge: "Global Connections • Shared Futures",
  //   title: "Global Connections,",
  //   subtitle: "Shared Futures",
  //   description: "Uniting communities through dialogue, creativity, and shared opportunities.",
  //   primaryLink: { href: "#programs", text: "Get Involved" },
  //   secondaryLink: { href: "/about", text: "Learn More" },
  // },
];
