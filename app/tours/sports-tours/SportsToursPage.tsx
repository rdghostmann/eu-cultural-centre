"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Trophy, Users, Calendar, MapPin, Star, Shield } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"

const sportsPrograms = [
  {
    title: "ECC European Soccer Academy",
    description: "Elite football training with European coaches and international tournament participation.",
    icon: "⚽",
    duration: "2-4 weeks",
    features: ["Professional coaching", "Tournament play", "Cultural exchange", "Skill development"],
    ageGroup: "12-18 years",
  },
  {
    title: "International Sports Tournaments",
    description: "Competitive tournaments bringing together teams from across Europe and Africa.",
    icon: "🏆",
    duration: "1-2 weeks",
    features: ["Multi-sport events", "Team competitions", "Awards ceremonies", "Cultural activities"],
    ageGroup: "All ages",
  },
  {
    title: "Sports Exchange Programs",
    description: "Athletic and cultural exchange programs for sports teams and individual athletes.",
    icon: "🤝",
    duration: "1-3 weeks",
    features: ["Team exchanges", "Training camps", "Friendly matches", "Cultural immersion"],
    ageGroup: "Youth & Adult",
  },
  {
    title: "Sports Tourism Packages",
    description: "Comprehensive sports travel packages including training, competition, and sightseeing.",
    icon: "✈️",
    duration: "1-2 weeks",
    features: ["Travel arrangements", "Accommodation", "Training facilities", "Tourist activities"],
    ageGroup: "All levels",
  },
]

const upcomingTournaments = [
  {
    name: "ECC Youth Football Championship",
    date: "July 15-22, 2026",
    location: "Lagos, Nigeria",
    participants: "16 teams",
    status: "Registration Open",
  },
  {
    name: "Africa-Europe Basketball Exchange",
    date: "August 5-12, 2026",
    location: "Abuja, Nigeria",
    participants: "12 teams",
    status: "Applications Due",
  },
  {
    name: "International Athletics Meet",
    date: "September 10-15, 2026",
    location: "Kano, Nigeria",
    participants: "200+ athletes",
    status: "Coming Soon",
  },
]

export default function SportsToursPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: tournamentsRef, isInView: tournamentsInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-12 px-4 sm:py-20 sm:px-6">
        <motion.div className="absolute inset-0 bg-black/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
        <div className="relative z-10 max-w-2xl mx-auto sm:max-w-4xl" ref={heroRef}>
          <motion.div className="text-center" variants={staggerContainer} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
            <motion.div variants={staggerItem}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Sports Tours & Tournaments</Badge>
            </motion.div>
            <motion.h1 className="text-2xl sm:text-4xl font-bold mb-4" variants={staggerItem}>
              Sports Excellence & Cultural Exchange
            </motion.h1>
            <motion.p className="text-base sm:text-xl mb-6 text-green-100 max-w-xl mx-auto" variants={staggerItem}>
              Elite sports programs combining athletic development with cultural exchange, bringing together teams and athletes from Europe and Africa for competition, training, and friendship.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90 w-full sm:w-auto">
                  <Link href="#programs">
                    View Programs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent w-full sm:w-auto">
                  <Link href="/contact">Register a Team</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-ecc-beige">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Calendar, title: "Season", value: "Year-round" },
              { icon: Users, title: "Participants", value: "500+ annually" },
              { icon: Trophy, title: "Tournaments", value: "12+ events" },
              { icon: Shield, title: "Safety", value: "Certified coaches" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={staggerItem}
                whileHover={hoverLift}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-ecc-slate mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Sports Programs */}
      <section id="programs" className="py-16 lg:py-20" ref={programsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              Sports Programs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Comprehensive sports programs designed to develop athletic skills while
              fostering international friendships and cultural understanding.
            </p>
          </motion.div>

          {/* Program Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {sportsPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={hoverLift}
                className="flex"
              >
                <Card className="h-full w-full hover:shadow-lg transition-all duration-300 flex flex-col">
                  <CardHeader>
                    {/* Icon + Title */}
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="text-2xl sm:text-3xl lg:text-4xl"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -15, 15, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {program.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-base sm:text-lg lg:text-xl text-ecc-slate">
                          {program.title}
                        </CardTitle>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          <Badge variant="secondary">{program.duration}</Badge>
                          <Badge variant="outline">{program.ageGroup}</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <CardDescription className="text-sm sm:text-base text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col justify-between">
                    {/* Features */}
                    <motion.div
                      className="space-y-2 sm:space-y-3 mb-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {program.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-2"
                          variants={staggerItem}
                        >
                          <motion.div
                            className="w-2 h-2 bg-green-600 rounded-full"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-xs sm:text-sm text-gray-600">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-sm sm:text-base">
                          Learn More
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Upcoming Tournaments */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:py-20 bg-gray-50" ref={tournamentsRef}>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={tournamentsInView ? "visible" : "hidden"}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              Upcoming Tournaments
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              Join our exciting lineup of international sports tournaments and competitions.
            </p>
          </motion.div>

          {/* Tournament List */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={tournamentsInView ? "visible" : "hidden"}
          >
            {upcomingTournaments.map((tournament, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ x: 5, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      {/* Tournament Info */}
                      <div className="flex-grow">
                        <div className="flex items-center space-x-3 mb-2">
                          <motion.div
                            className="text-xl sm:text-2xl"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            🏆
                          </motion.div>
                          <h3 className="text-lg sm:text-xl font-bold text-ecc-slate">
                            {tournament.name}
                          </h3>
                        </div>
                        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{tournament.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{tournament.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{tournament.participants}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-start lg:items-end">
                        <Badge
                          variant={
                            tournament.status === "Registration Open"
                              ? "default"
                              : "secondary"
                          }
                          className="mb-2"
                        >
                          {tournament.status}
                        </Badge>
                        <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                          <Button className="w-full lg:w-auto bg-green-600 hover:bg-green-700"> {tournament.status === "Registration Open" ? "Register Now" : "Learn More"} </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              Hear from athletes and teams who have benefited from our sports exchange
              programs.
            </p>
          </motion.div>

          {/* Stories Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Lagos United FC",
                achievement: "Won ECC Youth Championship 2023",
                quote:
                  "The tournament was incredibly well-organized and provided our young players with invaluable international experience.",
                rating: 5,
              },
              {
                name: "Sarah Okafor",
                achievement: "Athletics Scholarship Recipient",
                quote:
                  "Through ECC's sports program, I received a scholarship to train in Europe. It changed my life completely.",
                rating: 5,
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={hoverLift}
                className="h-full"
              >
                <Card className="h-full px-4 py-6 sm:px-6">
                  <CardHeader>
                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-green-400 text-green-400"
                        />
                      ))}
                    </div>

                    {/* Name & Achievement */}
                    <CardTitle className="text-base sm:text-lg md:text-xl">
                      {story.name}
                    </CardTitle>
                    <CardDescription className="text-green-600 font-medium text-sm sm:text-base">
                      {story.achievement}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      "{story.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <CTASection
        title="Ready to Join the Competition?"
        description=" Register your team or individual athletes for our upcoming tournaments and sports exchange programs."
        primaryLabel="Register a Team"
        primaryHref="/contact"
        secondaryLabel="Book a Sport Tour"
        secondaryHref="/contact"
      />
    </div>

  )
}
