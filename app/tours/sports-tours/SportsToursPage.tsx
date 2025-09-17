// tours/SportsToursPage.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Trophy, Users, Calendar, Shield } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { SportsTourData } from "@/lib/SportsTourData"
import { useTranslations } from "next-intl"

export default function SportsToursPage() {
  const t = useTranslations("SportsTours")

  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: tournamentsRef, isInView: tournamentsInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  const sportsPrograms = t.raw("programs.items")
  const upcomingTournaments = t.raw("tournaments.items")

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-12 px-4 sm:py-20 sm:px-6">
        <motion.div className="absolute inset-0 bg-black/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
        <div className="relative z-10 max-w-2xl mx-auto sm:max-w-4xl" ref={heroRef}>
          <motion.div className="text-center" variants={staggerContainer} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
            <motion.div variants={staggerItem}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">{t("badge")}</Badge>
            </motion.div>
            <motion.h1 className="text-2xl sm:text-4xl font-bold mb-4" variants={staggerItem}>
              {t("heroTitle")}
            </motion.h1>
            <motion.p className="text-base sm:text-xl mb-6 text-green-100 max-w-xl mx-auto" variants={staggerItem}>
              {t("heroDescription")}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90 w-full sm:w-auto">
                  <Link href="#programs">
                    {t("exploreButton")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent w-full sm:w-auto">
                  <Link href="/contact">{t("registerButton")}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HeaderSlider2 images={SportsTourData} />

      {/* Quick Info */}
      <section className="py-12 bg-ecc-beige">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-4 px-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Calendar, title: t("quickInfo.seasonTitle"), value: t("quickInfo.seasonValue") },
              { icon: Users, title: t("quickInfo.participantsTitle"), value: t("quickInfo.participantsValue") },
              { icon: Trophy, title: t("quickInfo.tournamentsTitle"), value: t("quickInfo.tournamentsValue") },
              { icon: Shield, title: t("quickInfo.safetyTitle"), value: t("quickInfo.safetyValue") },
            ].map((item, index) => (
              <motion.div key={index} className="text-center" variants={staggerItem} whileHover={hoverLift}>
                <motion.div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-full mb-3" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <item.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-ecc-slate mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sports Programs */}
      <section id="programs" className="py-16 lg:py-20" ref={programsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp} initial="hidden" animate={programsInView ? "visible" : "hidden"}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">{t("programs.title")}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">{t("programs.description")}</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" variants={staggerContainer} initial="hidden" animate={programsInView ? "visible" : "hidden"}>
            {sportsPrograms.map((program: any, index: number) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift} className="flex">
                <Card className="h-full w-full hover:shadow-lg transition-all duration-300 flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div className="text-2xl sm:text-3xl lg:text-4xl" whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }} transition={{ duration: 0.5 }}>
                        {program.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-base sm:text-lg lg:text-xl text-ecc-slate">{program.title}</CardTitle>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          <Badge variant="secondary">{program.duration}</Badge>
                          <Badge variant="outline">{program.ageGroup}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm sm:text-base text-gray-600">{program.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col justify-between">
                    <motion.div className="space-y-2 sm:space-y-3 mb-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      {program.features.map((feature: string, idx: number) => (
                        <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                          <motion.div className="w-2 h-2 bg-green-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-green-600 hover:bg-green-700">{t("programs.learnMoreButton")}</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:py-20 bg-gray-50" ref={tournamentsRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp} initial="hidden" animate={tournamentsInView ? "visible" : "hidden"}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">{t("tournaments.title")}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t("tournaments.description")}</p>
          </motion.div>

          <motion.div className="max-w-4xl mx-auto space-y-6" variants={staggerContainer} initial="hidden" animate={tournamentsInView ? "visible" : "hidden"}>
            {upcomingTournaments.map((t: any, index: number) => (
              <motion.div key={index} className="flex flex-col sm:flex-row items-start sm:space-x-4 bg-white rounded-lg shadow p-4" variants={staggerItem} whileHover={{ x: 5 }}>
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mb-3 sm:mb-0">
                  <Trophy className="text-white h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ecc-slate">{t.name}</h3>
                  <p className="text-sm text-gray-600">{t.date} • {t.location}</p>
                  <p className="text-sm text-gray-500">{t.participants} — {t.status}</p>
                </div>
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
