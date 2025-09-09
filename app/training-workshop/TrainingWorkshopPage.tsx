// app/training-workshop/page.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Calendar, GraduationCap, Globe } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { TrainingPageCarouselData } from "@/lib/TrainingPageCarouselData"

// Training workshop programs
const trainingPrograms = [
  {
    title: "Leadership Development",
    description: "Workshops designed to build leadership and decision-making skills for professionals and youth.",
    icon: <GraduationCap className="h-6 w-6" />,
    features: ["Leadership modules", "Mentorship", "Case studies", "Certification"],
    impact: "1,200+ leaders trained",
  },
  {
    title: "Digital Skills Training",
    description: "Practical training sessions on digital literacy, web tools, and emerging technologies.",
    icon: <Globe className="h-6 w-6" />,
    features: ["Web development", "Data literacy", "Remote work tools", "AI basics"],
    impact: "3,500+ participants trained",
  },
  {
    title: "Educational Workshops",
    description: "Workshops and seminars for teachers, students, and professionals across industries.",
    icon: <BookOpen className="h-6 w-6" />,
    features: ["Classroom strategies", "Research skills", "Teaching tools", "Peer collaboration"],
    impact: "2,000+ educators engaged",
  },
  {
    title: "Community Capacity Building",
    description: "Strengthening community organizations with skills and resources to thrive.",
    icon: <Users className="h-6 w-6" />,
    features: ["Fundraising", "Volunteer training", "Project management", "Advocacy"],
    impact: "800+ communities empowered",
  },
]

// Upcoming training/workshop events (with images)
const upcomingTrainings = [
  {
    title: "Digital Literacy Bootcamp",
    date: "Apr 10-15, 2026",
    location: "Berlin, Germany",
    participants: "150 learners",
    description: "An intensive program focusing on core digital skills and applied technology training.",
    image: "/trainings/digital-bootcamp.jpg",
  },
  {
    title: "Youth Leadership Summit",
    date: "May 5-7, 2026",
    location: "Paris, France",
    participants: "200 youth leaders",
    description: "Workshops, panels, and networking for emerging leaders across Europe and Africa.",
    image: "/trainings/leadership-summit.jpg",
  },
  {
    title: "Teachers’ Capacity Workshop",
    date: "Jun 18-20, 2026",
    location: "Lagos, Nigeria",
    participants: "300 educators",
    description: "Training for educators to integrate innovative methods into classrooms.",
    image: "/trainings/teachers-workshop.jpg",
  },
]

export default function TrainingWorkshopPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: programsRef, isInView: programsInView } = useScrollAnimation()
  const { ref: eventsRef, isInView: eventsInView } = useScrollAnimation()

  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="hidden h-[calc(100vh-100px)] relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 text-white py-20">
        <motion.div className="absolute inset-0 bg-black/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
        <div className="container relative z-10" ref={heroRef}>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Training & Workshops</Badge>
            </motion.div>
            <motion.h1 className="text-4xl lg:text-5xl font-bold mb-6" variants={staggerItem}>
              Empowering Through Knowledge & Skills
            </motion.h1>
            <motion.p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto" variants={staggerItem}>
              Equipping individuals and communities with essential skills, education, and leadership for a brighter future.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="#programs">
                    Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700">
                  <Link href="/contact">Join a Workshop</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Carousel */}
      <HeaderSlider2 images={TrainingPageCarouselData} />

      {/* Programs */}
      <section id="programs" className="py-20 mt-20" ref={programsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Training & Workshop Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored programs combining hands-on training, mentorship, and real-world application.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={programsInView ? "visible" : "hidden"}
          >
            {trainingPrograms.map((program, i) => (
              <motion.div key={i} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div className="p-3 bg-indigo-100 rounded-lg text-indigo-700" whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.5 }}>
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
                    <div className="space-y-3 mb-6">
                      {program.features.map((f, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                          <span className="text-sm text-gray-600">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact">
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50" ref={eventsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Upcoming Training & Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don’t miss our upcoming events designed to empower, connect, and inspire.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8 px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            {upcomingTrainings.map((event, i) => (
              <motion.div key={i} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full overflow-hidden">
                  {/* Top Image */}
                  <div className="relative h-40 w-full">
                    <Image src={event.image} alt={event.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Workshop</Badge>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-2">
                      {event.location}
                    </CardDescription>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{event.participants}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Link href="/contact">
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Register Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Learn?"
        description="Join our workshops and unlock opportunities for growth, leadership, and collaboration."
        primaryLabel="Join a Workshop"
        primaryHref="/contact"
        secondaryLabel="Request Custom Training"
        secondaryHref="/contact"
        className="bg-slate-100 text-white py-16 lg:py-20"
      />
    </div>
  )
}
