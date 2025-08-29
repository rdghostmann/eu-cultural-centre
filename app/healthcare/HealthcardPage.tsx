"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {  HeartPulse, Stethoscope, Syringe, Users, Brain, Hospital } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { HealthcarePageCarouselData } from "@/lib/HealthcarePageCarouselData"

const healthcarePrograms = [
  {
    title: "Community Health Clinics",
    description: "Accessible primary care services for underserved communities.",
    icon: <Hospital className="h-6 w-6" />,
    features: ["Free check-ups", "Essential medications", "Maternal care", "Child immunizations"],
    impact: "10,000+ patients served",
  },
  {
    title: "Mental Wellness Programs",
    description: "Supporting mental health through awareness and counseling services.",
    icon: <Brain className="h-6 w-6" />,
    features: ["Counseling sessions", "Peer support groups", "Awareness workshops", "Stress management"],
    impact: "2,500+ individuals supported",
  },
  {
    title: "Vaccination Campaigns",
    description: "Improving immunization coverage and preventing disease outbreaks.",
    icon: <Syringe className="h-6 w-6" />,
    features: ["Childhood vaccines", "Outreach drives", "Mobile vaccination units", "Public education"],
    impact: "5,000+ vaccines administered",
  },
  {
    title: "Mobile Health Outreach",
    description: "Bringing healthcare directly to rural and hard-to-reach communities.",
    icon: <Users className="h-6 w-6" />,
    features: ["Mobile clinics", "Telemedicine", "Community health workers", "Emergency response"],
    impact: "3,000+ households reached",
  },
  {
    title: "Preventive Care & Screening",
    description: "Promoting early detection and prevention of chronic illnesses.",
    icon: <Stethoscope className="h-6 w-6" />,
    features: ["Cancer screenings", "Blood pressure checks", "Diabetes tests", "Nutrition counseling"],
    impact: "1,200+ screenings conducted",
  },
  {
    title: "Emergency Response & First Aid",
    description: "Training communities to respond effectively to emergencies.",
    icon: <HeartPulse className="h-6 w-6" />,
    features: ["First aid training", "Emergency kits", "Community responders", "CPR workshops"],
    impact: "1,000+ trained in lifesaving skills",
  },
]

export default function HealthcarePage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <HeaderSlider2 images={HealthcarePageCarouselData} />

      {/* Healthcare Programs */}
      <section id="programs" className="mt-10 py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Healthcare Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From primary care to mental health, our programs address the most urgent healthcare needs while building resilient communities.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {healthcarePrograms.map((program, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-red-100 rounded-lg text-red-600"
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
                          <motion.div className="w-2 h-2 bg-red-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-red-600 hover:bg-red-700">Learn More</Button>
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
        title="Partner for Better Health"
        description="Together, we can build healthier, stronger communities. Join us in advancing healthcare access and innovation."
        primaryLabel="Support Healthcare"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/about"
        className="bg-red-600 text-white py-16 lg:py-20"
      />
    </div>
  )
}
