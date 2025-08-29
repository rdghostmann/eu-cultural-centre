"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Globe, Award, Lightbulb, Target } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { EducationPageCarouselData } from "@/lib/EducationPageCarouselData"

const educationPrograms = [
  {
    title: "Academic Exchange Programs",
    description: "Semester and year-long academic exchanges with European universities.",
    icon: <Globe className="h-6 w-6" />,
    features: ["University partnerships", "Credit transfer", "Language support", "Cultural immersion"],
    participants: "500+ students annually",
  },
  {
    title: "Professional Development Workshops",
    description: "Skills-based workshops for educators, professionals, and students.",
    icon: <Lightbulb className="h-6 w-6" />,
    features: ["Industry experts", "Certification programs", "Networking opportunities", "Practical skills"],
    participants: "200+ professionals annually",
  },
  {
    title: "Cultural Education Initiatives",
    description: "Programs promoting cultural understanding and heritage preservation.",
    icon: <BookOpen className="h-6 w-6" />,
    features: ["Heritage workshops", "Language classes", "Art programs", "Cultural exchanges"],
    participants: "300+ participants annually",
  },
  {
    title: "Youth Leadership Programs",
    description: "Developing the next generation of cultural ambassadors and leaders.",
    icon: <Target className="h-6 w-6" />,
    features: ["Leadership training", "Mentorship programs", "Project management", "Public speaking"],
    participants: "150+ youth annually",
  },
]

const achievements = [
  { number: "1,000+", label: "Students Educated", icon: <Users className="h-8 w-8" /> },
  { number: "50+", label: "Partner Universities", icon: <Globe className="h-8 w-8" /> },
  { number: "25+", label: "Countries Reached", icon: <Award className="h-8 w-8" /> },
  { number: "95%", label: "Success Rate", icon: <Target className="h-8 w-8" /> },
]

export default function EducationPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: achievementsRef, isInView: achievementsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden h-[calc(100vh - 100px )] relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20">
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="container relative auto z-10" ref={heroRef}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Education & Knowledge Exchange</Badge>
            </motion.div>

            <motion.h1 className="text-4xl lg:text-5xl font-bold mb-6" variants={staggerItem}>
              Transforming Lives Through Education
            </motion.h1>

            <motion.p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto px-4" variants={staggerItem}>
              Comprehensive educational programs that bridge cultures, build capacity, and create opportunities for
              academic and professional growth across Europe and Africa.
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
                  className="border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
                >
                  <Link href="/contact">Apply Now</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeaderSlider2 images={EducationPageCarouselData} />


      {/* Education Programs */}
      <section id="programs" className="mt-10 py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Education Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive educational initiatives designed to foster cross-cultural understanding and academic
              excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {educationPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-emerald-100 rounded-lg text-emerald-600"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {program.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-base lg:text-xl text-slate-800">{program.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {program.participants}
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
                          <motion.div className="w-2 h-2 bg-emerald-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50" ref={achievementsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Measurable results from our commitment to educational excellence and cultural exchange.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4"
            variants={staggerContainer}
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div
                  className="p-4 bg-emerald-100 rounded-full w-fit mx-auto mb-4 text-emerald-600"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {achievement.icon}
                </motion.div>
                <motion.div
                  className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {achievement.number}
                </motion.div>
                <p className="text-gray-600">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Future?"
        description=" Join our educational programs and become part of a global community of learners and leaders."
        primaryLabel="Apply Today"
        primaryHref="/contact"
        secondaryLabel="Explore Exchange"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />

    </div>
  )
}
