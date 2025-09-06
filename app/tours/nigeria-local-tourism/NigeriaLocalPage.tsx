"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Camera, MapPin, Clock, Users, Star, Shield } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { NigerianDomesticTourData } from "@/lib/NigerianDomesticTour"

// Nigeria Local Tourism Attractions
const attractions = [
  {
    title: "Obudu Mountain Resort",
    description: "A paradise in the clouds with cable cars, mountain views, and eco-tourism lodges.",
    location: "Cross River State",
    date: "April 12–15, 2026",
  },
  {
    title: "Ogbunike Caves",
    description: "Ancient caves with spiritual history, lush greenery, and natural tunnels.",
    location: "Anambra State",
    date: "May 18, 2026",
  },
  {
    title: "Calabar Carnival",
    description: "Africa’s biggest street party with dance, costumes, and cultural showcases.",
    location: "Calabar, Cross River",
    date: "December 1–31, 2026",
  },
  {
    title: "Yankari Game Reserve",
    description: "Safari adventures, natural warm springs, and Nigeria’s best wildlife park.",
    location: "Bauchi State",
    date: "July 8–12, 2026",
  },
  {
    title: "Erin-Ijesha Waterfalls",
    description: "Seven layers of waterfalls cascading through tropical forest trails.",
    location: "Osun State",
    date: "August 22, 2026",
  },
  {
    title: "Awhum Waterfall & Cave",
    description: "Sacred natural wonder with religious significance and serene landscapes.",
    location: "Enugu State",
    date: "September 14, 2026",
  },
  {
    title: "Sukur Cultural Landscape",
    description: "UNESCO heritage site with ancient terraces, palaces, and cultural heritage.",
    location: "Adamawa State",
    date: "October 10–13, 2026",
  },
  {
    title: "Yobe Desert Safari",
    description: "Explore Nigeria’s desert dunes and Fulani cultural heritage.",
    location: "Yobe State",
    date: "November 4–7, 2026",
  },
]

export default function NigeriaLocalTourismPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: toursRef, isInView: toursInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Hero */}
      <section className="hidden relative bg-gradient-to-br from-green-700 via-emerald-600 to-amber-600 text-white py-12 px-4 sm:py-20 sm:px-6">
        <motion.div className="absolute inset-0 bg-black/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
        <div className="relative z-10 max-w-2xl mx-auto sm:max-w-4xl" ref={heroRef}>
          <motion.div className="text-center" variants={staggerContainer} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
            <motion.div variants={staggerItem}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Nigeria Domestic Tourism 2026</Badge>
            </motion.div>
            <motion.h1 className="text-2xl sm:text-4xl font-bold mb-4" variants={staggerItem}>
              Explore Nigeria’s Hidden Gems & Cultural Wonders
            </motion.h1>
            <motion.p className="text-base sm:text-xl mb-6 text-emerald-100 max-w-xl mx-auto" variants={staggerItem}>
              From mountain resorts to desert safaris, discover Nigeria’s breathtaking landscapes and cultural festivals in 2026.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 w-full sm:w-auto">
                  <Link href="#attractions">
                    View Attractions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeaderSlider2 images={NigerianDomesticTourData} />


      {/* Attractions Section */}
      <section id="attractions" className="py-12 px-4 sm:py-20 sm:px-6" ref={toursRef}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-10 sm:mb-16" variants={fadeInUp} initial="hidden" animate={toursInView ? "visible" : "hidden"}>
            <h2 className="text-2xl sm:text-3xl font-bold text-ecc-slate mb-3">Upcoming Tours & Events</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-xl mx-auto">
              Join us in 2026 as we explore Nigeria’s top destinations and festivals.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" animate={toursInView ? "visible" : "hidden"}>
            {attractions.map((tour, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-lg text-ecc-slate">{tour.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{tour.date}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-gray-600">{tour.description}</CardDescription>
                    <p className="flex items-center text-sm text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 mr-2" /> {tour.location}
                    </p>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to Discover Nigeria?"
        description="Book your spot for upcoming tours and experience Nigeria’s natural wonders, cultural festivals, and heritage sites. Join us for an unforgettable adventure in 2026!"
        primaryLabel="Book a Tour"
        primaryHref="/contact"
        secondaryLabel="Request Custom Itinerary"
        secondaryHref="/contact"
      />

    </div>
  )
}