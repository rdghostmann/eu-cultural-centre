"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Camera, MapPin, Clock, Users, Star, Shield } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { CulturalPageCarouselData } from "@/lib/CulturalPageCarouseData"

const tourTypes = [
    {
        title: "Ancient Heritage Sites",
        description: "Explore millennia-old archaeological sites with expert historians and archaeologists.",
        icon: "🏛️",
        duration: "3-5 days",
        highlights: ["Archaeological excavations", "Ancient artifacts", "Historical narratives", "Conservation efforts"],
    },
    {
        title: "Cultural Festivals & Traditions",
        description: "Immerse in living traditions through festivals, ceremonies, and cultural celebrations.",
        icon: "🎭",
        duration: "2-4 days",
        highlights: ["Traditional ceremonies", "Local artisans", "Cultural performances", "Community engagement"],
    },
    {
        title: "Art & Craft Heritage",
        description: "Discover traditional crafts, artistic techniques, and creative heritage preservation.",
        icon: "🎨",
        duration: "2-3 days",
        highlights: ["Master craftspeople", "Traditional techniques", "Hands-on workshops", "Art collections"],
    },
    {
        title: "Sacred & Spiritual Sites",
        description: "Visit sacred places and learn about spiritual traditions and religious heritage.",
        icon: "⛪",
        duration: "1-3 days",
        highlights: ["Sacred architecture", "Spiritual practices", "Religious art", "Pilgrimage routes"],
    },
]

const sampleItinerary = [
    {
        time: "8:00 AM",
        activity: "Hotel pickup and departure",
        location: "Lagos City Center",
    },
    {
        time: "10:30 AM",
        activity: "Arrival at Osun-Osogbo Sacred Grove",
        location: "Osogbo, Osun State",
    },
    {
        time: "11:00 AM",
        activity: "Guided tour with UNESCO heritage expert",
        location: "Sacred Grove",
    },
    {
        time: "1:00 PM",
        activity: "Traditional lunch with local community",
        location: "Osogbo Palace",
    },
    {
        time: "3:00 PM",
        activity: "Osogbo Art Gallery and craft workshops",
        location: "Nike Art Gallery",
    },
    {
        time: "5:00 PM",
        activity: "Cultural performance and storytelling",
        location: "Community Center",
    },
    {
        time: "7:00 PM",
        activity: "Return journey to Lagos",
        location: "Departure",
    },
]

