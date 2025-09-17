// VideoPage.tsx
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useTranslations } from "next-intl"

type Video = {
  key: string
  src: string
}

const videos: Video[] = [
  { key: "festival", src: "/videos/video-1.mp4" },
  { key: "dance", src: "/videos/video-2.mp4" },
  { key: "documentary", src: "/videos/video-3.mp4" },
  { key: "music", src: "/videos/video-4.mp4" },
  { key: "exhibition", src: "/videos/video-5.mp4" },
]

// Simple reusable video embed
function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <video
      className="w-full h-full object-cover rounded-lg"
      controls
      preload="metadata"
      aria-label={title}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default function VideoPage() {
  const { ref: videosRef, isInView: videosInView } = useScrollAnimation()
  const t = useTranslations("VideoPage")

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-700 via-pink-600 to-rose-600 text-white text-center">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {t("hero.title")}
        </motion.h1>
        <p className="text-lg lg:text-xl max-w-3xl mx-auto text-purple-100">
          {t("hero.subtitle")}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-ecc-slate mb-4">
              {t("featured.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("featured.subtitle")}
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
                      <Badge variant="secondary">{t(`videos.${video.key}.type`)}</Badge>
                    </div>
                    <CardTitle className="text-xl">
                      {t(`videos.${video.key}.title`)}
                    </CardTitle>
                    <CardDescription>
                      {t(`videos.${video.key}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="mb-5 relative aspect-video rounded-lg overflow-hidden shadow">
                      <VideoEmbed
                        src={video.src}
                        title={t(`videos.${video.key}.title`)}
                      />
                    </div>
                    <Link className="hidden" href="/contact">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        {t("button.getInvolved")}
                      </Button>
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
