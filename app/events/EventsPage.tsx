// EventsPage.tsx

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Clock, Users, Filter } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { EventsPageCarouselData } from "@/lib/EventsPageCarouselData"
import { useState, useMemo } from "react"
import { useTranslations } from "next-intl"


export default function EventsPage() {
  const t = useTranslations("EventsPage")
  
  
  const upcomingEvents = [
    {
      title: "African Heritage Festival 2026",
      date: "March 15-17, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Lagos Cultural Center",
      type: "Cultural Festival",
      description:
        "A three-day celebration of African heritage featuring art exhibitions, traditional music, dance performances, and cultural workshops.",
      capacity: "5,000 attendees",
      status: "Open Registration",
      image: "/culture/culture-slider3.png",
    },
    {
      title: "Youth Innovation Summit",
      date: "April 8-10, 2026",
      time: "10:00 AM - 5:00 PM",
      location: "Abuja Tech Hub",
      type: "Innovation Conference",
      description:
        "Bringing together young innovators, entrepreneurs, and tech leaders to explore the future of technology in cultural preservation.",
      capacity: "500 participants",
      status: "Early Bird",
      image: "/youth-development/youth-dev-5.png",
    },
    {
      title: "International Sports Tournament",
      date: "May 20-25, 2026",
      time: "8:00 AM - 8:00 PM",
      location: "National Stadium, Lagos",
      type: "Sports Event",
      description:
        "Multi-sport tournament featuring teams from across Africa and Europe, promoting unity through sports.",
      capacity: "10,000 spectators",
      status: "Tickets Available",
      image: "/sports/sports-slide-2.png",
    },
    {
      title: "Digital Heritage Workshop",
      date: "June 12-14, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "University of Lagos",
      type: "Training Workshop",
      description: "Hands-on workshop on digital preservation techniques for cultural heritage sites and artifacts.",
      capacity: "100 participants",
      status: "Limited Spots",
      image: "/programs/program3.png",
    },
    {
      title: "European-African Art Exchange",
      date: "July 5-20, 2026",
      time: "All Day",
      location: "Multiple Galleries",
      type: "Art Exhibition",
      description: "Two-week art exchange featuring contemporary works from European and African artists.",
      capacity: "Unlimited",
      status: "Free Entry",
      image: "/programs/program1.jpg",
    },
    {
      title: "Cultural Diplomacy Forum",
      date: "August 15-16, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Transcorp Hilton, Abuja",
      type: "Diplomatic Forum",
      description: "High-level forum bringing together cultural diplomats, policymakers, and cultural leaders.",
      capacity: "200 delegates",
      status: "Invitation Only",
      image: "/culture/culture-slider18.png",
    },
  ]
  
  // Compute category counts dynamically
  const computeCategories = () => {
    const categories = [
      { name: t("categories.all"), key: "all" },
      { name: "Cultural Festivals", key: "Cultural Festival" },
      { name: "Training & Workshop", key: "Training & Workshop" },
      { name: "Sports", key: "Sports Event" },
      { name: "Innovation", key: "Innovation Conference" },
      { name: "Arts", key: "Art Exhibition" },
      { name: "Diplomacy", key: "Diplomatic Forum" },
    ]
  
    return categories.map((cat) => ({
      ...cat,
      count:
        cat.key === "all"
          ? upcomingEvents.length
          : upcomingEvents.filter((event) => event.type === cat.key).length,
    }))
  }


  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: eventsRef, isInView: eventsInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  const [activeCategory, setActiveCategory] = useState("all")
  const eventCategories = useMemo(() => computeCategories(), [])

  const filteredEvents =
    activeCategory === "all"
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.type === activeCategory)

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <HeaderSlider2 images={EventsPageCarouselData} />

      {/* Event Categories Filter */}
      <section className="mt-10 md:mt-24 py-8 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe]">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {eventCategories.map((category, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverScale}>
                <Button
                  onClick={() => setActiveCategory(category.key)}
                  variant={activeCategory === category.key ? "default" : "outline"}
                  size="sm"
                  className={
                    activeCategory === category.key
                      ? "bg-[#205375] text-white hover:bg-[#68b684]"
                      : "border-[#68b684] text-[#205375] hover:bg-[#68b684]/10"
                  }
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category.name} ({category.count})
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-8 bg-gradient-to-b from-[#e0e7ef]/0 via-[#68b684]/10 to-[#181f2a]/0" />

      {/* Events Grid */}
      <section id="events" className="py-20 bg-gradient-to-br from-[#181f2a] via-[#205375] to-[#68b684]" ref={eventsRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Don't miss out on these exciting opportunities to connect, learn, and celebrate cultural diversity.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            {filteredEvents.map((event, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
                <Card className="h-full overflow-hidden bg-[#1a2332]/80 border border-[#205375]/40 rounded-2xl shadow-xl backdrop-blur-md hover:bg-[#68b684]/10 hover:border-[#68b684]">
                  <motion.div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      <Badge
                        variant={
                          event.status === "Open Registration"
                            ? "default"
                            : event.status === "Early Bird"
                              ? "secondary"
                              : event.status === "Limited Spots"
                                ? "destructive"
                                : event.status === "Invitation Only"
                                  ? "outline"
                                  : "default"
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{event.title}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center text-sm text-gray-300">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Users className="h-4 w-4 mr-1" />
                        {event.capacity}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-200 mb-4">{event.description}</p>
                    <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                      <Button asChild className="w-full bg-[#68b684] hover:bg-[#8F770A] text-white font-semibold">
                        <Link href="/contact">
                          {event.status === "Free Entry"
                            ? "Learn More"
                            : event.status === "Invitation Only"
                              ? "Request Invitation"
                              : "Register Now"}
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
