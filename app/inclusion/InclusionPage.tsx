"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Heart, Users, Eye, Ear, Brain, Shield } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { InclusionPageCarouselData } from "@/lib/InclusionPageCarouselData"

const inclusionPrograms = [
  {
    title: "Accessibility in Arts",
    description: "Making cultural events and artistic experiences accessible to people with disabilities.",
    icon: <Eye className="h-6 w-6" />,
    features: ["Audio descriptions", "Sign language", "Tactile experiences", "Accessible venues"],
    impact: "1,000+ people served",
  },
  {
    title: "Inclusive Education Programs",
    description: "Educational initiatives designed for learners with diverse needs and abilities.",
    icon: <Brain className="h-6 w-6" />,
    features: ["Adaptive learning", "Multi-sensory approaches", "Assistive technology", "Peer support"],
    impact: "500+ students supported",
  },
  {
    title: "Community Integration",
    description: "Programs fostering social inclusion and community participation for marginalized groups.",
    icon: <Users className="h-6 w-6" />,
    features: ["Social activities", "Skill building", "Mentorship", "Community networks"],
    impact: "2,000+ community members",
  },
  {
    title: "Assistive Technology Hub",
    description: "Providing access to assistive technologies and training for independent living.",
    icon: <Shield className="h-6 w-6" />,
    features: ["Device lending", "Training programs", "Technical support", "Innovation lab"],
    impact: "300+ devices distributed",
  },
  {
    title: "Sensory-Friendly Events",
    description: "Cultural events designed for people with sensory sensitivities and processing differences.",
    icon: <Ear className="h-6 w-6" />,
    features: ["Quiet spaces", "Reduced lighting", "Sensory breaks", "Advance preparation"],
    impact: "50+ events hosted",
  },
  {
    title: "Advocacy & Awareness",
    description: "Raising awareness about disability rights and promoting inclusive practices.",
    icon: <Heart className="h-6 w-6" />,
    features: ["Awareness campaigns", "Policy advocacy", "Training workshops", "Community outreach"],
    impact: "10,000+ people reached",
  },
]

const accessibilityFeatures = [
  {
    feature: "Physical Accessibility",
    status: "Fully Implemented",
    description: "Wheelchair accessible venues and facilities",
  },
  { feature: "Digital Accessibility", status: "In Progress", description: "WCAG 2.1 AA compliant websites and apps" },
  {
    feature: "Communication Support",
    status: "Available",
    description: "Sign language interpreters and assistive listening",
  },
  {
    feature: "Sensory Accommodations",
    status: "Fully Implemented",
    description: "Quiet spaces and sensory-friendly options",
  },
]

export default function InclusionPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: featuresRef, isInView: featuresInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden h-[calc(100vh - 100px )] relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white py-20">
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
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
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Inclusion & Accessibility</Badge>
            </motion.div>

            <motion.h1 className="text-4xl lg:text-5xl font-bold mb-6" variants={staggerItem}>
              Creating Inclusive Experiences for All
            </motion.h1>

            <motion.p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto" variants={staggerItem}>
              Ensuring all programs are accessible and inclusive, creating opportunities for people of all abilities to
              participate fully in cultural exchange and educational experiences.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90">
                  <Link href="/#programs">
                    Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-700 bg-transparent"
                >
                  <Link href="/contact">Request Support</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeaderSlider2 images={InclusionPageCarouselData} />


      {/* Inclusion Programs */}
      <section id="programs" className="mt-10 py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-4"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Inclusion Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs ensuring accessibility and inclusion across all our cultural and educational
              initiatives.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {inclusionPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-orange-100 rounded-lg text-orange-600"
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
                          <motion.div className="w-2 h-2 bg-orange-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">Learn More</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-gray-50" ref={featuresRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-4"
            variants={fadeInUp}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Our Accessibility Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to making all our programs, events, and facilities accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-6 px-5 max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            {accessibilityFeatures.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ x: 5, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-ecc-slate">{item.feature}</h3>
                      <Badge
                        variant={
                          item.status === "Fully Implemented"
                            ? "default"
                            : item.status === "Available"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}

      <CTASection
        title="Join Our Inclusive Community"
        description="Everyone deserves access to cultural experiences. Let us know how we can better serve your needs."
        primaryLabel="Get Support"
        primaryHref="/contact"
        secondaryLabel="Share Feedback"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
