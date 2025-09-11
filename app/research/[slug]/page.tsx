import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, BookOpen, Calendar, Users, Download, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a database or API
const publications = {
  "cultural-exchange-programs": {
    id: "cultural-exchange-programs",
    title: "Cultural Exchange Programs",
    subtitle: "Years of Impact",
    authors: ["ECC Nigeria Research Team"],
    journal: "Cultural Diplomacy Review",
    year: "2025",
    category: "Cultural Studies",
    fullAbstract:
      "This comprehensive study examines the long-term impact of cultural exchange programs on international relations and community development. Through extensive research spanning over a decade, we analyze how these programs have fostered cross-cultural understanding, enhanced diplomatic relations, and contributed to sustainable development goals. The research methodology includes quantitative analysis of program outcomes, qualitative interviews with participants, and case studies from multiple countries. Our findings demonstrate significant positive correlations between cultural exchange participation and improved international cooperation, enhanced cultural competency, and strengthened bilateral relationships. The study also identifies key success factors and provides recommendations for optimizing future cultural exchange initiatives.",
    keywords: ["Cultural Exchange", "International Relations", "Community Development", "Cross-cultural Understanding"],
    doi: "10.1234/cdr.2025.001",
    pages: "45-72",
  },
  "digital-heritage-africa": {
    id: "digital-heritage-africa",
    title: "Digital Heritage in Africa",
    subtitle: "Opportunities and Challenges",
    authors: ["Judith Ifezue", "Prof. John Smith"],
    journal: "Int'l Journal of Cultural Heritage",
    year: "2025",
    category: "Digital Heritage",
    fullAbstract:
      "The digitization of African cultural heritage presents unprecedented opportunities for preservation, accessibility, and global engagement while simultaneously facing significant challenges in implementation and sustainability. This research explores the current state of digital heritage initiatives across the African continent, examining successful case studies and identifying barriers to widespread adoption. Through field research in 12 African countries and analysis of over 50 digital heritage projects, we present a comprehensive framework for understanding the complex landscape of digital preservation efforts. The study reveals critical gaps in funding, technical infrastructure, and capacity building while highlighting innovative solutions developed by local communities and institutions. Our recommendations include policy frameworks, technical standards, and collaborative models that can enhance the effectiveness of digital heritage preservation across Africa.",
    keywords: ["Digital Heritage", "Africa", "Cultural Preservation", "Technology", "Accessibility"],
    doi: "10.1234/ijch.2025.003",
    pages: "112-145",
  },
  "innovation-european-cultural-sectors": {
    id: "innovation-european-cultural-sectors",
    title: "Innovation in European Cultural Sectors",
    subtitle: "",
    authors: ["Judith Ifezue", "Dr. Kwame Asante", "Dr. Sarah Johnson"],
    journal: "European Cultural Studies",
    year: "2026",
    category: "Innovation",
    fullAbstract:
      "European cultural sectors are experiencing a transformative period driven by technological innovation, changing audience expectations, and evolving funding models. This multi-year study examines innovative practices across museums, theaters, galleries, and cultural institutions in 15 European countries. Through comprehensive surveys, in-depth interviews, and longitudinal analysis, we identify emerging trends in digital engagement, audience participation, and cultural production. The research reveals how institutions are leveraging virtual reality, artificial intelligence, and interactive technologies to create immersive cultural experiences. We also examine the impact of the COVID-19 pandemic on accelerating digital transformation and hybrid cultural offerings. The study provides actionable insights for cultural leaders, policymakers, and practitioners seeking to navigate the evolving landscape of European cultural sectors.",
    keywords: ["Innovation", "European Culture", "Digital Transformation", "Cultural Institutions", "Technology"],
    doi: "10.1234/ecs.2026.007",
    pages: "23-58",
  },
  "policy-framework-cultural-cooperation": {
    id: "policy-framework-cultural-cooperation",
    title: "Policy Framework for Cultural Cooperation",
    subtitle: "",
    authors: ["ECC Nigeria Policy Team"],
    journal: "Policy Brief Series",
    year: "2025",
    category: "Policy",
    fullAbstract:
      "Effective cultural cooperation requires robust policy frameworks that facilitate international collaboration while respecting cultural sovereignty and diversity. This policy brief presents a comprehensive framework developed through extensive consultation with cultural practitioners, government officials, and international organizations across 20 countries. The framework addresses key areas including intellectual property protection, cultural exchange protocols, funding mechanisms, and evaluation metrics. We examine existing bilateral and multilateral agreements, identifying best practices and areas for improvement. The research includes analysis of successful cultural cooperation initiatives and lessons learned from failed attempts. Our proposed framework emphasizes reciprocity, sustainability, and measurable outcomes while maintaining flexibility to accommodate diverse cultural contexts and national priorities.",
    keywords: ["Policy Framework", "Cultural Cooperation", "International Relations", "Cultural Diplomacy"],
    doi: "10.1234/pbs.2025.012",
    pages: "1-28",
  },
}

// Related publications for the sidebar
const relatedPublications = [
  {
    id: "cultural-identity-globalization",
    title: "Cultural Identity in the Age of Globalization",
    authors: ["Dr. Amara Okafor"],
    journal: "Global Cultural Review",
    year: "2024",
  },
  {
    id: "sustainable-cultural-tourism",
    title: "Sustainable Cultural Tourism Models",
    authors: ["Prof. Elena Rodriguez", "Dr. Michael Chen"],
    journal: "Tourism & Culture Quarterly",
    year: "2024",
  },
  {
    id: "youth-cultural-engagement",
    title: "Youth Engagement in Cultural Preservation",
    authors: ["Dr. Fatima Al-Zahra"],
    journal: "Youth & Society",
    year: "2025",
  },
]

interface PageProps {
  params: {
    slug: string
  }
}

export default function PublicationDetailPage({ params }: PageProps) {
  const publication = publications[params.slug as keyof typeof publications]

  if (!publication) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Publications
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Publication Header */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  {publication.category}
                </Badge>

                <div>
                  <h1 className="text-4xl font-bold text-foreground text-balance">{publication.title}</h1>
                  {publication.subtitle && (
                    <p className="text-xl text-muted-foreground mt-2 text-pretty">{publication.subtitle}</p>
                  )}
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{publication.authors.join(", ")}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{publication.journal}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{publication.year}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View in Journal
                </Button>
              </div>
            </div>

            {/* Abstract */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Abstract</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">{publication.fullAbstract}</p>
              </CardContent>
            </Card>

            {/* Publication Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Publication Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">DOI</h4>
                    <p className="text-sm text-muted-foreground">{publication.doi}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Pages</h4>
                    <p className="text-sm text-muted-foreground">{publication.pages}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword) => (
                      <Badge key={keyword} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Publications</CardTitle>
                <CardDescription>Other research you might find interesting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedPublications.map((related) => (
                  <div key={related.id} className="space-y-2 pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-sm text-foreground text-balance">{related.title}</h4>
                    <p className="text-xs text-muted-foreground">{related.authors.join(", ")}</p>
                    <p className="text-xs text-muted-foreground">
                      {related.journal} • {related.year}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Citation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    {publication.authors.join(", ")} ({publication.year}). {publication.title}
                    {publication.subtitle && `: ${publication.subtitle}`}. <em>{publication.journal}</em>,{" "}
                    {publication.pages}.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
