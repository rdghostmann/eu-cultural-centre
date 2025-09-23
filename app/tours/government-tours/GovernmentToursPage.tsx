// GovernmentToursPage.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Users, Shield, Globe, Calendar, Award } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation, scrollVariants } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { GovernmentTourData } from "@/lib/GovernmentTour"
import { useTranslations } from "next-intl"

export default function GovernmentToursPage() {
    const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
    const { ref: servicesRef, isInView: servicesInView } = useScrollAnimation()
    const { ref: itineraryRef, isInView: itineraryInView } = useScrollAnimation()

    const hoverLift = { y: -5, scale: 1.05 }
    const t = useTranslations("GovernmentTour")

    const services = [
        {
            title: t("services.delegations.title"),
            description: t("services.delegations.description"),
            icon: <Users className="h-6 w-6" />,
            features: t.raw("services.delegations.features") as string[],
        },
        {
            title: t("services.cultural.title"),
            description: t("services.cultural.description"),
            icon: <Globe className="h-6 w-6" />,
            features: t.raw("services.cultural.features") as string[],
        },
        {
            title: t("services.state.title"),
            description: t("services.state.description"),
            icon: <Shield className="h-6 w-6" />,
            features: t.raw("services.state.features") as string[],
        },
    ]

    const itinerary = t.raw("itinerary") as {
        day: string
        title: string
        activities: string[]
    }[]

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="hidden relative bg-gradient-to-br from-gray-700 via-gray-700 to-gray-900 text-white py-20">
                <motion.div className="absolute inset-0 bg-black/30" initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
                <div className="container mx-auto relative z-10">
                    <motion.div
                        ref={heroRef}
                        variants={scrollVariants}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        className="max-w-4xl mx-auto flex flex-col space-y-4 text-center items-center justify-center"
                    >
                        <Badge className="mb-6 bg-white/20 text-white border-white/30">
                            {t("badge")}
                        </Badge>
                        <h1 className="px-2 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            {t("heroTitle")}
                        </h1>
                        <p className="px-2 text-xl mb-8 text-gray-200 max-w-3xl">{t("heroDescription")}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90">
                                    <Link href="#services">
                                        {t("exploreServices")} <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent">
                                    <Link href="/contact">{t("requestConsultation")}</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <HeaderSlider2 images={GovernmentTourData} />

            {/* Quick Info */}
            <section className="py-12">
                <div className="container mx-auto">
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: Calendar, title: t("quickInfo.duration.title"), value: t("quickInfo.duration.value") },
                            { icon: Users, title: t("quickInfo.groupSize.title"), value: t("quickInfo.groupSize.value") },
                            { icon: Shield, title: t("quickInfo.security.title"), value: t("quickInfo.security.value") },
                            { icon: Award, title: t("quickInfo.experience.title"), value: t("quickInfo.experience.value") },
                        ].map((item, index) => (
                            <motion.div key={index} className="text-center flex flex-col items-center" variants={staggerItem}>
                                <motion.div
                                    className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-600 via-cyan-600 to-blue-700 rounded-full mb-3"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
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
                <div className="container mx-auto">
                    <motion.div
                        variants={scrollVariants}
                        initial="hidden"
                        animate={servicesInView ? "visible" : "hidden"}
                        className="text-center py-5 mb-16 px-4 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">{t("servicesTitle")}</h2>
                        <p className="text-xl text-white max-w-3xl mx-auto">{t("servicesDescription")}</p>
                    </motion.div>

                    <motion.div className="grid lg:grid-cols-3 gap-8 px-7" variants={staggerContainer} initial="hidden" animate={servicesInView ? "visible" : "hidden"}>
                        {services.map((service, index) => (
                            <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                                <Card className="h-full hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3 mb-3">
                                            {service.icon}
                                            <CardTitle className="text-xl text-slate-600">{service.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-gray-600">{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <motion.div className="w-2 h-2 bg-green-500 rounded-full" whileHover={{ scale: 1.5 }} />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Itinerary */}
            <section className="py-20 bg-gray-50" ref={itineraryRef}>
                <div className="container mx-auto">
                    <motion.div className="text-center mb-16 px-4" variants={fadeInUp} initial="hidden" animate={itineraryInView ? "visible" : "hidden"}>
                        <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">{t("itineraryTitle")}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("itineraryDescription")}</p>
                    </motion.div>

                    <motion.div className="space-y-6 px-4" variants={staggerContainer} initial="hidden" animate={itineraryInView ? "visible" : "hidden"}>
                        {itinerary.map((phase, index) => (
                            <motion.div key={index} variants={staggerItem}>
                                <Card>
                                    <CardHeader className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700">
                                        <div className="flex items-center space-x-3">
                                            <motion.div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center" whileHover={{ scale: 1.2 }}>
                                                <span className="text-white text-sm font-bold">{index + 1}</span>
                                            </motion.div>
                                            <div>
                                                <CardTitle className="text-ecc-slate">{phase.day}</CardTitle>
                                                <CardDescription className="text-lg text-white font-medium">{phase.title}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {phase.activities.map((activity, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <motion.div className="w-2 h-2 bg-blue-600 rounded-full" whileHover={{ scale: 1.5 }} />
                                                    <span className="text-sm text-gray-600">{activity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title={t("cta.title")}
                description={t("cta.description")}
                primaryLabel={t("cta.primaryLabel")}
                primaryHref="/contact"
                secondaryLabel={t("cta.secondaryLabel")}
                secondaryHref="/contact"
            />
        </div>
    )
}
