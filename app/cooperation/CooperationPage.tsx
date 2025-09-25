// People-to-People-Cooperation
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
import { useTranslations } from "next-intl"

export default function CooperationPage() {
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: partnershipsRef, isInView: partnershipsInView } = useScrollAnimation()

  const t = useTranslations("CooperationPage")

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  const cooperationPrograms = [
    {
      key: "culturalDiplomacy",
      icon: <Globe className="h-6 w-6" />
    },
    {
      key: "internationalPartnerships",
      icon: <Building className="h-6 w-6" />
    },
    {
      key: "peacebuilding",
      icon: <Heart className="h-6 w-6" />
    },
    {
      key: "communityNetworking",
      icon: <MessageCircle className="h-6 w-6" />
    },
    {
      key: "civilSociety",
      icon: <Users className="h-6 w-6" />
    },
    {
      key: "governmentTours",
      icon: <Users2 className="h-6 w-6" />
    }
  ]

  const partnerships = [
    { key: "euDelegation" },
    { key: "britishCouncil" },
    { key: "goetheInstitut" },
    { key: "africanUnion" }
  ]

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <HeaderSlider2 images={CooperationPageCarouselData} />

      {/* Cooperation Programs */}
      <section id="programs" className="py-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              {t("programs.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("programs.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {cooperationPrograms.map((program, index) => (
              <motion.div key={program.key} variants={staggerItem} whileHover={hoverLift}>
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
                        <CardTitle className="text-xl text-ecc-slate">
                          {t(`${program.key}.title`)}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {t(`${program.key}.impact`)}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">
                      {t(`${program.key}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="space-y-3 mb-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {Object.values(t.raw(`${program.key}.features`)).map((feature: any, idx: number) => (
                        <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                          <motion.div className="w-2 h-2 bg-indigo-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                          {t("learnMore")}
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

      {/* Key Partnerships */}
      <section className="py-20 bg-gray-50" ref={partnershipsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={partnershipsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              {t("partnerships.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("partnerships.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-6 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={partnershipsInView ? "visible" : "hidden"}
          >
            {partnerships.map((p) => (
              <motion.div
                key={p.key}
                variants={staggerItem}
                whileHover={{ x: 5, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-ecc-slate mb-1">
                          {t(`partnerships.list.${p.key}.name`)}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {t(`partnerships.list.${p.key}.focus`)}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{t(`partnerships.list.${p.key}.type`)}</Badge>
                          <span className="text-sm text-gray-500">
                            {t(`partnerships.list.${p.key}.established`)}
                          </span>
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
        title={t("cta.title")}
        description={t("cta.description")}
        primaryLabel={t("cta.primaryLabel")}
        primaryHref="/contact"
        secondaryLabel={t("cta.secondaryLabel")}
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
