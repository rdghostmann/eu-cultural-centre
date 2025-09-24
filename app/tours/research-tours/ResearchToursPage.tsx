// ResearchTourPage.tsx

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Clock, Award, Database, Microscope } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { ResearchTourData } from "@/lib/ResearchTourData"
import { useTranslations } from "next-intl"


export default function ResearchToursPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: areasRef, isInView: areasInView } = useScrollAnimation()
  const { ref: supportRef, isInView: supportInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 };
  const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up

  const t = useTranslations("ResearchTour")

  const researchAreas = [
    {
      title: t("culturalPolicy.title"),
      description: t("culturalPolicy.description"),
      icon: <BookOpen className="h-6 w-6" />,
      duration: t("culturalPolicy.duration"),
      features: [
        t("culturalPolicy.features.analysis"),
        t("culturalPolicy.features.interviews"),
        t("culturalPolicy.features.comparative"),
        t("culturalPolicy.features.report"),
      ],
    },
    {
      title: t("archaeology.title"),
      description: t("archaeology.description"),
      icon: <Microscope className="h-6 w-6" />,
      duration: t("archaeology.duration"),
      features: [
        t("archaeology.features.excavation"),
        t("archaeology.features.artifacts"),
        t("archaeology.features.documentation"),
        t("archaeology.features.lab"),
      ],
    },
    {
      title: t("ethnography.title"),
      description: t("ethnography.description"),
      icon: <Users className="h-6 w-6" />,
      duration: t("ethnography.duration"),
      features: [
        t("ethnography.features.community"),
        t("ethnography.features.history"),
        t("ethnography.features.mapping"),
        t("ethnography.features.observation"),
      ],
    },
    {
      title: t("ethnography.title"),
      description: t("ethnography.description"),
      icon: <Users className="h-6 w-6" />,
      duration: t("ethnography.duration"),
      features: [
        t("archives.features.access"),
        t("archives.features.scanning"),
        t("archives.features.cataloguing"),
        t("archives.features.assistance"),
      ],
    },
  ]

  const supportServices = t.raw("supportServices")

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 text-white py-12 px-4 sm:py-20 sm:px-6">
        <motion.div className="absolute inset-0 bg-black/20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
        <div className="relative z-10 max-w-2xl mx-auto sm:max-w-4xl" ref={heroRef}>
          <motion.div className="text-center" variants={staggerContainer} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
            <motion.div variants={staggerItem}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Research Tours</Badge>
            </motion.div>
            <motion.h1 className="text-2xl sm:text-4xl font-bold mb-4" variants={staggerItem}>
              Academic Research & Exchange
            </motion.h1>
            <motion.p className="text-base sm:text-xl mb-6 text-indigo-100 max-w-xl mx-auto" variants={staggerItem}>
              Comprehensive research support for academics, scholars, and students conducting fieldwork, archival research, and cultural studies across Africa with expert local guidance.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90 w-full sm:w-auto">
                  <Link href="#research-areas">
                    Explore Research Areas <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-800 bg-transparent w-full sm:w-auto">
                  <Link href="/contact">Apply for Residency</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <HeaderSlider2 images={ResearchTourData} />


      {/* Quick Info */}
      <section className="py-8 px-4 sm:py-12 sm:px-6 bg-ecc-beige">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Clock,
                title: t("durationTitle"),
                value: t("durationValue"),
              },
              {
                icon: Users,
                title: t("researchersTitle"),
                value: t("researchersValue"),
              },
              {
                icon: Award,
                title: t("successTitle"),
                value: t("successValue"),
              },
              {
                icon: Database,
                title: t("archivesTitle"),
                value: t("archivesValue"),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-lg shadow-sm py-6 px-2 sm:px-4"
                variants={staggerItem}
                whileHover={hoverLift}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full mb-3"
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

      {/* Research Areas */}
      <section id="research-areas" className="py-20" ref={areasRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={areasInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">{t("areasTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("areasDescription")}
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={areasInView ? "visible" : "hidden"}
          >
            {researchAreas.map((area, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div
                        className="p-3 bg-indigo-100 rounded-lg text-indigo-600"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {area.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-ecc-slate">{area.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {area.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="space-y-3 mb-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {area.features.map((feature, idx) => (
                        <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                          <motion.div className="w-2 h-2 bg-indigo-600 rounded-full" whileHover={{ scale: 1.5 }} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">{t("learnMore")}</Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-gray-50" ref={supportRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={supportInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">{t("supportTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("supportDescription")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4"
            variants={staggerContainer}
            initial="hidden"
            animate={supportInView ? "visible" : "hidden"}
          >
            {supportServices.map((service:any, index:number) => (
              <motion.div
                key={index}
                className="bg-white flex flex-col items-center justify-center p-6 rounded-lg shadow-sm text-center"
                variants={staggerItem}
                whileHover={{
                  y: -5,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-indigo-600 font-bold">{index + 1}</span>
                </motion.div>
                <h4 className="font-semibold text-sm  text-ecc-slate mb-2">{service}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">{t("processTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("processDescription")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "1",
                title: t("processSteps.step1.title"),
                description: t("processSteps.step1.description"),
              },
              {
                step: "2",
                title: t("processSteps.step2.title"),
                description: t("processSteps.step2.description"),
              },
              {
                step: "3",
                title: t("processSteps.step3.title"),
                description: t("processSteps.step3.description"),
              },
            ].map((step, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-white text-xl font-bold">{step.step}</span>
                    </motion.div>
                    <CardTitle className="text-xl text-ecc-slate">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTASection */}
      <CTASection
        title={t("ctaTitle")}
        description={t("ctaDescription")}
        primaryLabel={t("ctaPrimary")}
        primaryHref="/contact"
        secondaryLabel={t("ctaSecondary")}
        secondaryHref="/contact"
      />
    </div>
  )
}
