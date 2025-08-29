"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Book, School, Globe, Award, BookOpen } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import { ScholarshipPageCarouselData } from "@/lib/ScholarshipPageCarouselData"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"

const scholarshipPrograms = [
  {
    title: "Undergraduate Scholarships",
    description: "Supporting talented students pursuing bachelor's degrees locally and abroad.",
    icon: <School className="h-6 w-6" />,
    features: ["Full tuition support", "Stipends", "Mentorship", "Exchange opportunities"],
    impact: "500+ undergraduates funded",
  },
  {
    title: "Postgraduate Scholarships",
    description: "Advanced education funding for master's and PhD candidates.",
    icon: <Book className="h-6 w-6" />,
    features: ["Research grants", "University partnerships", "Conferences", "Publishing support"],
    impact: "200+ postgraduates supported",
  },
  {
    title: "International Exchange Programs",
    description: "Short-term and long-term study abroad opportunities.",
    icon: <Globe className="h-6 w-6" />,
    features: ["Cultural immersion", "Semester exchanges", "Travel grants", "Dual-degree programs"],
    impact: "300+ exchanges facilitated",
  },
  {
    title: "Merit Awards",
    description: "Recognizing and rewarding outstanding academic performance.",
    icon: <Award className="h-6 w-6" />,
    features: ["Merit-based funding", "Excellence awards", "Leadership recognition", "Innovation grants"],
    impact: "400+ awards granted",
  },
  {
    title: "Research & Innovation Grants",
    description: "Funding groundbreaking student-led projects and research.",
    icon: <BookOpen className="h-6 w-6" />,
    features: ["Project funding", "Lab access", "Publication assistance", "Global collaboration"],
    impact: "150+ projects funded",
  },
]

export default function ScholarshipPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        className="hidden h-[calc(100vh-100px)] relative text-white pt-14 pb-20 lg:py-32"
        style={{ background: "linear-gradient(135deg,#0f766e 0%,#14b8a6 100%)" }}
      >
        <motion.div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto relative z-10" ref={heroRef}>
          <motion.div
            className="max-w-4xl mx-auto text-center px-4"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30 shadow-lg backdrop-blur-sm">
                Education • Opportunity • Future
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
              variants={staggerItem}
            >
              Scholarship Programs
              <motion.span
                className="block text-3xl lg:text-5xl text-[#14b8a6] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                By ECC Nigeria
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg lg:text-2xl mb-8 text-[#e0f2fe] max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              variants={staggerItem}
            >
              Unlocking access to education and empowering future leaders through scholarships and grants.
            </motion.p>
            <motion.div className="flex space-x-2 justify-center" variants={staggerItem}>
              <Button asChild size="lg" className="bg-[#14b8a6] hover:bg-[#0f766e] text-white font-semibold shadow-lg">
                <Link href="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0f766e] bg-transparent font-semibold shadow"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
         <HeaderSlider2 images={ScholarshipPageCarouselData} />
   

      {/* Programs Section */}
      <section id="programs" className="mt-20 py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Scholarship Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer scholarships and awards that open doors for students at all levels of study.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {scholarshipPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-teal-100 rounded-lg text-teal-600"
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
                          <motion.div className="w-2 h-2 bg-teal-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/apply">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">Apply Now</Button>
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
        title="Empower Your Future"
        description="Our scholarships help students unlock their potential and create lasting impact. Apply now and take your education to the next level."
        primaryLabel="Start Application"
        primaryHref="/apply"
        secondaryLabel="Learn More"
        secondaryHref="/about"
        className="bg-teal-600 text-white py-16 lg:py-20"
      />
    </div>
  )
}
