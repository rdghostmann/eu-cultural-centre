// app/news-research/page.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

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
    publication: "Unpublished Research • 2025",
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

export default function NewsAndResearchPage() {
  const [open, setOpen] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)

  const handleOpen = (article: typeof articles[0]) => {
    setSelectedArticle(article)
    setOpen(true)
  }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero */}


      {/* Articles */}
      <section className="py-20 bg-gray-50">
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
                    <CardTitle className="text-xl text-ecc-slate">
                      {article.title}
                    </CardTitle>
                    {article.subtitle && (
                      <CardDescription className="text-gray-700">
                        {article.subtitle}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">By {article.authors}</p>
                    <p className="text-xs text-gray-500">{article.publication}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dialog with PDF iframe */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl mx-auto w-[95vw] h-[90vh] p-0 overflow-hidden">
          {selectedArticle && (
            <>
              <DialogHeader className="p-4 border-b">
                <DialogTitle>{selectedArticle.title}</DialogTitle>
                <p className="text-sm text-gray-600">
                  {selectedArticle.authors} • {selectedArticle.publication}
                </p>
              </DialogHeader>
              <div className="w-full h-[calc(90vh-4rem)] bg-gray-100">
                <iframe
                  src={selectedArticle.file}
                  className="w-full h-full"
                  title={selectedArticle.title}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
