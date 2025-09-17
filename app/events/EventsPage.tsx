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
      title: t("upcomingEvents.AfricanHeritage.title"),
      date: "March 15-17, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Lagos Cultural Center",
      type: t("upcomingEvents.AfricanHeritage.type"),
      description: t("upcomingEvents.AfricanHeritage.description"),
      capacity: t("upcomingEvents.AfricanHeritage.capacity"),
      status: t("upcomingEvents.AfricanHeritage.status"),
      image: "/culture/culture-slider3.png",
    },
    {
      title: t("upcomingEvents.YouthInnovation.title"),
      date: "April 8-10, 2026",
      time: "10:00 AM - 5:00 PM",
      location: "Abuja Tech Hub",
      type: t("upcomingEvents.YouthInnovation.type"),
      description: t("upcomingEvents.YouthInnovation.description"),
      capacity: t("upcomingEvents.YouthInnovation.capacity"),
      status: t("upcomingEvents.YouthInnovation.status"),
      image: "/youth-development/youth-dev-5.png",
    },
    {
      title: t("upcomingEvents.InternationalSports.title"),
      date: "May 20-25, 2026",
      time: "8:00 AM - 8:00 PM",
      location: "National Stadium, Lagos",
      type: t("upcomingEvents.InternationalSports.type"),
      description: t("upcomingEvents.InternationalSports.description"),
      capacity: t("upcomingEvents.InternationalSports.capacity"),
      status: t("upcomingEvents.InternationalSports.status"),
      image: "/sports/sports-slide-2.png",
    },
    {
      title: t("upcomingEvents.DigitalHeritage.title"),
      date: "June 12-14, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "University of Lagos",
      type: t("upcomingEvents.DigitalHeritage.type"),
      description: t("upcomingEvents.DigitalHeritage.description"),
      capacity: t("upcomingEvents.DigitalHeritage.capacity"),
      status: t("upcomingEvents.DigitalHeritage.status"),
      image: "/programs/program3.png",
    },
    {
      title: t("upcomingEvents.ArtExchange.title"),
      date: "July 5-20, 2026",
      time: "All Day",
      location: "Multiple Galleries",
      type: t("upcomingEvents.ArtExchange.type"),
      description: t("upcomingEvents.ArtExchange.description"),
      capacity: t("upcomingEvents.ArtExchange.capacity"),
      status: t("upcomingEvents.ArtExchange.status"),
      image: "/programs/program1.jpg",
    },
    {
      title: t("upcomingEvents.CulturalDiplomacy.title"),
      date: "August 15-16, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Transcorp Hilton, Abuja",
      type: t("upcomingEvents.CulturalDiplomacy.type"),
      description: t("upcomingEvents.CulturalDiplomacy.description"),
      capacity: t("upcomingEvents.CulturalDiplomacy.capacity"),
      status: t("upcomingEvents.CulturalDiplomacy.status"),
      image: "/culture/culture-slider18.png",
    },
  ];


  // Compute category counts dynamically
  const computeCategories = () => {
    const categories = [
      { name: t("categories.all"), key: "all" },
      { name: t("categories.culturalFestival"), key: "Cultural Festival" },
      { name: t("categories.trainingWorkshop"), key: "Training & Workshop" },
      { name: t("categories.sportsEvent"), key: "Sports Event" },
      { name: t("categories.innovationConference"), key: "Innovation Conference" },
      { name: t("categories.artExhibition"), key: "Art Exhibition" },
      { name: t("categories.diplomaticForum"), key: "Diplomatic Forum" },
    ]

    return categories.map((cat) => ({
      ...cat,
      count:
        cat.key === "all"
          ? upcomingEvents.length
          : upcomingEvents.filter((event) => event.type === cat.key).length,
    }))
  }


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
              {t("h2")}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t("p")}
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
                            ? t("buttons.learnMore")
                            : event.status === "Invitation Only"
                              ? t("buttons.requestInvitation")
                              : t("buttons.registerNow")}
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
