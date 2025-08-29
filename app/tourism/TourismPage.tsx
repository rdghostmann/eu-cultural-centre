"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Map, Camera, Landmark, Plane, Mountain, Hotel } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { TourismPageCarouselData } from "@/lib/TourismPageCarouselData"

const tourismPrograms = [
  {
    title: "Cultural Heritage Tours",
    description: "Experience authentic traditions and historic landmarks.",
    icon: <Landmark className="h-6 w-6" />,
    features: ["Guided heritage walks", "Museum visits", "Cultural performances", "Local crafts"],
    impact: "2,000+ visitors engaged",
  },
  {
    title: "Eco-Tourism Initiatives",
    description: "Sustainable travel promoting conservation and local livelihoods.",
    icon: <Mountain className="h-6 w-6" />,
    features: ["Nature trails", "Wildlife conservation", "Community eco-lodges", "Sustainable farming tours"],
    impact: "1,200+ eco-travelers",
  },
  {
    title: "City Tourism Development",
    description: "Promoting local destinations and boosting city tourism.",
    icon: <Map className="h-6 w-6" />,
    features: ["Tourism maps", "City events", "Festivals", "Cultural hubs"],
    impact: "5,000+ participants annually",
  },
  {
    title: "Adventure & Outdoor Activities",
    description: "Exciting travel experiences for thrill-seekers.",
    icon: <Camera className="h-6 w-6" />,
    features: ["Hiking", "Cycling tours", "Kayaking", "Climbing"],
    impact: "1,500+ adventurers",
  },
  {
    title: "Hospitality & Training",
    description: "Supporting tourism industry with skilled workforce.",
    icon: <Hotel className="h-6 w-6" />,
    features: ["Hospitality workshops", "Tour guide training", "Customer service skills", "Language classes"],
    impact: "800+ trained professionals",
  },
  {
    title: "International Tourism Exchange",
    description: "Connecting travelers with global cultural opportunities.",
    icon: <Plane className="h-6 w-6" />,
    features: ["Student exchanges", "Cultural exchange trips", "Travel fairs", "Partnerships"],
    impact: "400+ exchanges facilitated",
  },
]

export default function TourismPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        className="hidden h-[calc(100vh-100px)] relative text-white pt-14 pb-20 lg:py-32"
        style={{ background: "linear-gradient(135deg,#205375 0%,#68b684 100%)" }}
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
                Tourism • Culture • Adventure
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
              variants={staggerItem}
            >
              Discover Unique Journeys
              <motion.span
                className="block text-3xl lg:text-5xl text-[#68b684] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                With ECC Nigeria
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg lg:text-2xl mb-8 text-[#e0f2fe] max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              variants={staggerItem}
            >
              Promoting sustainable travel, cultural exchange, and memorable experiences across Nigeria and beyond.
            </motion.p>
            <motion.div className="flex space-x-2 justify-center" variants={staggerItem}>
              <Button asChild size="lg" className="bg-[#68b684] hover:bg-[#205375] text-white font-semibold shadow-lg">
                <Link href="/contact">
                  Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#205375] bg-transparent font-semibold shadow"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeaderSlider2 images={TourismPageCarouselData} />



      {/* Programs */}
      <section id="programs" className="mt-10 py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Tourism Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cultural tours to eco-adventures, our programs connect people and promote sustainable development.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {tourismPrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-blue-100 rounded-lg text-blue-600"
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

      {/* CTA */}
      <CTASection
        title="Travel with Purpose"
        description="Tourism can transform lives and preserve culture. Partner with us to promote meaningful, sustainable tourism."
        primaryLabel="Support Tourism"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/about"
        className="bg-blue-600 text-white py-16 lg:py-20"
      />
    </div>
  )
}
