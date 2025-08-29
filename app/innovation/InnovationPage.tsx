"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Rocket, Smartphone, Code, Lightbulb, Database, Zap } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { InnovationPageCarouselData } from "@/lib/InnovationPageCarouselData"

const innovationPrograms = [
  {
    title: "Tech Startup Incubator",
    description: "Supporting early-stage tech startups with mentorship, funding, and resources.",
    icon: <Rocket className="h-6 w-6" />,
    features: ["Seed funding", "Mentorship", "Co-working space", "Market access"],
    impact: "50+ startups launched",
  },
  {
    title: "Digital Heritage Platform",
    description: "Digitizing and preserving cultural heritage through innovative technology solutions.",
    icon: <Database className="h-6 w-6" />,
    features: ["3D scanning", "Virtual museums", "AR experiences", "Digital archives"],
    impact: "100+ artifacts digitized",
  },
  {
    title: "Creative Tech Labs",
    description: "Hands-on workshops and labs exploring the intersection of technology and creativity.",
    icon: <Code className="h-6 w-6" />,
    features: ["Coding bootcamps", "Design thinking", "Prototyping", "Tech workshops"],
    impact: "500+ participants trained",
  },
  {
    title: "Innovation Challenges",
    description: "Hackathons and competitions addressing social and cultural challenges through technology.",
    icon: <Lightbulb className="h-6 w-6" />,
    features: ["Hackathons", "Pitch competitions", "Solution development", "Prize funding"],
    impact: "25+ challenges completed",
  },
  {
    title: "Mobile App Development",
    description: "Creating mobile applications that promote cultural exchange and education.",
    icon: <Smartphone className="h-6 w-6" />,
    features: ["App development", "User testing", "Market launch", "Ongoing support"],
    impact: "15+ apps launched",
  },
  {
    title: "AI for Culture",
    description: "Exploring artificial intelligence applications in cultural preservation and promotion.",
    icon: <Zap className="h-6 w-6" />,
    features: ["Machine learning", "Cultural analysis", "Recommendation systems", "Automation"],
    impact: "10+ AI projects",
  },
]

const startupShowcase = [
  {
    name: "CultureConnect",
    description: "Platform connecting cultural practitioners across Africa and Europe",
    stage: "Series A",
    funding: "$500K",
  },
  {
    name: "HeritageVR",
    description: "Virtual reality experiences for historical sites and museums",
    stage: "Seed",
    funding: "$250K",
  },
  {
    name: "ArtisanMarket",
    description: "E-commerce platform for traditional crafts and artworks",
    stage: "Growth",
    funding: "$1M",
  },
  {
    name: "EduCulture",
    description: "Educational app teaching cultural diversity and history",
    stage: "Pre-seed",
    funding: "$100K",
  },
]

export default function InnovationPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: showcaseRef, isInView: showcaseInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden h-[calc(100vh - 100px )] relative bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-white py-20">
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <div className="container mx-auto relative auto z-10" ref={heroRef}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Innovation & New Media</Badge>
            </motion.div>

            <motion.h1 className="text-4xl lg:text-5xl font-bold mb-6" variants={staggerItem}>
              Innovating Culture Through Technology
            </motion.h1>

            <motion.p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto" variants={staggerItem}>
              Supporting creative startups, digital heritage projects, and innovative technology solutions that bridge
              cultures and create new opportunities for artistic expression.
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
                  className="border-white text-white hover:bg-white hover:text-pink-700 bg-transparent"
                >
                  <Link href="/contact">Join the Lab</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeaderSlider2 images={InnovationPageCarouselData} />


      {/* Innovation Programs */}
      <section id="programs" className="py-20 mt-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Innovation Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge programs fostering innovation at the intersection of technology, culture, and creativity.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {innovationPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-pink-100 rounded-lg text-pink-600"
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
                          <motion.div className="w-2 h-2 bg-pink-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-pink-600 hover:bg-pink-700">Learn More</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Startup Showcase */}
      <section className="py-20 bg-gray-50" ref={showcaseRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={showcaseInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Startup Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of the innovative startups we've supported through our incubation programs.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={showcaseInView ? "visible" : "hidden"}
          >
            {startupShowcase.map((startup, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ x: 5, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-ecc-slate mb-1">{startup.name}</h3>
                        <p className="text-gray-600 mb-2">{startup.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{startup.stage}</Badge>
                          <Badge variant="secondary">{startup.funding}</Badge>
                        </div>
                      </div>
                      <motion.div
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        🚀
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Innovate?"
        description="Join our innovation ecosystem and turn your creative ideas into impactful technology solutions."
        primaryLabel="Apply Now"
        primaryHref="/contact"
        secondaryLabel="Schedule a Demo"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
