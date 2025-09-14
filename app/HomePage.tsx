"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight, Users, Globe, Heart, Lightbulb, Calendar, Newspaper, Camera,
  BookOpen, Palette, Leaf, HandCoins , Accessibility, Users2, Trophy, FlaskConical, Rocket
} from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import { HomePageCarouselData } from "@/lib/HomePageCarouselData"
import HeaderSlider from "@/components/CustomSlider/HeaderSlider"
import Partners from "@/components/Partners/Partners"
import { useTranslations } from "next-intl"

const areasOfWork = [
  { title: "Education & Knowledge Exchange", description: "Learning, capacity building and academic partnerships connecting continents.", icon: BookOpen, href: "/education" },
  { title: "Culture, Arts & Heritage", description: "Showcase, preserve and celebrate visual and performing arts.", icon: Palette, href: "/culture" },
  { title: "Environment & Climate Action", description: "Climate education and community action for a greener future.", icon: Leaf, href: "/environment" },
  { title: "Inclusion & Accessibility", description: "Ensuring all programs are accessible and inclusive for everyone.", icon: Accessibility, href: "/inclusion" },
  { title: "People-to-People Cooperation", description: "Cultural diplomacy and partnerships linking civil society.", icon: Users2, href: "/cooperation" },
  { title: "Sports, Tourism & Events", description: "Sports and travel as tools for education and cultural exchange.", icon: Trophy, href: "/sports" },
  { title: "Creative & Cultural Research", description: "Research and innovation strengthening cultural sectors.", icon: FlaskConical, href: "/research" },
  { title: "Innovation & New Media", description: "Supporting creative startups and tech for culture.", icon: Rocket, href: "/innovation" },
  { title: "Grant Sourcing", description: "Identifying and securing funding opportunities to sustain cultural initiatives.", icon: HandCoins , href: "/grant-sourcing" },
]

const stats = [
  { label: "Active Programs", value: "50+", icon: Users },
  { label: "Partner Countries", value: "25+", icon: Globe },
  { label: "Lives Impacted", value: "10K+", icon: Heart },
  { label: "Innovation Projects", value: "100+", icon: Lightbulb },
]

const upcomingEvents = [
  { title: "African Heritage Festival", date: "March 15-17, 2026", location: "Lagos Cultural Center", type: "Cultural Event", image: "/events/event2.png" },
  { title: "Youth Innovation Summit", date: "April 8-10, 2026", location: "Abuja Tech Hub", type: "Innovation", image: "/events/event3.png" },
  { title: "International Sports Tournament", date: "May 20-25, 2026", location: "National Stadium", type: "Sports", image: "/events/event4.png" },
]

const programs = [
  { title: "Artist Residency Program", description: "3-month residencies for emerging artists from Europe and Africa", duration: "3 months", applications: "Open", image: "/programs/program1.jpg" },
  { title: "Cultural Research Fellowship", description: "Research opportunities for scholars in cultural studies", duration: "6 months", applications: "Closing Soon", image: "/programs/program2.png" },
  { title: "Youth Leadership Academy", description: "Leadership development program for young cultural ambassadors", duration: "4 weeks", applications: "Open", image: "/programs/program3.png" },
]

const newsItems = [
  { title: "New Partnership with European Cultural Foundation", excerpt: "ECC Nigeria announces strategic partnership to expand cultural exchange programs...", date: "January 15, 2026", category: "Partnership", image: "/news/news1.jpg" },
  { title: "Research Publication: Digital Heritage in Africa", excerpt: "Our latest research explores the digitization of African cultural heritage...", date: "January 10, 2026", category: "Research", image: "/news/news2.jpg" },
  { title: "Youth Exchange Program Graduates 50 Students", excerpt: "Celebrating the success of our latest cohort of cultural ambassadors...", date: "January 5, 2026", category: "Education", image: "/news/news3.jpg" },
]

