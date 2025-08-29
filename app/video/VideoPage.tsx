"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const videos = [
  {
    title: "Cultural Festival Highlights",
    description: "Experience the best moments from our annual cultural festival.",
    src: "https://www.youtube.com/embed/ScMzIvxBSi4",
    type: "Festival",
  },
  {
    title: "Traditional Dance Showcase",
    description: "A look into Africa’s rich dance heritage performed live.",
    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
    type: "Dance",
  },
  {
    title: "Heritage Documentary",
    description: "Preserving cultural sites through film and storytelling.",
    src: "https://www.youtube.com/embed/lTTajzrSkCw",
    type: "Documentary",
  },
  {
    title: "Music Fusion Concert",
    description: "Bringing together traditional and contemporary soundscapes.",
    src: "https://www.youtube.com/embed/kXYiU_JCYtU",
    type: "Music",
  },
  {
    title: "Art Exhibition Tour",
    description: "A walk-through of our latest visual arts exhibition.",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "Exhibition",
  },
]

export default function VideoPage() {
  const { ref: videosRef, isInView: videosInView } = useScrollAnimation()

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-700 via-pink-600 to-rose-600 text-white text-center">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Cultural Video Gallery
        </motion.h1>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto text-purple-100">
          Discover our curated collection of cultural programs, performances, and heritage documentaries.
        </p>
      </section>

      {/* Video Grid */}
      <section className="py-20 bg-gray-50" ref={videosRef}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16 px-5"
            variants={fadeInUp}
            initial="hidden"
            animate={videosInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">Featured Videos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch highlights from our cultural exchange initiatives and creative programs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-7"
            variants={staggerContainer}
            initial="hidden"
            animate={videosInView ? "visible" : "hidden"}
          >
            {videos.map((video, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{video.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="mb-5 relative aspect-video rounded-lg overflow-hidden shadow">
                      <iframe
                        src={video.src}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <Link className="hidden" href="/contact">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Involved</Button>
                    </Link>
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
