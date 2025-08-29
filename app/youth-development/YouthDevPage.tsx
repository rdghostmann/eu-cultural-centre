"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, GraduationCap, Users, Laptop, Briefcase, BookOpen, Lightbulb } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { YouthDevPageCarouselData } from "@/lib/YouthDevPageCarouselData"

const youthPrograms = [
  {
    title: "Leadership Training",
    description: "Workshops to develop leadership, teamwork, and problem-solving skills.",
    icon: <GraduationCap className="h-6 w-6" />,
    features: ["Leadership bootcamps", "Public speaking", "Team building", "Community projects"],
    impact: "1,500+ youth trained",
  },
  {
    title: "Digital Skills Development",
    description: "Equipping young people with modern digital tools and knowledge.",
    icon: <Laptop className="h-6 w-6" />,
    features: ["Coding workshops", "Digital marketing", "Design thinking", "Entrepreneurship"],
    impact: "2,000+ youth empowered",
  },
  {
    title: "Mentorship & Coaching",
    description: "Guidance from industry leaders to shape career and personal growth.",
    icon: <Users className="h-6 w-6" />,
    features: ["1-on-1 mentorship", "Career counseling", "Peer networking", "Industry linkages"],
    impact: "800+ mentees supported",
  },
  {
    title: "Innovation & Entrepreneurship",
    description: "Programs that inspire creativity and launch youth-driven enterprises.",
    icon: <Lightbulb className="h-6 w-6" />,
    features: ["Startup incubators", "Pitch competitions", "Innovation hubs", "Seed funding"],
    impact: "300+ startups nurtured",
  },
  {
    title: "Internship & Job Placement",
    description: "Connecting youths with internships, apprenticeships, and job markets.",
    icon: <Briefcase className="h-6 w-6" />,
    features: ["Corporate internships", "Skill-matching", "Workplace readiness", "Career fairs"],
    impact: "500+ placements achieved",
  },
  {
    title: "Community Engagement",
    description: "Building social responsibility through volunteerism and civic action.",
    icon: <BookOpen className="h-6 w-6" />,
    features: ["Volunteer drives", "Awareness campaigns", "Youth councils", "Civic education"],
    impact: "2,200+ volunteers mobilized",
  },
]

export default function YouthDevPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        className="hidden h-[calc(100vh-100px)] relative text-white pt-14 pb-20 lg:py-32"
        style={{ background: "linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%)" }}
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
                Empower • Educate • Inspire
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
              variants={staggerItem}
            >
              Youth Development Programs
              <motion.span
                className="block text-3xl lg:text-5xl text-[#3b82f6] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
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
              Building skills, confidence, and opportunities for the next generation of leaders.
            </motion.p>
            <motion.div className="flex space-x-2 justify-center" variants={staggerItem}>
              <Button asChild size="lg" className="bg-[#3b82f6] hover:bg-[#1e3a8a] text-white font-semibold shadow-lg">
                <Link href="/contact">
                  Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e3a8a] bg-transparent font-semibold shadow"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HeaderSlider2 images={YouthDevPageCarouselData} />


      {/* Programs */}
      <section id="programs" className="mt-10 py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Youth Empowerment Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our initiatives equip young people with knowledge, mentorship, and practical opportunities for success.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {youthPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-indigo-100 rounded-lg text-indigo-600"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {program.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-ecc-slate">{program.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">{program.impact}</Badge>
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
                          <motion.div className="w-2 h-2 bg-indigo-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Learn More</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Empower the Next Generation"
        description="Join us in shaping a brighter future by supporting youth empowerment initiatives."
        primaryLabel="Support Youth"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/about"
        className="bg-indigo-600 text-white py-16 lg:py-20"
      />
    </div>
  )
}
