"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Trophy, MapPin, Plane, Calendar, Users, Medal } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { SportPageCarouselData } from "@/lib/SportsPageCarouselData"

const sportsPrograms = [
  {
    title: "International Sports Tournaments",
    description:
      "Organizing and hosting international sports competitions that bring together athletes from Europe and Africa.",
    icon: <Trophy className="h-6 w-6" />,
    features: ["Multi-sport events", "Cultural ceremonies", "Athlete exchanges", "Youth competitions"],
    impact: "500+ athletes participated",
  },
  {
    title: "Sports Tourism Packages",
    description: "Curated travel experiences combining sports events with cultural exploration and education.",
    icon: <Plane className="h-6 w-6" />,
    features: ["Event packages", "Cultural tours", "Local experiences", "Group travel"],
    impact: "1,000+ tourists served",
  },
  {
    title: "Youth Sports Development",
    description: "Programs developing young athletes while promoting cultural understanding through sport.",
    icon: <Users className="h-6 w-6" />,
    features: ["Training camps", "Coaching clinics", "Equipment support", "Scholarship programs"],
    impact: "2,000+ youth trained",
  },
  {
    title: "Cultural Sports Events",
    description: "Traditional and cultural sports events celebrating heritage and promoting intercultural dialogue.",
    icon: <Medal className="h-6 w-6" />,
    features: ["Traditional games", "Cultural festivals", "Heritage sports", "Community events"],
    impact: "50+ events organized",
  },
  {
    title: "Sports Facility Tours",
    description: "Educational tours of world-class sports facilities and training centers.",
    icon: <MapPin className="h-6 w-6" />,
    features: ["Stadium tours", "Training facilities", "Behind-the-scenes access", "Meet athletes"],
    impact: "5,000+ visitors hosted",
  },
  {
    title: "Sports Education Programs",
    description: "Educational initiatives using sports as a tool for learning and cultural exchange.",
    icon: <Calendar className="h-6 w-6" />,
    features: ["School programs", "Workshops", "Leadership training", "Life skills"],
    impact: "3,000+ students reached",
  },
]

const upcomingEvents = [
  {
    title: "Africa-Europe Youth Football Championship",
    date: "June 15-25, 2026",
    location: "Lagos, Nigeria",
    participants: "16 teams",
    description: "Annual championship bringing together the best youth football teams from both continents.",
  },
  {
    title: "Traditional Sports Festival",
    date: "August 10-12, 2026",
    location: "Abuja, Nigeria",
    participants: "200+ athletes",
    description: "Celebrating traditional African and European sports and games.",
  },
  {
    title: "International Athletics Meet",
    date: "September 20-22, 2026",
    location: "National Stadium",
    participants: "300+ athletes",
    description: "Track and field competition featuring emerging talents from across continents.",
  },
]

export default function SportsPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: eventsRef, isInView: eventsInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden h-[calc(100vh - 100px )] marker:relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-700 text-white py-20">
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
            y: [0, -25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-lg"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="container relative auto z-10" ref={heroRef}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Sports, Tourism & Events</Badge>
            </motion.div>

            <motion.h1 className="text-4xl lg:text-5xl font-bold mb-6" variants={staggerItem}>
              Sports as a Bridge Between Cultures
            </motion.h1>

            <motion.p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto" variants={staggerItem}>
              Using sports and travel as powerful tools for education, cultural exchange, and building lasting
              connections between communities across Europe and Africa.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90">
                  <Link href="#programs">
                    Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-700 bg-transparent"
                >
                  <Link href="/contact">Join an Event</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
       <HeaderSlider2 images={SportPageCarouselData} />

   
      {/* Sports Programs */}
      <section id="programs" className="py-20 mt-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Sports Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sports and tourism programs that combine athletic excellence with cultural education and
              international cooperation.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {sportsPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-red-100 rounded-lg text-red-600"
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
                          <motion.div className="w-2 h-2 bg-red-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-red-600 hover:bg-red-700">Learn More</Button>
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
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Upcoming Sports Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exciting sports competitions and cultural celebrations that bring communities together.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            {upcomingEvents.map((event, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Sports Event</Badge>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      {event.location}
                    </CardDescription>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{event.participants}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </CardHeader>
                  <CardContent>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-red-600 hover:bg-red-700">Register Now</Button>
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
        title="Ready to Play?"
        description="Join our sports community and experience the power of athletics in building cultural bridges."
        primaryLabel="Join a Program "
        primaryHref="/contact"
        secondaryLabel="Plan a Tour"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
