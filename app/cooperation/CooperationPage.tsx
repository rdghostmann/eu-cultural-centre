"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users2, Globe, Users, MessageCircle, Building, Heart } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { CooperationPageCarouselData } from "@/lib/CooperationPageCarouselData"

const cooperationPrograms = [
  {
    title: "Cultural Diplomacy & Dialogue Forums",
    description: "High-level cultural diplomacy initiatives fostering understanding between nations and peoples.",
    icon: <Globe className="h-6 w-6" />,
    features: ["Diplomatic exchanges", "Policy dialogues", "Cultural showcases", "International forums"],
    impact: "25+ diplomatic missions",
  },
  {
    title: "International Partnerships",
    description: "Strategic partnerships with embassies, cultural institutes, and international organizations.",
    icon: <Building className="h-6 w-6" />,
    features: ["Embassy partnerships", "Cultural institutes", "NGO collaborations", "Academic partnerships"],
    impact: "50+ active partnerships",
  },
  {
    title: "Peacebuilding through Culture",
    description: "Using cultural activities and exchanges to promote peace and reconciliation.",
    icon: <Heart className="h-6 w-6" />,
    features: ["Conflict resolution", "Peace education", "Cultural healing", "Community dialogue"],
    impact: "10+ peace initiatives",
  },
  {
    title: "Community Networking Platforms",
    description: "Digital and physical platforms connecting communities across Europe and Africa.",
    icon: <MessageCircle className="h-6 w-6" />,
    features: ["Online platforms", "Community events", "Networking sessions", "Knowledge sharing"],
    impact: "5,000+ community members",
  },
  {
    title: "Civil Society Linkages",
    description: "Connecting civil society organizations across continents for collaborative action.",
    icon: <Users className="h-6 w-6" />,
    features: ["NGO networks", "Advocacy campaigns", "Capacity building", "Resource sharing"],
    impact: "100+ organizations connected",
  },
  {
    title: "Government Tours & Delegations",
    description: "Facilitating official government visits and cultural diplomacy missions.",
    icon: <Users2 className="h-6 w-6" />,
    features: ["Official visits", "Protocol support", "Cultural programming", "Bilateral agreements"],
    impact: "30+ government delegations",
  },
]

const partnerships = [
  {
    name: "European Union Delegation",
    type: "Diplomatic Mission",
    focus: "Cultural Policy & Exchange",
    established: "2020",
  },
  {
    name: "British Council Nigeria",
    type: "Cultural Institute",
    focus: "Education & Arts",
    established: "2019",
  },
  {
    name: "Goethe Institut",
    type: "Cultural Institute",
    focus: "Language & Culture",
    established: "2021",
  },
  {
    name: "African Union Commission",
    type: "International Organization",
    focus: "Continental Integration",
    established: "2022",
  },
]

export default function CooperationPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: partnershipsRef, isInView: partnershipsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <HeaderSlider2 images={CooperationPageCarouselData} />


      {/* Cooperation Programs */}
      <section id="programs" className="py-20 " ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Cooperation Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs fostering people-to-people connections and institutional partnerships across
              continents.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {cooperationPrograms.map((program, index) => (
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

      {/* Key Partnerships */}
      <section className="py-20 bg-gray-50" ref={partnershipsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={partnershipsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Key Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships with leading institutions, embassies, and organizations driving international
              cooperation.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-6 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={partnershipsInView ? "visible" : "hidden"}
          >
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ x: 5, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-ecc-slate mb-1">{partnership.name}</h3>
                        <p className="text-gray-600 mb-2">{partnership.focus}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{partnership.type}</Badge>
                          <span className="text-sm text-gray-500">Est. {partnership.established}</span>
                        </div>
                      </div>
                      <motion.div
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        🤝
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
        title="Ready to Build Partnerships?"
        description="Join our network of partners working to strengthen people-to-people connections across continents."
        primaryLabel=" Start a Partnership"
        primaryHref="/contact"
        secondaryLabel="Arrange a Delegation"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
