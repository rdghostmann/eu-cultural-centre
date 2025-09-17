"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Clock, Award, Microscope, Globe } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { StudyFieldTripData } from "@/lib/StudyFieldTripData"
import { useTranslations } from "next-intl"

export default function StudyFieldTripsPage() {
  const t = useTranslations("StudyFieldTrips")

  const fieldTripTypes = [
    {
      title: t("tripTypes.culturalImmersion.title"),
      description: t("tripTypes.culturalImmersion.description"),
      icon: <Globe className="h-6 w-6" />,
      duration: t("tripTypes.culturalImmersion.duration"),
      subjects: t.raw("tripTypes.culturalImmersion.subjects"),
      features: t.raw("tripTypes.culturalImmersion.features"),
    },
    {
      title: t("tripTypes.educationalTours.title"),
      description: t("tripTypes.educationalTours.description"),
      icon: <BookOpen className="h-6 w-6" />,
      duration: t("tripTypes.educationalTours.duration"),
      subjects: t.raw("tripTypes.educationalTours.subjects"),
      features: t.raw("tripTypes.educationalTours.features"),
    },
    {
      title: t("tripTypes.professionalTrips.title"),
      description: t("tripTypes.professionalTrips.description"),
      icon: <Award className="h-6 w-6" />,
      duration: t("tripTypes.professionalTrips.duration"),
      subjects: t.raw("tripTypes.professionalTrips.subjects"),
      features: t.raw("tripTypes.professionalTrips.features"),
    },
    {
      title: t("tripTypes.researchStudies.title"),
      description: t("tripTypes.researchStudies.description"),
      icon: <Microscope className="h-6 w-6" />,
      duration: t("tripTypes.researchStudies.duration"),
      subjects: t.raw("tripTypes.researchStudies.subjects"),
      features: t.raw("tripTypes.researchStudies.features"),
    },
  ]

  const sampleItinerary = t.raw("itinerary.days")

  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: typesRef, isInView: typesInView } = useScrollAnimation()
  const { ref: itineraryRef, isInView: itineraryInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 text-white py-12 px-4 sm:py-20 sm:px-6">
        <motion.div className="absolute inset-0 bg-black/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
        <div className="relative z-10 max-w-2xl mx-auto sm:max-w-4xl" ref={heroRef}>
          <motion.div className="text-center" variants={staggerContainer} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
            <motion.div variants={staggerItem}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">{t("badge")}</Badge>
            </motion.div>
            <motion.h1 className="text-2xl sm:text-4xl font-bold mb-4" variants={staggerItem}>
              {t("heroTitle")}
            </motion.h1>
            <motion.p className="text-base sm:text-xl mb-6 text-cyan-100 max-w-xl mx-auto" variants={staggerItem}>
              {t("heroDescription")}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90 w-full sm:w-auto">
                  <Link href="#field-trips">
                    {t("exploreButton")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent w-full sm:w-auto">
                  <Link href="/contact">{t("planTripButton")}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HeaderSlider2 images={StudyFieldTripData} />

      {/* Quick Info */}
      <section className="py-12 bg-ecc-beige">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Clock, title: t("quickInfo.durationTitle"), value: t("quickInfo.durationValue") },
              { icon: Users, title: t("quickInfo.groupSizeTitle"), value: t("quickInfo.groupSizeValue") },
              { icon: BookOpen, title: t("quickInfo.subjectsTitle"), value: t("quickInfo.subjectsValue") },
              { icon: Award, title: t("quickInfo.certificationTitle"), value: t("quickInfo.certificationValue") },
            ].map((item, index) => (
              <motion.div key={index} className="text-center" variants={staggerItem} whileHover={hoverLift}>
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-ecc-slate mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Field Trip Types */}
      <section id="field-trips" className="py-20" ref={typesRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={typesInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">{t("categories.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("categories.description")}</p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={typesInView ? "visible" : "hidden"}
          >
            {fieldTripTypes.map((trip, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div className="p-3 bg-teal-100 rounded-lg text-teal-600" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                        {trip.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-ecc-slate">{trip.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">{trip.duration}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{trip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-ecc-slate mb-2">{t("tripTypes.subjectAreas")}</h4>
                        <div className="flex flex-wrap gap-1">
                          {trip.subjects.map((subject: string, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs">{subject}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-ecc-slate mb-2">{t("tripTypes.keyFeatures")}</h4>
                        <motion.div className="space-y-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                          {trip.features.map((feature: string, idx: number) => (
                            <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                              <motion.div className="w-2 h-2 bg-teal-600 rounded-full" whileHover={{ scale: 1.5 }} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                    <motion.div className="mt-6" whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">{t("tripTypes.learnMoreButton")}</Button>
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
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:py-20 bg-gray-50" ref={itineraryRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp} initial="hidden" animate={itineraryInView ? "visible" : "hidden"}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">{t("itinerary.title")}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">{t("itinerary.description")}</p>
          </motion.div>

          <motion.div className="max-w-4xl mx-auto" variants={staggerContainer} initial="hidden" animate={itineraryInView ? "visible" : "hidden"}>
            {Object.entries(sampleItinerary).map(([day, data]: any, index) => (
              <motion.div key={index} className="flex flex-col sm:flex-row items-start sm:space-x-4 mb-6" variants={staggerItem} whileHover={{ x: 5 }}>
                <motion.div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mb-3 sm:mb-0" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <span className="text-white font-bold text-sm sm:text-base">Day {day}</span>
                </motion.div>
                <Card className="flex-grow w-full px-4 py-5 sm:px-6">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg md:text-xl text-ecc-slate">{data.focus}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      {data.activities.map((activity: string, idx: number) => (
                        <motion.div key={idx} className="text-sm sm:text-base text-gray-600 bg-gray-100 p-2 rounded" variants={staggerItem}>
                          {activity}
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

      {/* CTASection */}
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
