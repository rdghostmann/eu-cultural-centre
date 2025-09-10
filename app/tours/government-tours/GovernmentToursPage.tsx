"use client"


import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Users, Shield, Globe, Calendar, Award, MapPin } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation"
import CTASection from '@/components/CTASection/CTASection'
import HeaderSlider2 from '@/components/CustomSlider/HeaderSlider2'
import { GovernmentTourData } from '@/lib/GovernmentTour'

const services = [
    {
        title: "High-Level Delegations",
        description: "Protocol support for ministerial and diplomatic visits with cultural programming.",
        icon: <Users className="h-6 w-6" />,
        features: ["VIP protocol services", "Cultural site visits", "Meeting facilitation", "Media coordination"],
    },
    {
        title: "Cultural Diplomacy Programs",
        description: "Structured programs promoting cultural understanding between nations.",
        icon: <Globe className="h-6 w-6" />,
        features: ["Bilateral exchanges", "Cultural showcases", "Policy dialogues", "Partnership development"],
    },
    {
        title: "Official State Visits",
        description: "Comprehensive support for state-level cultural and educational exchanges.",
        icon: <Shield className="h-6 w-6" />,
        features: ["Security coordination", "Cultural presentations", "Educational showcases", "Media coverage"],
    },
]

const itinerary = [
    {
        day: "Day 1",
        title: "Arrival & Welcome",
        activities: ["VIP airport reception", "Welcome ceremony", "Cultural briefing", "Official dinner"],
    },
    {
        day: "Day 2-3",
        title: "Cultural Immersion",
        activities: ["Heritage site visits", "Art gallery tours", "Traditional performances", "Craft workshops"],
    },
    {
        day: "Day 4-5",
        title: "Educational Partnerships",
        activities: ["University visits", "School partnerships", "Research collaborations", "Academic forums"],
    },
    {
        day: "Day 6",
        title: "Business & Innovation",
        activities: ["Innovation hub tours", "Business roundtables", "Tech demonstrations", "Partnership signings"],
    },
]

export default function GovernmentToursPage() {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
    const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation()
    const { ref: itineraryRef, isInView: itineraryInView } = useScrollAnimation()

    const hoverScale = { scale: 1.05 };
    const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up


    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="hidden relative bg-gradient-to-br from-gray-700 via-gray-700 to-gray-900 text-white py-20">
                <motion.div
                    className="absolute inset-0 bg-black/30"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Floating diplomatic element */}
                <motion.div
                    className="absolute top-20 right-20 text-4xl opacity-20"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    🏛️
                </motion.div>

                <div className="container  mx-auto relative z-10">
                    <motion.div
                        ref={heroRef}
                        variants={scrollVariants}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        className="max-w-4xl mx-auto flex flex-col space-y-4 text-center items-center justify-center" // ⬅ left aligned instead of center
                    >
                        <Badge className="mb-6 bg-white/20 text-white border-white/30">
                            Government Tours
                        </Badge>

                        <h1 className="px-2 sm:px-0 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            Cultural Diplomacy & Official Delegations
                        </h1>

                        <p className="px-2 sm:px-0 text-xl mb-8 text-gray-200 max-w-3xl">
                            Professional protocol support and cultural programming for government delegations, diplomatic missions,
                            and high-level official visits promoting international cooperation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90">
                                    <Link href="#services">
                                        Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                                >
                                    <Link href="/contact">Request Consultation</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <HeaderSlider2 images={GovernmentTourData} />


            {/* Quick Info */}
            <section className="py-12 ">
                <div className="container mx-auto">
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: Calendar, title: "Duration", value: "3-7 days" },
                            { icon: Users, title: "Group Size", value: "5-50 delegates" },
                            { icon: Shield, title: "Security", value: "Full protocol" },
                            { icon: Award, title: "Experience", value: "15+ years" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                ref={heroRef}
                                variants={scrollVariants}
                                initial="hidden"
                                animate={heroInView ? "visible" : "hidden"}
                                className="text-center flex flex-col items-center"
                            >

                                <motion.div
                                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-600 via-cyan-600 to-blue-700 rounded-full mb-3 sm:mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    <item.icon className="h-6 w-6 text-white" />
                                </motion.div>

                                <h3 className="font-semibold text-gray-600 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.value}</p>
                            </motion.div>

                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-10" ref={servicesRef}>
                <div className="container mx-auto ">
                    {/* Section Header */}
                    <motion.div
                        variants={scrollVariants}
                        initial="hidden"
                        animate={servicesInView ? "visible" : "hidden"}
                        className="text-center py-5 mb-16 px-4 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                            Our Diplomatic Services
                        </h2>
                        <p className="text-xl text-white max-w-3xl mx-auto">
                            Comprehensive support for government delegations with cultural programming and protocol expertise.
                        </p>
                    </motion.div>

                    {/* Service Cards */}
                    <motion.div
                        className="grid lg:grid-cols-3 gap-8 px-7"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={servicesInView ? "visible" : "hidden"}
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                                <Card className="h-full hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3 mb-3">
                                            <motion.div
                                                className="p-3 bg-blue/10 rounded-lg text-blue-500"
                                                whileHover={{ scale: 1.1, rotate: 360 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            >
                                                {service.icon}
                                            </motion.div>
                                            <CardTitle className="text-xl text-slate-600">{service.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-gray-600">{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <motion.div
                                            className="space-y-3"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {service.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="flex items-center space-x-2"
                                                    variants={staggerItem}
                                                >
                                                    <motion.div
                                                        className="w-2 h-2 bg-green-500 rounded-full"
                                                        whileHover={{ scale: 1.5 }}
                                                    />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sample Itinerary */}
            <section className="py-20 bg-gray-50" ref={itineraryRef}>
                <div className="container mx-auto">
                    <motion.div
                        className="text-center mb-16 px-4"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={itineraryInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Sample 6-Day Diplomatic Program</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comprehensive cultural diplomacy program designed for high-level government delegations.
                        </p>
                    </motion.div>

                    <motion.div
                        className="container mx-auto space-y-6 px-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={itineraryInView ? "visible" : "hidden"}
                    >
                        {itinerary.map((phase, index) => (
                            <motion.div key={index} variants={staggerItem} whileHover={{ x: 5 }}>
                                <Card className="overflow-hidden">
                                    <CardHeader className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700">
                                        <div className="flex items-center space-x-3">
                                            <motion.div
                                                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                <span className="border text-white size-5 p-4 flex items-center justify-center rounded-full text-center text-sm font-bold">{index + 1}</span>
                                            </motion.div>
                                            <div>
                                                <CardTitle className="text-ecc-slate">{phase.day}</CardTitle>
                                                <CardDescription className="text-lg text-white font-medium">{phase.title}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <motion.div
                                            className="grid md:grid-cols-2 gap-4"
                                            variants={staggerContainer}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            {phase.activities.map((activity, idx) => (
                                                <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                                                    <MapPin className="h-4 w-4 text-ecc-green" />
                                                    <span className="text-gray-700">{activity}</span>
                                                </motion.div>
                                            ))}
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
                title="Ready to Arrange Your Delegation?"
                description="Contact our diplomatic services team to plan your next cultural diplomacy mission or official government visit. We provide full protocol support and tailored cultural programs for delegations."
                primaryLabel="Arrange a Delegation"
                primaryHref="/contact"
                secondaryLabel="Request Information"
                secondaryHref="/contact"
            />

        </div>
    )
}
