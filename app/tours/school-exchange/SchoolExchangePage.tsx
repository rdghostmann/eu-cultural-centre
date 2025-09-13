"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, GraduationCap, Users, Calendar, MapPin, Clock } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { CooperationPageCarouselData } from "@/lib/CooperationPageCarouselData"
import { SchoolExchangeToursData } from "@/lib/SchoolExchangeTourData"

const exchangePrograms = [
    {
        title: "European University Exchange",
        description: "Semester-long academic exchanges with top European universities.",
        duration: "4-6 months",
        participants: "50+ students annually",
        destinations: ["Germany", "France", "Netherlands", "Italy"],
        features: ["Full academic credit", "Language immersion", "Cultural activities", "Mentorship program"],
    },
    {
        title: "High School Cultural Immersion",
        description: "Short-term cultural exchange programs for secondary school students.",
        duration: "2-4 weeks",
        participants: "200+ students annually",
        destinations: ["UK", "Spain", "Belgium", "Austria"],
        features: ["Host family stay", "School partnerships", "Cultural workshops", "Certificate program"],
    },
    {
        title: "Teacher Training Exchange",
        description: "Professional development programs for educators in European institutions.",
        duration: "1-3 months",
        participants: "30+ teachers annually",
        destinations: ["Finland", "Denmark", "Sweden", "Norway"],
        features: ["Pedagogical training", "Best practices sharing", "Certification", "Network building"],
    },
]

const upcomingExchanges = [
    {
        program: "Summer University Program",
        destination: "Berlin, Germany",
        date: "June 15 - August 15, 2026",
        spots: "25 available",
        deadline: "March 30, 2026",
    },
    {
        program: "Cultural Heritage Tour",
        destination: "Rome, Italy",
        date: "September 10 - September 24, 2026",
        spots: "30 available",
        deadline: "June 15, 2026",
    },
    {
        program: "Language Immersion Program",
        destination: "Paris, France",
        date: "October 5 - November 5, 2026",
        spots: "20 available",
        deadline: "July 20, 2026",
    },
]

export default function SchoolExchangePage() {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
    const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
    const { ref: upcomingRef, isInView: upcomingInView } = useScrollAnimation()
    const hoverScale = { scale: 1.05 };
    const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="hidden relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-12 px-4 sm:py-20 sm:px-6">
                <motion.div className="absolute inset-0 bg-black/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
                <div className="relative z-10 max-w-2xl mx-auto sm:max-w-4xl" ref={heroRef}>
                    <motion.div className="text-center" variants={staggerContainer} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
                        <motion.div variants={staggerItem}>
                            <Badge className="mb-4 bg-white/20 text-white border-white/30">School Exchange Tours</Badge>
                        </motion.div>
                        <motion.h1 className="text-2xl sm:text-4xl font-bold mb-4" variants={staggerItem}>
                            Transform Education Through Cultural Exchange
                        </motion.h1>
                        <motion.p className="text-base sm:text-xl mb-6 text-blue-100 max-w-xl mx-auto" variants={staggerItem}>
                            Immersive educational experiences that broaden horizons, build global perspectives, and create lifelong connections between Nigerian and European students.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" variants={staggerItem}>
                            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90 w-full sm:w-auto">
                                    <Link href="#programs">
                                        Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent w-full sm:w-auto">
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <HeaderSlider2 images={SchoolExchangeToursData} />


            {/* Exchange Programs */}
            <section id="programs" className="py-16 sm:py-20" ref={programsRef}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-10 sm:mb-16"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={programsInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-3 sm:mb-4">
                            Exchange Programs
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2">
                            Comprehensive educational exchange programs designed to provide transformative learning experiences across
                            Europe.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={programsInView ? "visible" : "hidden"}
                    >
                        {exchangePrograms.map((program, index) => (
                            <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                                <Card className="h-full hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <motion.div
                                            className="p-3 bg-blue-100 rounded-lg text-blue-600 w-fit mb-3"
                                            whileHover={{ scale: 1.1, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                                        </motion.div>
                                        <CardTitle className="text-lg sm:text-xl text-ecc-slate">{program.title}</CardTitle>
                                        <CardDescription className="text-gray-600 text-sm sm:text-base">{program.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4 mb-6">
                                            <div className="flex items-center justify-between text-sm sm:text-base">
                                                <span className="text-gray-600">Duration:</span>
                                                <Badge variant="secondary">{program.duration}</Badge>
                                            </div>
                                            <div className="flex items-center justify-between text-sm sm:text-base">
                                                <span className="text-gray-600">Participants:</span>
                                                <Badge variant="outline">{program.participants}</Badge>
                                            </div>
                                            <div>
                                                <span className="text-sm text-gray-600 block mb-2">Destinations:</span>
                                                <div className="flex flex-wrap gap-1">
                                                    {program.destinations.map((dest, idx) => (
                                                        <Badge key={idx} variant="secondary" className="text-xs sm:text-sm">
                                                            {dest}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm text-gray-600 block mb-2">Features:</span>
                                                <motion.div
                                                    className="space-y-2"
                                                    variants={staggerContainer}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                >
                                                    {program.features.map((feature, idx) => (
                                                        <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                                                            <motion.div className="w-2 h-2 bg-blue-600 rounded-full" whileHover={{ scale: 1.5 }} />
                                                            <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </div>
                                        <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                                            <Link href="/contact">
                                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                                                    Learn More
                                                </Button>
                                            </Link>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>


            {/* Upcoming Exchanges */}
            <section className="py-20 bg-gray-50" ref={upcomingRef}>
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16 px-4"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={upcomingInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Upcoming Exchanges</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't miss these exciting opportunities to participate in our upcoming exchange programs.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={upcomingInView ? "visible" : "hidden"}
                    >
                        {upcomingExchanges.map((exchange, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                            >
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-ecc-slate mb-2">{exchange.program}</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="h-4 w-4 text-blue-600" />
                                                <span className="text-sm text-gray-600">{exchange.destination}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="h-4 w-4 text-blue-600" />
                                                <span className="text-sm text-gray-600">{exchange.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Users className="h-4 w-4 text-blue-600" />
                                                <span className="text-sm text-gray-600">{exchange.spots}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Clock className="h-4 w-4 text-red-600" />
                                                <span className="text-sm text-red-600">Deadline: {exchange.deadline}</span>
                                            </div>
                                        </div>
                                        <motion.div className="mt-4" whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
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
                title="Ready to Start Your Exchange Journey?"
                description="Apply now to join our school exchange programs and experience transformative learning, cultural immersion, and global friendships across Europe and Nigeria."
                primaryLabel="Apply Today"
                primaryHref="/contact"
                secondaryLabel="Get Information"
                secondaryHref="/contact"
            />
        </div>
    )
}
