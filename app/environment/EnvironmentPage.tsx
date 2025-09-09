"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Leaf, Recycle, Sun, Droplets, TreePine, Wind } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { EnvironmentPageCarouselData } from "@/lib/EnvironmentPageCarouselData"

const environmentalPrograms = [
  {
    title: "Climate Education Initiative",
    description: "Educational programs raising awareness about climate change and environmental sustainability.",
    icon: <Sun className="h-6 w-6" />,
    features: ["School workshops", "Community seminars", "Online courses", "Climate literacy"],
    impact: "5,000+ students educated",
  },
  {
    title: "Green Technology Hub",
    description: "Supporting innovative green technologies and sustainable solutions for African communities.",
    icon: <Wind className="h-6 w-6" />,
    features: ["Tech incubation", "Research grants", "Innovation labs", "Startup support"],
    impact: "25+ green startups supported",
  },
  {
    title: "Sustainable Agriculture",
    description: "Promoting sustainable farming practices and food security across rural communities.",
    icon: <Leaf className="h-6 w-6" />,
    features: ["Farmer training", "Organic methods", "Crop diversification", "Market access"],
    impact: "1,000+ farmers trained",
  },
  {
    title: "Water Conservation Projects",
    description: "Clean water initiatives and conservation programs for underserved communities.",
    icon: <Droplets className="h-6 w-6" />,
    features: ["Well drilling", "Water purification", "Conservation education", "Infrastructure"],
    impact: "50+ communities served",
  },
  {
    title: "Reforestation Programs",
    description: "Tree planting and forest restoration initiatives to combat deforestation.",
    icon: <TreePine className="h-6 w-6" />,
    features: ["Tree planting", "Forest protection", "Community involvement", "Biodiversity"],
    impact: "100,000+ trees planted",
  },
  {
    title: "Waste Management Solutions",
    description: "Innovative waste management and recycling programs for urban and rural areas.",
    icon: <Recycle className="h-6 w-6" />,
    features: ["Recycling centers", "Waste education", "Circular economy", "Community cleanup"],
    impact: "20+ recycling centers established",
  },
]

const sustainabilityGoals = [
  { goal: "Carbon Neutral Operations", progress: 75, target: "2025" },
  { goal: "Renewable Energy Usage", progress: 60, target: "2026" },
  { goal: "Zero Waste Programs", progress: 45, target: "2026" },
  { goal: "Green Partnerships", progress: 90, target: "2026" },
]

export default function EnvironmentPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: goalsRef, isInView: goalsInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden h-[calc(100vh - 100px )] relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20">
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="container mx-auto relative z-10" ref={heroRef}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Environment & Climate Action</Badge>
            </motion.div>

            <motion.h1 className="text-4xl lg:text-5xl font-bold mb-6" variants={staggerItem}>
              Building a Sustainable Future
            </motion.h1>

            <motion.p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto" variants={staggerItem}>
              Climate education and community action programs creating a greener, more sustainable future for Africa and
              Europe through innovative environmental solutions.
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
                  className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
                >
                  <Link href="/contact">Join the Movement</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeaderSlider2 images={EnvironmentPageCarouselData} />

      {/* Environmental Programs */}
      <section id="programs" className="py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Environmental Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental programs addressing climate change, sustainability, and community resilience
              across Africa and Europe.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {environmentalPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-green-100 rounded-lg text-green-600"
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
                          <motion.div className="w-2 h-2 bg-green-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-20 bg-gray-50" ref={goalsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-4"
            variants={fadeInUp}
            initial="hidden"
            animate={goalsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Our Sustainability Goals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tracking our progress towards ambitious environmental targets and sustainable operations.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={goalsInView ? "visible" : "hidden"}
          >
            {sustainabilityGoals.map((goal, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-ecc-slate">{goal.goal}</h3>
                      <Badge variant="outline">Target: {goal.target}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-green-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={goalsInView ? { width: `${goal.progress}%` } : { width: 0 }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    <CTASection
        title="Join the Green Revolution"
        description=" Be part of the solution. Join our environmental programs and help create a sustainable future for all."
        primaryLabel="Get Involved Today"
        primaryHref="/contact"
        secondaryLabel="Partner With Us"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
