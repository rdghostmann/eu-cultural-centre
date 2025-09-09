"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Globe2, Users, Headphones, Languages, GraduationCap, ArrowRight } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { LanguageCoursePageCarouselData } from "@/lib/LanguageCoursePageCarouselData"

const languageCourses = [
  {
    title: "Beginner Language Programs",
    description: "Foundational courses for learners starting their journey in new languages.",
    icon: <BookOpen className="h-6 w-6" />,
    features: ["Basic vocabulary", "Grammar essentials", "Conversational practice", "Interactive exercises"],
    impact: "500+ beginners trained",
  },
  {
    title: "Intermediate & Advanced Courses",
    description: "Programs to refine fluency and expand language skills for confident communication.",
    icon: <GraduationCap className="h-6 w-6" />,
    features: ["Fluency workshops", "Cultural immersion", "Advanced writing", "Professional communication"],
    impact: "300+ learners advanced",
  },
  {
    title: "Multilingual Communication",
    description: "Developing multilingual skills for global networking and careers.",
    icon: <Globe2 className="h-6 w-6" />,
    features: ["Cross-cultural communication", "Business terminology", "Networking events", "Translation basics"],
    impact: "150+ professionals trained",
  },
  {
    title: "Language for Special Purposes",
    description: "Specialized courses tailored to specific fields and professional needs.",
    icon: <Languages className="h-6 w-6" />,
    features: ["Medical terminology", "Legal language", "Academic writing", "Tourism language"],
    impact: "100+ professionals supported",
  },
  {
    title: "Conversational Clubs",
    description: "Peer-driven learning spaces to boost confidence in everyday conversation.",
    icon: <Users className="h-6 w-6" />,
    features: ["Weekly meetups", "Native speakers", "Role-play scenarios", "Fun language games"],
    impact: "200+ participants engaged",
  },
  {
    title: "Digital Language Learning",
    description: "Blended learning with apps, online platforms, and audio-visual materials.",
    icon: <Headphones className="h-6 w-6" />,
    features: ["E-learning modules", "Virtual classrooms", "Podcasts & videos", "Mobile learning"],
    impact: "1,000+ learners online",
  },
]

export default function LanguageCoursePage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: coursesRef, isInView: coursesInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <HeaderSlider2 images={LanguageCoursePageCarouselData} />


      {/* Courses Section */}
      <section id="courses" className="mt-10 py-20" ref={coursesRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={coursesInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Language Learning Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginners to professionals, our language courses foster fluency, confidence, and cultural understanding.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={coursesInView ? "visible" : "hidden"}
          >
            {languageCourses.map((course, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-blue-100 rounded-lg text-blue-600"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {course.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-ecc-slate">{course.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {course.impact}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="space-y-3 mb-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {course.features.map((feature, idx) => (
                        <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                          <motion.div className="w-2 h-2 bg-blue-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Learn More</Button>
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
        title="Master a New Language Today"
        description="Expand your horizons and boost your opportunities by joining our language programs."
        primaryLabel="Start Learning"
        primaryHref="/contact"
        secondaryLabel="View All Courses"
        secondaryHref="/top-languages"
        className="bg-blue-600 text-white py-16 lg:py-20"
      />
    </div>
  )
}
