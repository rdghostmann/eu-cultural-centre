"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Clock, Award, Microscope, Globe } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { StudyFieldTripData } from "@/lib/StudyFieldTripData"

const fieldTripTypes = [
  {
    title: "Cultural Immersion Trips",
    description: "Short-term cultural learning experiences for students and educators.",
    icon: <Globe className="h-6 w-6" />,
    duration: "3-7 days",
    subjects: ["History", "Anthropology", "Cultural Studies", "Languages"],
    features: ["Museum visits", "Cultural sites", "Local interactions", "Guided tours"],
  },
  {
    title: "Educational Study Tours",
    description: "Academic field trips aligned with curriculum objectives and learning outcomes.",
    icon: <BookOpen className="h-6 w-6" />,
    duration: "5-10 days",
    subjects: ["Geography", "Environmental Science", "Social Studies", "Arts"],
    features: ["Expert lectures", "Hands-on activities", "Research projects", "Group discussions"],
  },
  {
    title: "Professional Development Trips",
    description: "Specialized trips for educators and cultural professionals.",
    icon: <Award className="h-6 w-6" />,
    duration: "1-2 weeks",
    subjects: ["Education", "Museum Studies", "Cultural Management", "Arts Administration"],
    features: ["Professional networks", "Best practices", "Skill workshops", "Certification"],
  },
  {
    title: "Research Field Studies",
    description: "Intensive field research opportunities for advanced students and researchers.",
    icon: <Microscope className="h-6 w-6" />,
    duration: "2-4 weeks",
    subjects: ["Archaeology", "Ethnography", "Environmental Studies", "Urban Planning"],
    features: ["Data collection", "Field methods", "Local partnerships", "Research support"],
  },
]

const sampleItineraries = [
  {
    title: "5-Day Cultural Heritage Study Trip",
    days: [
      {
        day: 1,
        focus: "Arrival & Orientation",
        activities: ["Welcome briefing", "Cultural overview", "Safety orientation"],
      },
      { day: 2, focus: "Ancient History", activities: ["Archaeological sites", "Museum visits", "Expert lectures"] },
      {
        day: 3,
        focus: "Living Culture",
        activities: ["Traditional crafts", "Community visits", "Cultural performances"],
      },
      {
        day: 4,
        focus: "Modern Context",
        activities: ["Contemporary art", "Urban development", "Student presentations"],
      },
      {
        day: 5,
        focus: "Reflection & Departure",
        activities: ["Group discussions", "Final presentations", "Departure"],
      },
    ],
  },
]

