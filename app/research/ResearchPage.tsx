// app/(legal)/research/ResearchPage.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Document, Page, pdfjs } from "react-pdf"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Users, Award, Search, TrendingUp } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { ResearchPageCarouselData } from "@/lib/ResearchPageCarouselData"

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

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

const articles = [
  {
    title: "Cultural Exchange Programs",
    subtitle: "Years of Impact",
    authors: "ECC Nigeria Research Team",
    publication: "Cultural Diplomacy Review • 2025",
    file: "/pdfs/cultural-exchange.pdf",
  },
  {
    title: "Digital Heritage in Africa",
    subtitle: "Opportunities and Challenges",
    authors: "Judith Ifezue & Prof. John Smith",
    publication: "Int'l Journal of Cultural Heritage • 2025",
    file: "/pdfs/digital-heritage.pdf",
  },
  {
    title: "Innovation in European Cultural Sectors",
    subtitle: "",
    authors: "Judith Ifezue, Dr. Kwame Asante & Dr. Sarah Johnson",
    publication: "European Cultural Studies • 2026",
    file: "/pdfs/innovation-europe.pdf",
  },
  {
    title: "Policy Framework for Cultural Cooperation",
    subtitle: "",
    authors: "ECC Nigeria Policy Team",
    publication: "Policy Brief Series • 2025",
    file: "/pdfs/policy-framework.pdf",
  },
]

export default function ResearchPage() {
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  const [open, setOpen] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)

  const handleOpen = (article: typeof articles[0]) => {
    setSelectedArticle(article)
    setPageNumber(1)
    setOpen(true)
  }

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Slider */}
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
                    <motion.div className="space-y-3 mb-6">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-yellow-600 rounded-full" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </motion.div>
                    <Link href="/contact">
                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Recent Publications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our latest research findings and publications contributing to the global understanding of cultural
            cooperation.
          </p>
        </div>
        <div className="container mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {articles.map((article, idx) => (
              <motion.div key={idx} variants={staggerItem}>
                <Card
                  className="cursor-pointer hover:shadow-lg transition-all h-full"
                  onClick={() => handleOpen(article)}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-ecc-slate">{article.title}</CardTitle>
                    {article.subtitle && (
                      <CardDescription className="text-gray-700">{article.subtitle}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">By {article.authors}</p>
                    <p className="text-xs text-gray-500">{article.publication}</p>
                    <Button
                      className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700"
                      onClick={() => handleOpen(article)}
                    >
                      Read more
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dialog with react-pdf */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl mx-auto w-[95vw] h-[90vh] p-0 overflow-hidden">
          {selectedArticle && (
            <>
              <DialogHeader className="p-4 border-b">
                <DialogTitle>{selectedArticle.title}</DialogTitle>
                <p className="text-sm text-gray-600">{selectedArticle.authors} • {selectedArticle.publication}</p>
              </DialogHeader>
              <div className="w-full h-[calc(90vh-6rem)] overflow-auto flex flex-col items-center bg-gray-100">
                <Document
                  file={selectedArticle.file}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="mx-auto"
                >
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-md"
                  />
                </Document>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setPageNumber(p => Math.max(p - 1, 1))}
                    disabled={pageNumber <= 1}
                  >
                    Previous
                  </Button>
                  <span className="text-sm">
                    Page {pageNumber} of {numPages}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}
                    disabled={pageNumber >= numPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
