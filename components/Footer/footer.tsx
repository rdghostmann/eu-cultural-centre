"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send, Youtube } from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Variants } from "framer-motion"
import Image from "next/image"

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
}

const CONTACT_INFO = {
  email: "info@eu-cultural-centre.com",
  phone: "+234 913 444 6638",
  address: "47 Damaturu Crescent Garki Mall, FCT, Abuja Nigeria",
}

const footerLinks = {
  "About ECC": [
    { name: "Our Mission", href: "/about#mission" },
    { name: "Our Programs", href: "/#programs" },
    { name: "Careers", href: "/contact" },
  ],
  Programs: [
    { name: "Education & Exchange", href: "/education" },
    { name: "Cultural Heritage", href: "/culture" },
    { name: "Innovation Lab", href: "/innovation" },
    { name: "All Programs", href: "/#all-programs" },
  ],
  "Get Involved": [
    { name: "Apply for Programs", href: "/#programs" },
    { name: "Partner with Us", href: "/contact" },
    { name: "Volunteer", href: "/contact" },
    { name: "Donate", href: "/contact" },
  ],
  Resources: [
    { name: "Events Calendar", href: "/events" },
    { name: "News & Updates", href: "/news-research" },
    { name: "Contact Us", href: "/contact" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1Ax1H5XUsc/" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/eu_cultural_c" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/eu_cultural_centre" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@euculturalcentre" },
  {
    name: "Tiktok",
    icon: (props: any) => (
      <svg
        {...props}
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23.5 7.5c-1.1-1.1-1.7-2.6-1.7-4.1h-3.1v18.1c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8 1.7-3.8 3.8-3.8c.3 0 .6 0 .9.1v-3.2c-.3 0-.6-.1-.9-.1-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V11.6c1.1.8 2.4 1.3 3.8 1.3v-3.2c-1.4 0-2.7-.5-3.8-1.2z" />
      </svg>
    ),
    href: "https://www.tiktok.com",
  },
]

export function Footer() {
  const { ref: footerRef, isInView: footerInView } = useScrollAnimation()
  const hoverScale = { scale: 1.08 }

  return (
    <footer
      className="border-t border-[#205375]/40
      bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#205375]
      text-[#205375] dark:text-gray-200"
      ref={footerRef}
    >
      <div className="container mx-auto py-16 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={footerInView ? "visible" : "hidden"}
        >
          {/* Main Footer */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-14">

            {/* Brand & Contact */}
            <motion.div className="lg:col-span-1" variants={staggerItem}>
              <div className="flex items-center space-x-3 mb-7">
                <motion.div
                  className="size-14 rounded-full bg-[#205375] flex items-center justify-center shadow-lg overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/ecc-logo.png"
                    alt="ECC Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <Link href="/" className="text-decoration-none">
                  <span className="text-[#8F770A] font-bold text-lg leading-snug">
                    European Cultural <br /> Center Nigeria
                  </span>
                </Link>
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed max-w-md">
                Bridging cultures, fostering understanding, and promoting cooperation between Europe, Africa and the rest of the world through education, arts, and cultural exchange.
              </p>
              {/* Contact Info */}
              <div className="flex flex-col md:justify-end space-y-3 text-sm">
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <Mail className="h-5 w-5 text-[#8F770A]" />
                  <span className="text-white ">{CONTACT_INFO.email}</span>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <Phone className="h-5 w-5 text-[#8F770A]" />
                  <span className="text-white ">{CONTACT_INFO.phone}</span>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <MapPin className="h-5 w-5 text-[#8F770A]" />
                  <span className="text-white ">{CONTACT_INFO.address}</span>
                </motion.div>
              </div>

            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div key={category} variants={staggerItem}>
                <h3 className="font-semibold text-lg mb-4 text-[#8F770A]">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <motion.li key={index} variants={staggerItem}>
                      <Link
                        href={link.href}
                        className="relative group text-sm text-white hover:text-[#205375] transition-colors"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8F770A] group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter + Socials */}
          <motion.div
            className="border-t border-[#205375]/40 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={staggerItem}
          >
            {/* Newsletter */}
            <form
              className="bg-[#0f172a]/80 rounded-xl p-6 shadow-lg border border-[#68b684]/30 relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-bold text-xl mb-2 text-[#8F770A]">Stay Connected</h3>
              <p className="text-sm text-gray-300 mb-5">
                Subscribe to our newsletter for updates on programs, events, and opportunities.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-[#68b684] text-white placeholder-gray-400 focus:border-[#8F770A] rounded-none rounded-s-lg"
                  required
                />
                <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    className="bg-[#8F770A] hover:bg-[#68b684] rounded-none rounded-e-lg px-5"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex flex-col md:justify-end space-x-4">
              <div className="flex md:justify-end space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={social.href}
                        className="p-3 bg-[#1e293b] rounded-full text-[#68b684] hover:text-white hover:bg-[#8F770A] transition-all duration-300 shadow flex items-center justify-center"
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  )
                })}

              </div>


            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-10 pt-6 pb-10 lg:pb-20 border-t border-white/10 dark:border-[#205375]/40 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400"
            variants={staggerItem}
          >
            <div className="text-center">© {new Date().getFullYear()} European Cultural Center Nigeria. All rights reserved.</div>
            <div className="flex gap-6 mt-3 lg:mt-0">
              <Link href="/termofuse" className="hover:text-[#68b684]">Terms of Use</Link>
              <Link href="/privacypolicy" className="hover:text-[#68b684]">Privacy Policy</Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