export default function CulturalHeritageToursPage() {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
    const { ref: toursRef, isInView: toursInView } = useScrollAnimation()
    const { ref: itineraryRef, isInView: itineraryInView } = useScrollAnimation()

    const hoverScale = { scale: 1.05 }
    const hoverLift = { y: -5, scale: 1.05 }


    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="hidden relative bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white py-16 sm:py-20">
                <motion.div
                    className="absolute inset-0 bg-black/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Floating cultural elements */}
                <motion.div
                    className="absolute top-10 left-6 sm:top-16 sm:left-16 text-4xl sm:text-5xl opacity-20"
                    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    🏺
                </motion.div>
                <motion.div
                    className="absolute bottom-16 right-6 sm:bottom-20 sm:right-20 text-3xl sm:text-4xl opacity-20"
                    animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                    🎭
                </motion.div>

                <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8" ref={heroRef}>
                    <motion.div
                        className="max-w-3xl sm:max-w-4xl mx-auto text-center"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={staggerItem}>
                            <Badge className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 text-sm sm:text-base">
                                Cultural Heritage Tours
                            </Badge>
                        </motion.div>
                        <motion.h1
                            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
                            variants={staggerItem}
                        >
                            Discover Living Heritage & Ancient Traditions
                        </motion.h1>
                        <motion.p
                            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-orange-100 max-w-2xl mx-auto"
                            variants={staggerItem}
                        >
                            Journey through time with expert-guided tours to UNESCO World Heritage sites, traditional festivals, and cultural landmarks that preserve Africa's rich heritage.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                            variants={staggerItem}
                        >
                            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-ecc-green hover:bg-ecc-green/90 w-full sm:w-auto"
                                >
                                    <Link href="#tours">
                                        Explore Tours <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-red-700 bg-transparent w-full sm:w-auto"
                                >
                                    <Link href="/contact">Book a Heritage Tour</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <HeaderSlider2 images={CulturalPageCarouselData} />


            {/* Quick Info */}
            <section className="py-8 sm:py-12 bg-ecc-beige">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: Clock, title: "Duration", value: "1-5 days" },
                            { icon: Users, title: "Group Size", value: "8-25 people" },
                            { icon: Camera, title: "Photography", value: "Allowed" },
                            { icon: Shield, title: "Insurance", value: "Included" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center flex flex-col items-center"
                                variants={staggerItem}
                                whileHover={hoverLift}
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-amber-600 rounded-full mb-3 sm:mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                                </motion.div>
                                <h3 className="font-semibold text-ecc-slate mb-1 sm:mb-2 text-sm sm:text-lg">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-base">{item.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Tour Types */}
            <section id="tours" className="py-12 sm:py-20" ref={toursRef}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-10 sm:mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={toursInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
                            Heritage Tour Categories
                        </h2>
                        <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
                            Choose from our curated selection of cultural heritage experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={toursInView ? "visible" : "hidden"}
                    >
                        {tourTypes.map((tour, index) => (
                            <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                                <Card className="h-full hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3 mb-3">
                                            <motion.div
                                                className="text-3xl sm:text-4xl"
                                                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {tour.icon}
                                            </motion.div>
                                            <div>
                                                <CardTitle className="text-lg sm:text-xl text-ecc-slate">{tour.title}</CardTitle>
                                                <Badge variant="secondary" className="mt-1">
                                                    {tour.duration}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardDescription className="text-gray-600">{tour.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <motion.div
                                            className="space-y-3 mb-6"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {tour.highlights.map((highlight, idx) => (
                                                <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                                                    <motion.div className="w-2 h-2 bg-amber-600 rounded-full" whileHover={{ scale: 1.5 }} />
                                                    <span className="text-sm sm:text-base text-gray-600">{highlight}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                        <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                                            <Link href="/contact">
                                                <Button className="w-full bg-amber-600 hover:bg-amber-700">Learn More</Button>
                                            </Link>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sample Itinerary */}
            <section className="py-12 sm:py-16 bg-gray-50" ref={itineraryRef}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-10 sm:mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={itineraryInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-3 sm:mb-4 leading-tight">
                            Sample Day Tour: Osun-Osogbo Sacred Grove
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
                            Experience Nigeria's UNESCO World Heritage site with expert guides and cultural immersion.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-3xl sm:max-w-4xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={itineraryInView ? "visible" : "hidden"}
                    >
                        <div className="space-y-3 sm:space-y-4">
                            {sampleItinerary.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 p-4 bg-white rounded-lg shadow-sm"
                                    variants={staggerItem}
                                    whileHover={{ x: 5, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                                >
                                    <motion.div
                                        className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3 sm:mb-0"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <span className="text-amber-700 font-semibold text-xs sm:text-sm">{item.time}</span>
                                    </motion.div>
                                    <div className="flex-grow">
                                        <h4 className="font-semibold text-ecc-slate mb-1 text-base sm:text-lg">
                                            {item.activity}
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base flex items-center">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            {item.location}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Testimonials */}
            <section className="py-12 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-10 sm:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
                            What Our Guests Say
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                name: "Dr. Maria Santos",
                                role: "Cultural Anthropologist",
                                text: "The heritage tour provided incredible insights into Nigeria's cultural traditions. The expert guides made history come alive.",
                                rating: 5,
                            },
                            {
                                name: "James Mitchell",
                                role: "Travel Photographer",
                                text: "An unforgettable life's journey through living heritage. The access to sacred sites and cultural ceremonies was extraordinary.",
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                                <Card className="h-full">
                                    <CardHeader>
                                        <div className="flex items-center space-x-1 mb-2">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <CardTitle className="text-base sm:text-lg">{testimonial.name}</CardTitle>
                                        <CardDescription>{testimonial.role}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 italic text-sm sm:text-base">"{testimonial.text}"</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            {/* <section className="py-12 sm:py-20 bg-ecc-slate text-white">
        <div className="container text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Explore Cultural Heritage?
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto">
              Book your heritage tour today and discover the living traditions that connect past, present, and future.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem} whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90 w-full sm:w-auto">
                  <Link href="/contact">
                    Book a Heritage Tour <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={staggerItem} whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ecc-slate bg-transparent w-full sm:w-auto"
                >
                  <Link href="/contact">Custom Tour Request</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
            <CTASection
                title="Ready to Explore Cultural Heritage?"
                description="Book your heritage tour today and experience Africa’s living traditions, ancient sites, and vibrant festivals with expert guides. Discover the stories that connect past, present, and future."
                primaryLabel="Book a Heritage Tour"
                primaryHref="/contact"
                secondaryLabel="Custom Tour Request"
                secondaryHref="/contact"
            />




        </div>
    )
}

