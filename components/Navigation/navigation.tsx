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
import { Menu } from "lucide-react"
import Logo from "/public/ecc-logo.png"

const areasOfWork = [
  { title: "Education & Knowledge Exchange", href: "/education" },
  { title: "Humanitarian", href: "/humanitarian" },
  { title: "Exhibition & Conferences", href: "/exhibition" },
  { title: "Youth Development", href: "/youth-development" },
  { title: "Training & Workshop", href: "/training-workshop" },
  { title: "Scholarship Programs", href: "/scholarship-programs" },
  { title: "Healthcare", href: "/healthcare" },
  { title: "Language Courses", href: "/language-courses" },
  { title: "Culture, Arts & Heritage", href: "/culture" },
  { title: "Environment & Climate Action", href: "/environment" },
  { title: "Inclusion & Accessibility", href: "/inclusion" },
  { title: "People-to-People Cooperation", href: "/cooperation" },
  { title: "Creative & Cultural Research", href: "/research" },
  { title: "Sports", href: "/sports" },
  { title: "Events", href: "/events" },
  { title: "Tourism", href: "/tourism" },
  { title: "Innovation & New Media", href: "/innovation" },
].sort((a, b) => a.title.localeCompare(b.title))

const tours = [
  { title: "School Exchange Tours", href: "/tours/school-exchange" },
  { title: "Government Tours", href: "/tours/government-tours" },
  { title: "Cultural Heritage Tours", href: "/tours/cultural-heritage-tours" },
  { title: "Research Tours", href: "/tours/research-tours" },
  { title: "Sports Tours", href: "/tours/sports-tours" },
  { title: "Study & Field Trips", href: "/tours/study-field-trips" },
  { title: "Nigeria Local Tourism", href: "/tours/nigeria-local-tourism" },
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
            <span
              className="text-[#B38C49] font-bold md:text-2xl lg:text-xl tracking-tight"
              style={{
                // WebkitTextStroke: "1px #B38C49",
                letterSpacing: "0.05em",
              }}
            >
              European Cultural <br />
              <span
                className="text-[#03A4DD]"
                style={{
                  letterSpacing: "0.05em",
                }}
              >
                Center Nigeria
              </span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex z-40">
          <NavigationMenuList>
            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    About
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-[#205375] dark:hover:text-[#8F770A]">
                Areas of Work
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div
                  className="grid w-[600px] grid-cols-2 gap-3 p-4"
                  initial={{ opacity: 1, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {areasOfWork.map((area, index) => (
                    <motion.div
                      key={area.href}
                      initial={{ opacity: 1, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <Link
                        href={area.href}
                        className="block rounded-md p-3 text-sm font-medium transition-colors hover:bg-[#68b684]/10 hover:text-[#205375] dark:hover:text-[#8F770A]"
                      >
                        {area.title}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-green-600 dark:hover:text-[#8F770A]">
                Tours & Exchanges
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div
                  className="grid w-[400px] gap-3 p-4"
                  initial={{ opacity: 1, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {tours.map((tour, index) => (
                    <motion.div
                      key={tour.href}
                      initial={{ opacity: 1, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <Link
                        href={tour.href}
                        className="block rounded-md p-3 text-sm font-medium transition-colors hover:bg-[#68b684]/10 hover:text-[#205375] dark:hover:text-[#8F770A]"
                      >
                        {tour.title}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    Events
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/video" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    Videos
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Buttons & Mobile Nav */}
        <div className="flex items-center space-x-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="hidden lg:inline-flex bg-[#205375] text-white font-semibold shadow">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </motion.div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button className="bg-white text-black hover:bg-white/80 hover:text-black/80 text-lg" size="icon">
                  <Menu className="size-10" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] 
               dark:from-[#181f2a] dark:via-[#205375] dark:to-[#68b684] overflow-y-auto"
            >
              <AnimatePresence>
                <motion.nav
                  className="flex flex-col space-y-4"
                  initial={{ opacity: 1, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href="/about" onClick={() => setIsOpen(false)}>
                    About
                  </Link>

                  {/* Single Accordion with multiple items */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="areas">
                      <AccordionTrigger>Areas of Work</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {areasOfWork.map((area) => (
                            <Link
                              key={area.href}
                              href={area.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-muted-foreground hover:text-[#205375] dark:hover:text-[#8F770A]"
                            >
                              {area.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="tours">
                      <AccordionTrigger>Tours & Exchanges</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {tours.map((tour) => (
                            <Link
                              key={tour.href}
                              href={tour.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-muted-foreground hover:text-[#205375] dark:hover:text-[#8F770A]"
                            >
                              {tour.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link href="/video" onClick={() => setIsOpen(false)}>
                    Videos
                  </Link>
                  <Link href="/gallery" onClick={() => setIsOpen(false)}>
                    Gallery
                  </Link>
                  <Link href="/events" onClick={() => setIsOpen(false)}>
                    Events
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>

                  <Button asChild className="bg-[#205375] hover:bg-[#1e4e6d] text-white font-semibold shadow mt-4">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Involved
                    </Link>
                  </Button>
                </motion.nav>
              </AnimatePresence>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </motion.header>
  )
}


