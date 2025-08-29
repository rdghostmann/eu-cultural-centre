"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "National Council", logo: "/partners/sponsor-3.png", link: "https://europa.eu/" },
  { name: "NCAC", logo: "/partners/sponsor-2.png", link: "https://www.britishcouncil.org.ng/" },
  { name: "Calabar Carnival", logo: "/partners/sponsor-4.png", link: "https://www.goethe.de/ins/ng/en/index.html" },
  { name: "Calabar Fest", logo: "/partners/sponsor-1.png", link: "https://en.unesco.org/" },
  { name: "Sponsor 5", logo: "/partners/sponsor-5.png", link: "#" },
  { name: "Sponsor 6", logo: "/partners/sponsor-6.png", link: "#" },
  { name: "Sponsor 7", logo: "/partners/sponsor-7.png", link: "#" },
  { name: "Sponsor 8", logo: "/partners/sponsor-8.png", link: "#" },
]

// 👉 duplicate items for infinite loop feel
const infinitePartners = [...partners, ...partners]

const Partners2 = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#181f2a] via-[#205375] to-[#68b684] overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#181f2a] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#68b684] to-transparent z-10" />

      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Partners
        </motion.h2>
        <p className="text-xl text-[#f5f5dc] max-w-3xl mx-auto px-4">
          We collaborate with leading organizations to create meaningful cultural exchanges and lasting impact.
        </p>
      </div>

      {/* Carousel with multi-row on large screens */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {infinitePartners.map((partner, idx) => (
            <CarouselItem key={idx} className="flex justify-center">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition-transform h-28 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default Partners2