export default function StudyFieldTripsPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: typesRef, isInView: typesInView } = useScrollAnimation()
  const { ref: itineraryRef, isInView: itineraryInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 text-white py-12 px-4 sm:py-20 sm:px-6">
        <motion.div className="absolute inset-0 bg-black/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
        <div className="relative z-10 max-w-2xl mx-auto sm:max-w-4xl" ref={heroRef}>
          <motion.div className="text-center" variants={staggerContainer} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
            <motion.div variants={staggerItem}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Study & Field Trips</Badge>
            </motion.div>
            <motion.h1 className="text-2xl sm:text-4xl font-bold mb-4" variants={staggerItem}>
              Educational Field Studies & Learning Expeditions
            </motion.h1>
            <motion.p className="text-base sm:text-xl mb-6 text-cyan-100 max-w-xl mx-auto" variants={staggerItem}>
              Transformative educational experiences that bring learning to life through immersive field studies, cultural exploration, and hands-on research opportunities for students and educators.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90 w-full sm:w-auto">
                  <Link href="#field-trips">
                    Explore Field Trips <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent w-full sm:w-auto">
                  <Link href="/contact">Plan a Study Trip</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeaderSlider2 images={StudyFieldTripData} />



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
              { icon: Clock, title: "Duration", value: "3 days - 4 weeks" },
              { icon: Users, title: "Group Size", value: "10-30 students" },
              { icon: BookOpen, title: "Subjects", value: "15+ disciplines" },
              { icon: Award, title: "Certification", value: "Available" },
            ].map((item, index) => (
              <motion.div key={index} className="text-center" variants={staggerItem} whileHover={hoverLift}>
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full mb-3"
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

      {/* Field Trip Types */}
      <section id="field-trips" className="py-20" ref={typesRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={typesInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Field Trip Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse educational experiences tailored to different learning objectives and academic levels.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={typesInView ? "visible" : "hidden"}
          >
            {fieldTripTypes.map((trip, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-teal-100 rounded-lg text-teal-600"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {trip.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-ecc-slate">{trip.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {trip.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{trip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-ecc-slate mb-2">Subject Areas:</h4>
                        <div className="flex flex-wrap gap-1">
                          {trip.subjects.map((subject, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-ecc-slate mb-2">Key Features:</h4>
                        <motion.div
                          className="space-y-2"
                          variants={staggerContainer}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {trip.features.map((feature, idx) => (
                            <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                              <motion.div className="w-2 h-2 bg-teal-600 rounded-full" whileHover={{ scale: 1.5 }} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                    <motion.div className="mt-6" whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">Learn More</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section
        className="py-16 px-4 sm:px-6 md:px-8 lg:py-20 bg-gray-50"
        ref={itineraryRef}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={itineraryInView ? "visible" : "hidden"}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              Sample Itinerary
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              A structured learning journey combining academic content with cultural
              immersion.
            </p>
          </motion.div>

          {/* Itinerary List */}
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={itineraryInView ? "visible" : "hidden"}
          >
            {sampleItineraries[0].days.map((day, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:space-x-4 mb-6"
                variants={staggerItem}
                whileHover={{ x: 5 }}
              >
                {/* Day Badge */}
                <motion.div
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mb-3 sm:mb-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-bold text-sm sm:text-base">
                    Day {day.day}
                  </span>
                </motion.div>

                {/* Card */}
                <Card className="flex-grow w-full px-4 py-5 sm:px-6">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg md:text-xl text-ecc-slate">
                      {day.focus}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {day.activities.map((activity, idx) => (
                        <motion.div
                          key={idx}
                          className="text-sm sm:text-base text-gray-600 bg-gray-100 p-2 rounded"
                          variants={staggerItem}
                        >
                         {activity}
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Learning Outcomes */}
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
              Learning Outcomes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              Measurable educational benefits that enhance academic and personal development.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Enhanced Critical Thinking",
                description:
                  "Develop analytical skills through real-world problem solving and field observations.",
                icon: "🧠",
              },
              {
                title: "Cultural Competency",
                description: "Gain deep understanding of diverse cultures and global perspectives.",
                icon: "🌍",
              },
              {
                title: "Research Skills",
                description:
                  "Learn field research methods, data collection, and analysis techniques.",
                icon: "🔍",
              },
              {
                title: "Collaborative Learning",
                description:
                  "Build teamwork and communication skills through group projects and discussions.",
                icon: "🤝",
              },
              {
                title: "Personal Growth",
                description:
                  "Develop independence, confidence, and adaptability through new experiences.",
                icon: "🌱",
              },
              {
                title: "Academic Achievement",
                description:
                  "Improve academic performance through experiential and immersive learning.",
                icon: "📈",
              },
            ].map((outcome, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="text-center h-full px-4 py-6 sm:px-6">
                  <CardHeader>
                    <motion.div
                      className="text-4xl mb-3"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {outcome.icon}
                    </motion.div>
                    <CardTitle className="text-base sm:text-lg md:text-xl text-ecc-slate">
                      {outcome.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base text-gray-600">
                      {outcome.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      {/* <section className="py-20 bg-ecc-slate text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Plan Your Study Trip?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Create unforgettable learning experiences for your students with our expertly designed field study
              programs.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem} whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90">
                  <Link href="/contact">
                    Plan a Study Trip <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={staggerItem} whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ecc-slate bg-transparent"
                >
                  <Link href="/contact">Request Information</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      <CTASection
        title="Ready to Plan Your Study Trip?"
        description="Create unforgettable learning experiences for your students with our expertly designed field study programs. Contact us to customize your educational adventure."
        primaryLabel="Plan a Study Trip"
        primaryHref="/contact"
        secondaryLabel="Request Information"
        secondaryHref="/contact"
      />
    </div>
  )
}
