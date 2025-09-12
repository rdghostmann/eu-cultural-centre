// app/humanitarian/page.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  GraduationCap,
  Home,
  Users,
} from "lucide-react"
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { HumanitarianPageCarouselData } from "@/lib/HumanitarianPageCarouselData"

// Humanitarian programs
const humanitarianPrograms = [
  {
    title: "Emergency Relief",
    description:
      "Rapid response aid for communities affected by natural disasters, conflict, or displacement.",
    icon: <HeartHandshake className="h-6 w-6" />,
    features: [
      "Food distribution",
      "Shelter support",
      "Water & sanitation",
      "Rapid response teams",
    ],
    impact: "10,000+ families supported",
  },
  {
    title: "Health & Nutrition",
    description:
      "Medical assistance and nutrition programs to save lives and strengthen community health.",
    icon: <Stethoscope className="h-6 w-6" />,
    features: [
      "Mobile clinics",
      "Maternal health",
      "Child nutrition",
      "Medical supplies",
    ],
    impact: "5,000+ patients treated",
  },
  {
    title: "Education & Child Protection",
    description:
      "Safe learning spaces and protection for children in vulnerable situations.",
    icon: <GraduationCap className="h-6 w-6" />,
    features: [
      "Emergency classrooms",
      "Child safeguarding",
      "Educational materials",
      "Teacher training",
    ],
    impact: "3,500+ children reached",
  },
  {
    title: "Community Resilience",
    description:
      "Long-term support to rebuild livelihoods and strengthen resilience after crises.",
    icon: <Home className="h-6 w-6" />,
    features: [
      "Livelihood programs",
      "Skills training",
      "Micro-grants",
      "Community rebuilding",
    ],
    impact: "1,200+ communities empowered",
  },
]

// Upcoming humanitarian events
const upcomingHumanitarianEvents = [
  {
    title: "Disaster Relief Training",
    date: "Feb 12-15, 2026",
    location: "Warsaw, Poland",
    participants: "120 relief workers",
    description:
      "Capacity-building workshop for emergency responders and humanitarian volunteers.",
    image: "/humanitarian/humanitarian-slide13.png",
  },
  {
    title: "Health Mission Outreach",
    date: "Mar 8-12, 2026",
    location: "Accra, Ghana",
    participants: "250 community members",
    description:
      "Medical outreach providing free consultations, medicines, and health education.",
    image: "/humanitarian/humanitarian-slide10.png",
  },
  {
    title: "Child Protection Forum",
    date: "Apr 20-22, 2026",
    location: "Brussels, Belgium",
    participants: "180 advocates",
    description:
      "A platform for NGOs, educators, and leaders to strengthen child protection policies.",
    image: "/humanitarian/humanitarian-slide12.png",
  },
]

export default function HumanitarianPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: eventsRef, isInView: eventsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden h-[calc(100vh-100px)] relative bg-gradient-to-br from-red-700 via-pink-700 to-orange-600 text-white py-20">
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container relative z-10" ref={heroRef}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Humanitarian Programs
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              variants={staggerItem}
            >
              Compassion in Action
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-red-100 max-w-3xl mx-auto"
              variants={staggerItem}
            >
              Bringing relief, health, education, and hope to communities in
              crisis and building resilience for the future.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerItem}
            >
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Link href="#programs">
                    Explore Programs{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-700"
                >
                  <Link href="/contact">Get Involved</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Carousel */}
      <HeaderSlider2 images={HumanitarianPageCarouselData} />

      {/* Programs */}
      <section id="programs" className="py-20 mt-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              Humanitarian Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immediate aid, healthcare, education, and long-term resilience
              programs for communities in need.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-2 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {humanitarianPrograms.map((program, i) => (
              <motion.div key={i} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-red-100 rounded-lg text-red-700"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {program.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-ecc-slate">
                          {program.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {program.impact}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {program.features.map((f, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-red-600 rounded-full" />
                          <span className="text-sm text-gray-600">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50" ref={eventsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              Upcoming Humanitarian Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our efforts to deliver life-saving aid and build sustainable
              futures.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            {upcomingHumanitarianEvents.map((event, i) => (
              <motion.div key={i} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full overflow-hidden">
                  {/* Top Image */}
                  <div className="relative h-40 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Event</Badge>
                      <span className="text-sm text-gray-500">
                        {event.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-2">
                      {event.location}
                    </CardDescription>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">
                        {event.participants}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {event.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Link href="/contact">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Register Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Make a Difference"
        description="Partner with us to bring relief, hope, and resilience to communities in need."
        primaryLabel="Donate Now"
        primaryHref="/contact"
        secondaryLabel="Volunteer With Us"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