export default function HomePage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation()
  const { ref: areasRef, isInView: areasInView } = useScrollAnimation()
  const { ref: eventsRef, isInView: eventsInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: newsRef, isInView: newsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  const t = useTranslations("HomePage")

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <HeaderSlider images={HomePageCarouselData} />

      {/* Stats Section */}
      <section
        className="py-16 relative transition-colors duration-300
          bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#68b684]"
        ref={statsRef}
      >
        <div className="container mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={staggerItem} whileHover={hoverLift}>
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#68b684] via-[#8F770A] to-[#205375] rounded-full mb-4 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-7 w-7 text-white" />
                </motion.div>
                <motion.div
                  className="text-3xl font-extrabold text-[#205375] dark:text-[#68b684] mb-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-[#68b684] dark:text-[#8F770A] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Areas of Work */}
      <section id="all-programs" className="py-20 relative transition-colors duration-300
          bg-gradient-to-br from-[#181f2a] via-[#205375] to-[#68b684]"
        ref={areasRef}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-16 px-4"
            variants={fadeInUp}
            initial="hidden"
            animate={areasInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
              {t("areaofworkh2")}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto px-4">
              {t("areaofworkp")}
            </p>
          </motion.div>
          <motion.div
            className="px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 "
            variants={staggerContainer}
            initial="hidden"
            animate={areasInView ? "visible" : "hidden"}
          >
            {areasOfWork.map((area, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center bg-[#1a2332]/80 border border-[#205375]/40 rounded-2xl shadow-xl h-full flex flex-col items-center p-8 transition-all duration-300 backdrop-blur-md hover:bg-[#68b684]/10 hover:border-[#68b684]">
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#205375]/40 text-[#68b684] shadow-lg">
                      <area.icon className="h-8 w-8" />
                    </span>
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-white">{area.title}</h3>
                  <p className="text-sm text-gray-200 mb-6 text-center">{area.description}</p>
                  <motion.div whileHover={hoverScale}>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-[#8F770A] bg-white hover:text-[#68b684] font-semibold"
                    >
                      <Link href={area.href}>
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events */}
      <section
        className="py-20 transition-colors duration-300
          bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#68b684]"
        ref={eventsRef}
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-4 md:px-8"
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">Upcoming Events</h2>
            <p className="text-xl text-[#68b684] max-w-3xl mx-auto">
              Join us for exciting cultural events, festivals, and educational programs throughout the year.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8"
            variants={staggerContainer}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            {upcomingEvents.map((event, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="overflow-hidden h-full bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-md hover:bg-[#68b684]/10 hover:border-[#68b684]">
                  <motion.div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-1 text-slate-700" />
                        {event.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-700">{event.title}</CardTitle>
                    <CardDescription className="flex items-center text-[#68b684]">
                      <Camera className="h-4 w-4 mr-1" />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-[#68b684] hover:bg-[#205375] text-white font-semibold">
                          Learn More
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="border-[#205375] text-[#205375] hover:bg-[#205375] hover:text-white bg-transparent font-semibold shadow">
                <Link href="/events">
                  View All Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section id="#programs" className="py-20 relative transition-colors duration-300 bg-gradient-to-br from-[#181f2a] via-[#205375] to-[#68b684]"
        ref={programsRef}
      >
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="container relative z-10 mx-auto">
          <motion.div
            className="text-center mb-16 px-4"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">Programs & Residencies</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto px-7">
              Immersive programs and residency opportunities for artists, researchers, and cultural professionals.
            </p>
          </motion.div>
          <motion.div
            className="grid lg:grid-cols-4 gap-8 px-4 md:px-32 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {programs.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="overflow-hidden h-full bg-[#1a2332]/80 border border-[#205375]/40 rounded-2xl shadow-xl backdrop-blur-md hover:bg-[#68b684]/10 hover:border-[#68b684]">
                  <motion.div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${program.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{program.duration}</Badge>
                      <Badge variant={program.applications === "Open" ? "default" : "destructive"}>
                        {program.applications}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{program.title}</CardTitle>
                    <CardDescription className="text-gray-200">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-[#68b684] hover:bg-[#8F770A] text-white font-semibold">
                          {program.applications === "Open" ? "Apply Now" : "Learn More"}
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={programsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#205375] bg-transparent font-semibold shadow">
                <Link href="/#programs">
                  View All Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Partners */}
      <Partners />
      {/* <PartnersSlider /> */}

      {/* News & Research Publications */}
      <section
        ref={newsRef}
        className="py-20 bg-gradient-to-b from-[#f5f5dc] via-[#dbeafe] to-[#205375]"
      >
        <div className="container mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-16 px-4"
            variants={fadeInUp}
            initial="hidden"
            animate={newsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
              News & Research
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay updated with our latest news, research publications, and insights
              from the cultural sector.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8"
            variants={staggerContainer}
            initial="hidden"
            animate={newsInView ? "visible" : "hidden"}
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={hoverLift}
              >
                {/* <Card className="overflow-hidden h-full bg-[#1a2332]/80 border border-[#205375]/40 rounded-2xl shadow-xl backdrop-blur-md hover:bg-[#68b684]/10 hover:border-[#68b684]"> */}
                <Card className="overflow-hidden h-full border border-[#205375]/40 rounded-2xl shadow-xl backdrop-blur-md hover:border-[#68b684]">
                  <motion.div
                    className="h-40 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-sm text-[#1a2332]">{item.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight text-[#205375]">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/news-research">
                        {/* Gradient Button */}
                        <Button
                          variant="ghost"
                          className="py-2 px-4 h-auto bg-[#205375] text-white font-semibold hover:from-[#68b684] hover:to-[#205375]"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View All */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={newsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-[#f5f5dc] text-[#205375] font-semibold shadow-lg hover:opacity-90"
              >
                <Link href="/news-research">
                  <Newspaper className="mr-2 h-5 w-5" />
                  View All News
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <CTASection
        title="Ready to Make a Difference?"
        description=" Join our community of changemakers, cultural ambassadors, and innovators working to build bridges between
        Europe and Africa."
        primaryLabel="Get Involved Today"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}