// ResearchPage.tsx
"use client"
import { useState } from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Users, Award, Search, TrendingUp, Calendar } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { ResearchPageCarouselData } from "@/lib/ResearchPageCarouselData"

const researchPrograms = [
   {
      title: "Cultural Policy Research",
      description: "In-depth research on cultural policies and their impact on international cooperation.",
      icon: <FileText className="h-6 w-6" />,
      features: ["Policy analysis", "Impact studies", "Comparative research", "Recommendations"],
      impact: "25+ policy papers published",
   },
   {
      title: "Heritage Studies Program",
      description: "Academic research on cultural heritage preservation and digitization across Africa and Europe.",
      icon: <BookOpen className="h-6 w-6" />,
      features: ["Heritage documentation", "Digital preservation", "Community engagement", "Best practices"],
      impact: "50+ heritage sites studied",
   },
   {
      title: "Cross-Cultural Exchange Research",
      description: "Studies on the effectiveness and impact of cultural exchange programs.",
      icon: <Users className="h-6 w-6" />,
      features: ["Program evaluation", "Impact measurement", "Participant surveys", "Long-term studies"],
      impact: "10,000+ participants surveyed",
   },
   {
      title: "Innovation in Culture Research",
      description: "Research on how technology and innovation are transforming cultural sectors.",
      icon: <TrendingUp className="h-6 w-6" />,
      features: ["Technology adoption", "Digital transformation", "Innovation metrics", "Future trends"],
      impact: "15+ innovation reports",
   },
   {
      title: "Community Impact Studies",
      description: "Research on how cultural programs affect local communities and social development.",
      icon: <Search className="h-6 w-6" />,
      features: ["Social impact", "Economic benefits", "Community development", "Sustainability"],
      impact: "100+ communities studied",
   },
   {
      title: "Academic Partnerships",
      description: "Collaborative research projects with universities and research institutions.",
      icon: <Award className="h-6 w-6" />,
      features: ["Joint research", "Student exchanges", "Faculty collaboration", "Funding opportunities"],
      impact: "20+ university partnerships",
   },
]

// Mock data based on the provided content
const publications = [
   {
      id: "cultural-exchange-programs",
      title: "Cultural Exchange Programs",
      subtitle: "Years of Impact",
      authors: ["ECC Nigeria Research Team"],
      journal: "Cultural Diplomacy Review",
      year: "2025",
      abstract:
         "An in-depth analysis of cultural exchange programs and their lasting impact on international relations and community development over the past decade.",
      category: "Cultural Studies",
   },
   {
      id: "digital-heritage-africa",
      title: "Digital Heritage in Africa",
      subtitle: "Opportunities and Challenges",
      authors: ["Judith Ifezue", "Prof. John Smith"],
      journal: "Int'l Journal of Cultural Heritage",
      year: "2025",
      abstract:
         "Exploring the digitization of African cultural heritage, examining both the opportunities for preservation and the challenges faced in implementation.",
      category: "Digital Heritage",
   },
   {
      id: "innovation-european-cultural-sectors",
      title: "Innovation in European Cultural Sectors",
      subtitle: "",
      authors: ["Judith Ifezue", "Dr. Kwame Asante", "Dr. Sarah Johnson"],
      journal: "European Cultural Studies",
      year: "2026",
      abstract:
         "A comprehensive study of innovative practices and emerging trends within European cultural sectors and their global implications.",
      category: "Innovation",
   },
   {
      id: "policy-framework-cultural-cooperation",
      title: "Policy Framework for Cultural Cooperation",
      subtitle: "",
      authors: ["ECC Nigeria Policy Team"],
      journal: "Policy Brief Series",
      year: "2025",
      abstract:
         "Developing comprehensive policy frameworks to enhance cultural cooperation between nations and foster international understanding.",
      category: "Policy",
   },
]

