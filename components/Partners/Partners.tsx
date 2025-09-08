"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

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

const Partners = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#181f2a] via-[#205375] to-[#68b684] overflow-hidden">
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

      {/* Grid layout */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={100}
                className="object-contain max-h-20"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners2
