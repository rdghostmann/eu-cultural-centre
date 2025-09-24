// tours/nigeria-local-tourism
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { NigerianDomesticTourData } from "@/lib/NigerianDomesticTour"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function NigeriaLocalTourismPage() {
  const { ref: toursRef, isInView: toursInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  const t = useTranslations("NigeriaLocalTourismPage")

  // Nigeria Local Tourism Attractions (now translation-driven)
  const attractions = [
    {
      key: "obudu",
      image: "/nigerian-domestic-tour/obudu-mountain-resort.jpg",
    },
    {
      key: "ogbunike",
      image: "/nigerian-domestic-tour/Ogbunike-Cave.jpg",
    },
    {
      key: "calabar",
      image: "/nigerian-domestic-tour/calabar-carnival.jpg",
    },
    {
      key: "yankari",
      image: "/nigerian-domestic-tour/First-Gate-of-Yankari-Game-Rerserve-at-Mainamaji.jpg",
    },
    {
      key: "erin",
      image: "/nigerian-domestic-tour/erin-ijesha-waterfalls.jpg",
    },
    {
      key: "awhum",
      image: "/nigerian-domestic-tour/Awhum-Waterfall.jpg",
    },
    {
      key: "sukur",
      image: "/nigerian-domestic-tour/sukur-cultural-landscape.jpg",
    },
    {
      key: "yobe",
      image: "/nigerian-domestic-tour/Yobe-Desert-Safari.jpg",
    },
  ]

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* Hero Section */}
      <HeaderSlider2 images={NigerianDomesticTourData} />

      {/* Attractions Section */}
      <section id="attractions" className="py-12 px-4 sm:py-20 sm:px-6" ref={toursRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={toursInView ? "visible" : "hidden"}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-ecc-slate mb-3">
              {t("attractions.title")}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-xl mx-auto">
              {t("attractions.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate={toursInView ? "visible" : "hidden"}
          >
            {attractions.map((tour, index) => (
              <motion.div key={tour.key} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
                  {/* Image on Top */}
                  <div className="relative w-full h-48">
                    <Image
                      src={tour.image}
                      alt={t(`attractions.items.${tour.key}.title`)}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>

                  {/* Card Content */}
                  <CardHeader>
                    <CardTitle className="text-lg text-ecc-slate">
                      {t(`attractions.items.${tour.key}.title`)}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      {t(`attractions.items.${tour.key}.date`)}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-gray-600">
                      {t(`attractions.items.${tour.key}.description`)}
                    </CardDescription>
                    <p className="flex items-center text-sm text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />{" "}
                      {t(`attractions.items.${tour.key}.location`)}
                    </p>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                        <Link href="/contact">{t("attractions.bookNow")}</Link>
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
        title={t("cta.title")}
        description={t("cta.description")}
        primaryLabel={t("cta.primary")}
        primaryHref="/contact"
        secondaryLabel={t("cta.secondary")}
        secondaryHref="/contact"
      />
    </div>
  )
}