export default function ResearchPage2() {
   const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
   const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
   const { ref: publicationsRef, isInView: publicationsInView } = useScrollAnimation()
   const hoverScale = { scale: 1.05 };
   const hoverLift = { y: -5, scale: 1.05 }; // lift slightly and scale up


   return (
      <div className="flex flex-col overflow-hidden">
         {/* Hero Section */}
         <section
            className="hidden h-[calc(100vh - 100px )] relative bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-700 text-white py-20">
            <motion.div
               className="absolute inset-0 bg-black/20"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1 }}
            />

            {/* Floating elements */}
            <motion.div
               className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-lg"
               animate={{
                  y: [0, -20, 0],
                  rotate: [0, 45, 0],
               }}
               transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
               }}
            />
            <motion.div
               className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
               animate={{
                  y: [0, 25, 0],
                  scale: [1, 1.1, 1],
               }}
               transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
               }}
            />

            <div className="container relative mx-auto z-10" ref={heroRef}>
               <motion.div
                  className="max-w-4xl mx-auto text-center px-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
               >
                  <motion.div variants={staggerItem}>
                     <Badge className="mb-6 bg-white/20 text-white border-white/30">Creative & Cultural Research</Badge>
                  </motion.div>

                  <motion.h1 className="text-3xl lg:text-5xl font-bold mb-6" variants={staggerItem}>
                     Advancing Knowledge Through Research
                  </motion.h1>

                  <motion.p className="text-xl mb-8 text-yellow-100 max-w-3xl mx-auto" variants={staggerItem}>
                     Research and innovation that strengthens cultural sectors, informs policy decisions, and creates
                     evidence-based solutions for cultural cooperation between Europe and Africa.
                  </motion.p>

                  <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerItem}>
                     <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                        <Button asChild size="lg" className="bg-ecc-green hover:bg-ecc-green/90">
                           <Link href="/contact">
                              Explore Research <ArrowRight className="ml-2 h-5 w-5" />
                           </Link>
                        </Button>
                     </motion.div>
                     <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                        <Button
                           asChild
                           size="lg"
                           variant="outline"
                           className="border-white text-white hover:bg-white hover:text-yellow-700 bg-transparent"
                        >
                           <Link href="/contact">Collaborate With Us</Link>
                        </Button>
                     </motion.div>
                  </motion.div>
               </motion.div>
            </div>
         </section>
         <HeaderSlider2 images={ResearchPageCarouselData} />

         {/* Research Programs */}
         <section id="#programs" className="mt-7 py-20" ref={programsRef}>
            <div className="container mx-auto">
               <motion.div
                  className="text-center mb-16 px-5"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={programsInView ? "visible" : "hidden"}
               >
                  <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Research Programs</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     Comprehensive research initiatives exploring cultural cooperation, heritage preservation, and innovation
                     in the cultural sector.
                  </p>
               </motion.div>

               <motion.div
                  className="grid lg:grid-cols-2 gap-8 px-5"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={programsInView ? "visible" : "hidden"}
               >
                  {researchPrograms.map((program, index) => (
                     <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                        <Card className="h-full hover:shadow-lg transition-all duration-300">
                           <CardHeader>
                              <div className="flex items-center space-x-3 mb-3">
                                 <motion.div
                                    className="p-3 bg-yellow-100 rounded-lg text-yellow-600"
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                 >
                                    {program.icon}
                                 </motion.div>
                                 <div>
                                    <CardTitle className="text-xl text-ecc-slate">{program.title}</CardTitle>
                                    <Badge variant="secondary" className="mt-1">
                                       {program.impact}
                                    </Badge>
                                 </div>
                              </div>
                              <CardDescription className="text-gray-600">{program.description}</CardDescription>
                           </CardHeader>
                           <CardContent>
                              <motion.div
                                 className="space-y-3 mb-6"
                                 variants={staggerContainer}
                                 initial="hidden"
                                 whileInView="visible"
                                 viewport={{ once: true }}
                              >
                                 {program.features.map((feature, idx) => (
                                    <motion.div key={idx} className="flex items-center space-x-2" variants={staggerItem}>
                                       <motion.div className="w-2 h-2 bg-yellow-600 rounded-full" whileHover={{ scale: 1.5 }} />
                                       <span className="text-sm text-gray-600">{feature}</span>
                                    </motion.div>
                                 ))}
                              </motion.div>
                              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                                 <Link href="/contact">
                                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Learn More</Button>
                                 </Link>

                              </motion.div>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* Recent Publications */}
         <section className="py-20 bg-gray-50" ref={publicationsRef}>
            <div className="container mx-auto">
               <motion.div
                  className="text-center mb-16 px-5"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={publicationsInView ? "visible" : "hidden"}
               >
                  <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Recent Publications</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     Our latest research findings and publications contributing to the global understanding of cultural
                     cooperation.
                  </p>
               </motion.div>

               {/* Header Section */}
               <div className="border-b border-border bg-card">
                  <div className="container mx-auto px-4 py-12">
                     <div className="max-w-4xl">
                        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Recent Publications</h1>
                        <p className="text-lg text-muted-foreground text-pretty">
                           Our latest research findings and publications contributing to the global understanding of cultural
                           cooperation.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Publications Grid */}
               <div className="container mx-auto px-4 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {publications.map((publication) => (
                        <Card
                           key={publication.id}
                           className="group hover:shadow-lg transition-all duration-300 border-border bg-card"
                        >
                           <CardHeader className="space-y-4">
                              <div className="flex items-start justify-between gap-2">
                                 <Badge variant="secondary" className="text-xs">
                                    {publication.category}
                                 </Badge>
                                 <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Calendar className="h-3 w-3" />
                                    {publication.year}
                                 </div>
                              </div>

                              <div>
                                 <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors text-balance">
                                    {publication.title}
                                 </CardTitle>
                                 {publication.subtitle && (
                                    <CardDescription className="text-sm font-medium text-muted-foreground mt-1">
                                       {publication.subtitle}
                                    </CardDescription>
                                 )}
                              </div>

                              <div className="space-y-2">
                                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Users className="h-4 w-4" />
                                    <span className="text-pretty">{publication.authors.join(", ")}</span>
                                 </div>

                                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BookOpen className="h-4 w-4" />
                                    <span>{publication.journal}</span>
                                 </div>
                              </div>
                           </CardHeader>

                           <CardContent className="space-y-4">
                              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{publication.abstract}</p>

                              <Link href={`/research/${publication.id}`}>
                                 <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Read More</Button>
                              </Link>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>
            </div>
         </section>


         {/* CTA Section */}
         <CTASection
            title="Join Our Research Community"
            description="Collaborate with leading researchers and contribute to advancing knowledge in cultural cooperation."
            primaryLabel="Collaborate"
            primaryHref="/contact"
            secondaryLabel="Submit Research"
            secondaryHref="/contact"
            className="bg-slate-100 text-white py-16 lg:py-20"
         />

      </div>
   )
}
