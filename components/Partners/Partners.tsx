"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { Handshake } from "lucide-react"

const partners = [
  { name: "IMG-20250815-WA0216", logo: "/partners/IMG-20250815-WA0216.jpg", link: "#" },
  { name: "Intl Human Right Commission", logo: "/partners/intl-human-right-commission.jpg", link: "#" },
  { name: "Justice Development Peace Commission", logo: "/partners/justice-development-peace-commision.jpg", link: "#" },
  { name: "Kano State Government", logo: "/partners/kano-state-government.jpg", link: "#" },
  { name: "Mallpai Foundation", logo: "/partners/mallpai-foundation.jpg", link: "#" },
  { name: "National Commission for Persons with Disability", logo: "/partners/national-commission-person-with-disability.jpg", link: "#" },
  { name: "National Council Arts & Culture", logo: "/partners/national-council-arts-culture.jpg", link: "#" },
  { name: "National Council for Persons with Disability", logo: "/partners/national-council-person-disability.jpg", link: "#" },
  { name: "Nigerian Christian Pilgrim Commission", logo: "/partners/nigerian-christian-pilgrim-commission.jpg", link: "#" },
  { name: "Office of Senior Special Assistant to President", logo: "/partners/office-senior-special-assitant-president.jpg", link: "#" },
  { name: "Polish-Nigerian Business Council", logo: "/partners/polish-nigerian-business-council.jpg", link: "#" },
  { name: "Professionals", logo: "/partners/professionals.jpg", link: "#" },
  { name: "Queen Adenike Tejuos Foundation", logo: "/partners/queen-adenike-tejuos-foundation.jpg", link: "#" },
  { name: "Slave History Museum", logo: "/partners/slave-history-museum.jpg", link: "#" },
  { name: "Abuja National Mosque", logo: "/partners/abuja-national-mosque.jpg", link: "#" },
  { name: "Calabar Festival", logo: "/partners/calabar-festival.jpg", link: "#" },
  { name: "Carnival Calabar", logo: "/partners/carnival-calabar.jpg", link: "#" },
  { name: "Creativity & Professionalism", logo: "/partners/creativity-professionalism.jpg", link: "#" },
  { name: "Federal Ministry Humanitarian & Poverty", logo: "/partners/fed-min-humanitarian-poverty.jpg", link: "#" },
  { name: "Federal Ministry Women Affairs", logo: "/partners/fed-ministry-women-affairs.jpg", link: "#" },
  { name: "FMACTE", logo: "/partners/FMACTE.jpg", link: "#" },
  { name: "Gate of Nations", logo: "/partners/gate-of-nations.jpg", link: "#" },
  { name: "Government of Cross River", logo: "/partners/government-of-cross-river.jpg", link: "#" },
  { name: "IMG-20250815-WA0195", logo: "/partners/IMG-20250815-WA0195.jpg", link: "#" },
]

// 👉 duplicate items for seamless infinite scroll
const infinitePartners = [...partners ]

const Partners = () => {
  return (
    <section id="partners" className="relative py-20 bg-gradient-to-br from-[#f5f5dc] via-[#b0c4de] to-[#f5f5dc] overflow-hidden">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#b0c4de] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#b0c4de] to-transparent z-10" />

      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Partners
        </motion.h2>

        <p className="text-lg md:text-xl text-[#2f2f2f] max-w-3xl mx-auto px-4">
          We partner with both Governmental and Non-Governmental Organisations, traditional and professional leadership
          institutions, educational institutions and various other productive sectors.
        </p>
        <p className="mt-5 text-lg md:text-xl text-[#2f2f2f] max-w-3xl mx-auto px-4">
          We also align with population segments
          in pursuit of the UN’s SDGs and other applicable development agendas: we encourage corporate and other strategic
          socio-economic sectors to sponsor and facilitate our beneficial activities to drive development across Africa.
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="flex flex-wrap lg:grid lg:grid-cols-3 gap-4 items-center justify-center">
          {infinitePartners.map((partner, idx) => (
            <CarouselItem
              key={idx}
              className="basis-1/2 md:basis-1/3 lg:basis-auto flex justify-center"
            >
              <span className="flex items-center justify-center border bg-white p-3 rounded-lg shadow-lg h-fit md:h-40 w-full max-w-[200px]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={200}
                  priority
                  className="h-24 md:h-32 lg:h-36 w-auto object-contain"
                />
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="text-center mt-10">
        <div className="flex justify-center">
          <Button asChild size="lg" variant="link" className="bg-[#205375] text-white font-semibold shadow">
            <Link href="/contact">
              <Handshake className="mr-2 h-5 w-5" />
              Become a Partner
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Partners
