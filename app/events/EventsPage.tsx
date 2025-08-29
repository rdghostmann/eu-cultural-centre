"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Clock, Users, Filter } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2"
import { EventsPageCarouselData } from "@/lib/EventsPageCarouselData"

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
    image: "/cultural/IMG-20250815-WA0055.jpg",
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
    image: "/placeholder.svg?height=200&width=300",
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
    image: "/sports/IMG-20250814-WA0061.jpg",
  },
  {
    title: "Digital Heritage Workshop",
    date: "June 12-14, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "University of Lagos",
    type: "Educational Workshop",
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
    image: "/IMG-20250814-WA0024.jpg",
  },
]

const eventCategories = [
  { name: "All Events", count: 6, active: true },
  { name: "Cultural Festivals", count: 1, active: false },
  { name: "Educational", count: 1, active: false },
  { name: "Sports", count: 1, active: false },
  { name: "Innovation", count: 1, active: false },
  { name: "Arts", count: 1, active: false },
  { name: "Diplomacy", count: 1, active: false },
]

export default function EventsPage() {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
  const { ref: eventsRef, isInView: eventsInView } = useScrollAnimation()
  const hoverScale = { scale: 1.05 }
  const hoverLift = { y: -5, scale: 1.05 }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        className="hidden h-[calc(100vh - 100px )] relative py-20"
        style={{ background: "linear-gradient(135deg, #205375 0%, #68b684 100%)" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container relative mx-auto z-10" ref={heroRef}>
          <motion.div
            className="max-w-4xl mx-auto text-center px-5"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.div variants={staggerItem}>
              <Badge className="mb-6 bg-white/20 text-white border-white/30 shadow-lg backdrop-blur-sm">
                Events & Calendar
              </Badge>
            </motion.div>
            <motion.h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]" variants={staggerItem}>
              Discover Amazing Cultural Events
            </motion.h1>
            <motion.p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto" variants={staggerItem}>
              Join us for exciting cultural festivals, educational workshops, sports tournaments, and diplomatic forums
              that bring communities together across continents.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={staggerItem}>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-[#68b684] hover:bg-[#205375] text-white font-semibold shadow-lg">
                  <Link href="#events">
                    Browse Events <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#205375] bg-transparent font-semibold shadow"
                >
                  <Link href="/contact">Host an Event</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
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
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className={category.active ? "bg-[#205375] text-white hover:bg-[#68b684]" : "border-[#68b684] text-[#205375] hover:bg-[#68b684]/10"}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">Upcoming Events</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Don't miss out on these exciting opportunities to connect, learn, and celebrate cultural diversity.
            </p>
          </motion.div>
          <motion.div
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            {upcomingEvents.map((event, index) => (
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
                      <Button className="w-full bg-[#68b684] hover:bg-[#8F770A] text-white font-semibold">
                        {event.status === "Free Entry"
                          ? "Learn More"
                          : event.status === "Invitation Only"
                            ? "Request Invitation"
                            : "Register Now"}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] text-[#205375]">
        <div className="container mx-auto text-center">
          <motion.div
          className="px-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Don't Miss Out!</h2>
            <p className="text-xl mb-8 text-[#68b684] max-w-2xl mx-auto">
              Stay updated with our latest events and be the first to know about new opportunities to connect and learn.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem} whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-[#68b684] hover:bg-[#205375] text-white font-semibold">
                  <Link href="/contact">
                    Subscribe to Updates <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div variants={staggerItem} whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#205375] text-[#205375] hover:bg-[#68b684]/10 bg-transparent font-semibold"
                >
                  <Link href="/contact">Propose an Event</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
