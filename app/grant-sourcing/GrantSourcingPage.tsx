// GrantSourcingPage.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { HeartHandshake, Building, Landmark, Globe2, Users, BookOpen } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { HealthcarePageCarouselData } from "@/lib/HealthcarePageCarouselData"

const grantSourcingPrograms = [
  {
    title: "Government Partnerships",
    description: "Collaborating with federal, state, and local governments to source international grants.",
    icon: <Landmark className="h-6 w-6" />,
    features: ["Policy alignment", "Public-private partnerships", "Capacity building", "Development projects"],
    impact: "20+ government agencies supported",
  },
  {
    title: "NGO & Nonprofit Support",
    description: "Helping NGOs and nonprofits secure funding for impactful social initiatives.",
    icon: <Users className="h-6 w-6" />,
    features: ["Grant proposal writing", "Donor matchmaking", "Impact reporting", "Project scalability"],
    impact: "150+ NGOs empowered",
  },
  {
    title: "Corporate & Private Sector",
    description: "Assisting companies in accessing international funding for CSR and innovation projects.",
    icon: <Building className="h-6 w-6" />,
    features: ["CSR program funding", "Innovation grants", "Cross-sector collaborations", "Sustainability projects"],
    impact: "50+ corporations partnered",
  },
  {
    title: "Academic & Research Grants",
    description: "Supporting universities and research institutes in securing international research funding.",
    icon: <BookOpen className="h-6 w-6" />,
    features: ["Research funding access", "International collaborations", "Innovation programs", "Knowledge exchange"],
    impact: "30+ research institutions supported",
  },
  {
    title: "Foundations & Philanthropy",
    description: "Connecting foundations with global partners for impactful philanthropy.",
    icon: <HeartHandshake className="h-6 w-6" />,
    features: ["Philanthropy partnerships", "Global impact programs", "Joint funding initiatives", "Capacity building"],
    impact: "20+ foundations engaged",
  },
  {
    title: "Cross-Border Collaboration",
    description: "Facilitating joint projects with international partners and European Cultural Centre.",
    icon: <Globe2 className="h-6 w-6" />,
    features: ["Joint projects", "Cultural exchange", "International networking", "Grant sourcing pipelines"],
    impact: "10+ countries partnered",
  },
]

export default function GrantSourcingPage() {
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <HeaderSlider2 images={HealthcarePageCarouselData} />

      {/* Grant Sourcing Programs */}
      <section id="programs" className="mt-10 py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Grant Sourcing Programs</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our institution helps government agencies, NGOs, corporate bodies, research institutes, foundations,
              ministries, and countries source international grants from our global partners by collaborating and doing
              joint projects with the European Cultural Centre.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {grantSourcingPrograms.map((program, index) => (
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
        title="Partner for Global Impact"
        description="Let’s collaborate to unlock international funding opportunities and create transformative change through joint projects."
        primaryLabel="Get Started"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="/about"
        className="bg-red-600 text-white py-16 lg:py-20"
      />
    </div>
  )
}
