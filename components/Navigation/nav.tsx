// Navigation/navigation.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import { Menu, GraduationCap, HeartHandshake, Landmark, Users, Palette, Globe2, BookOpen, Briefcase, Activity, Trees, Accessibility, Handshake, Lightbulb, Trophy, Calendar, Camera, PlaySquare, Plane } from "lucide-react"
import Logo from "/public/ecc-logo.png"

// Add icons to Areas of Work
const areasOfWork = [
  { title: "Education & Knowledge Exchange", href: "/education", icon: GraduationCap },
  { title: "Humanitarian", href: "/humanitarian", icon: HeartHandshake },
  { title: "Exhibition & Conferences", href: "/exhibition", icon: Landmark },
  { title: "Youth Development", href: "/youth-development", icon: Users },
  { title: "Traianing & Workshop", href: "/training-workshop", icon: BookOpen },
  { title: "Scholarship Programs", href: "/scholarship-programs", icon: GraduationCap },
  { title: "Grant Sourcing", href: "/grant-sourcing", icon: Briefcase },
  { title: "Healthcare", href: "/healthcare", icon: Activity },
  { title: "Language Courses", href: "/language-courses", icon: BookOpen },
  { title: "Culture, Arts & Heritage", href: "/culture", icon: Palette },
  { title: "Environment & Climate Action", href: "/environment", icon: Trees },
  { title: "Inclusion & Accessibility", href: "/inclusion", icon: Accessibility },
  { title: "People-to-People Cooperation", href: "/cooperation", icon: Handshake },
  { title: "Creative & Cultural Research", href: "/research", icon: Lightbulb },
  { title: "Sports", href: "/sports", icon: Trophy },
  { title: "Events", href: "/events", icon: Calendar },
  { title: "Tourism", href: "/tourism", icon: Globe2 },
  { title: "Innovation & New Media", href: "/innovation", icon: Lightbulb },
].sort((a, b) => a.title.localeCompare(b.title))

// Add icons to Tours
const tours = [
  { title: "School Exchange Tours", href: "/tours/school-exchange", icon: GraduationCap },
  { title: "Government Tours", href: "/tours/government-tours", icon: Landmark },
  { title: "Cultural Heritage Tours", href: "/tours/cultural-heritage-tours", icon: Palette },
  { title: "Research Tours", href: "/tours/research-tours", icon: BookOpen },
  { title: "Sports Tours", href: "/tours/sports-tours", icon: Trophy },
  { title: "Study & Field Trips", href: "/tours/study-field-trips", icon: Plane },
  { title: "Nigeria Local Tourism", href: "/tours/nigeria-local-tourism", icon: Globe2 },
].sort((a, b) => a.title.localeCompare(b.title))

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="relative top-0 z-50 w-full border-b bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] dark:from-[#181f2a] dark:via-[#205375] dark:to-[#68b684] backdrop-blur supports-[backdrop-filter]:bg-white/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex p-4 items-center justify-between">
        {/* Logo */}
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="ECC Logo"
              width={1042}
              height={588}
              className="w-28 h-28 object-contain"
              priority
            />
            <span className="text-[#B38C49] font-bold md:text-2xl lg:text-xl tracking-tight">
              European Cultural <br />
              <span className="text-[#03A4DD]">Center Nigeria</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex z-40">
          <NavigationMenuList>
            {/* Areas of Work */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-[#205375] dark:hover:text-[#8F770A]">
                Areas of Work
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                  {areasOfWork.map((area, index) => (
                    <motion.div
                      key={area.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={area.href}
                        className="flex items-center space-x-3 rounded-md p-3 text-sm font-medium transition-colors hover:text-[#205375] dark:hover:text-[#8F770A]"
                      >
                        <span className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors group-hover:bg-[#68b684]/20">
                          <area.icon className="h-4 w-4 text-gray-600 group-hover:text-[#205375] dark:group-hover:text-[#8F770A]" />
                        </span>
                        <span>{area.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Tours */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-green-600 dark:hover:text-[#8F770A]">
                Tours & Exchanges
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div className="grid w-[400px] gap-3 p-4">
                  {tours.map((tour, index) => (
                    <motion.div key={tour.href} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link
                        href={tour.href}
                        className="flex items-center space-x-3 rounded-md p-3 text-sm font-medium transition-colors hover:text-[#205375] dark:hover:text-[#8F770A]"
                      >
                        <span className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors group-hover:bg-[#68b684]/20">
                          <tour.icon className="h-4 w-4 text-gray-600 group-hover:text-[#205375] dark:group-hover:text-[#8F770A]" />
                        </span>
                        <span>{tour.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.header>
  )
}
