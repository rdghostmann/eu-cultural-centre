"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Palette, Music, Camera, Theater, Brush, Film } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { CulturalPageCarouselData } from "@/lib/CulturalPageCarouseData"

const culturalPrograms = [
  {
    title: "Visual Arts Exhibitions",
    description: "Contemporary and traditional art exhibitions showcasing African and European artists.",
    icon: <Palette className="h-6 w-6" />,
    features: ["Gallery exhibitions", "Artist showcases", "Art fairs", "Cultural exchanges"],
    impact: "50+ exhibitions annually",
  },
  {
    title: "Performing Arts Festival",
    description: "Annual festival celebrating music, dance, and theater from across continents.",
    icon: <Theater className="h-6 w-6" />,
    features: ["Live performances", "Cultural shows", "Artist residencies", "Community workshops"],
    impact: "10,000+ audience members",
  },
  {
    title: "Heritage Preservation",
    description: "Digital and physical preservation of cultural heritage sites and artifacts.",
    icon: <Camera className="h-6 w-6" />,
    features: ["Digital archiving", "Site documentation", "Restoration projects", "Community education"],
    impact: "25+ heritage sites documented",
  },
  {
    title: "Music & Sound Arts",
    description: "Programs promoting traditional and contemporary music across cultures.",
    icon: <Music className="h-6 w-6" />,
    features: ["Music festivals", "Recording projects", "Artist collaborations", "Educational workshops"],
    impact: "100+ musicians supported",
  },
  {
    title: "Creative Workshops",
    description: "Hands-on workshops in various artistic disciplines for all skill levels.",
    icon: <Brush className="h-6 w-6" />,
    features: ["Art classes", "Craft workshops", "Digital arts", "Traditional techniques"],
    impact: "500+ participants trained",
  },
  {
    title: "Cultural Documentation",
    description: "Film and media projects documenting cultural practices and stories.",
    icon: <Film className="h-6 w-6" />,
    features: ["Documentary films", "Oral history", "Cultural mapping", "Digital storytelling"],
    impact: "20+ documentaries produced",
  },
]

const upcomingEvents = [
  {
    title: "African Heritage Month",
    date: "February 1-28, 2026",
    location: "Multiple Venues",
    type: "Cultural Festival",
    description: "Month-long celebration of African heritage with exhibitions, performances, and workshops.",
  },
  {
    title: "Contemporary Art Showcase",
    date: "March 15-30, 2026",
    location: "Lagos Art Gallery",
    type: "Exhibition",
    description: "Featuring emerging artists from Nigeria and Europe in a collaborative exhibition.",
  },
  {
    title: "Traditional Music Festival",
    date: "April 20-22, 2026",
    location: "National Theatre",
    type: "Music Festival",
    description: "Three-day festival celebrating traditional music from across Africa and Europe.",
  },
]

export default function CulturePage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: eventsRef, isInView: eventsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        className="hidden h-[calc(100vh - 100px )] relative bg-gradient-to-br from-purple-600 via-pink-600 to-rose-700 text-white py-20">
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </section>
      <HeaderSlider2 images={CulturalPageCarouselData} />

      {/* Cultural Programs */}
      <section id="programs" className="mt-7 py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">Cultural Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs celebrating and preserving cultural heritage while fostering artistic innovation
              and cross-cultural collaboration.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {culturalPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-purple-100 rounded-lg text-purple-600"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {program.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-ecc-slate">{program.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {program.impact}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="space-y-3 mb-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {program.features.map((feature, idx) => (
                        <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                          <motion.div className="w-2 h-2 bg-purple-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50" ref={eventsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">Upcoming Cultural Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exciting cultural events, exhibitions, and festivals celebrating the rich heritage of Africa
              and Europe.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            {upcomingEvents.map((event, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-2">{event.location}</CardDescription>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </CardHeader>
                  <CardContent>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Cultural Community"
        description="Be part of a vibrant community celebrating and preserving cultural heritage across continents."
        primaryLabel="Get Involved Today"
        primaryHref="/contact"
        secondaryLabel="View All Events"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
