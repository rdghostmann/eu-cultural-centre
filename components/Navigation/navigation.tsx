// Navigation/navigation.tsx
"use client"

import { useState, useEffect } from "react"
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
import LanguageSwitcher from "@/components/Lang/LanguageSwitcher"
import { useRouter } from "next/navigation"

import { useTranslations } from "next-intl"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [locale, setLocale] = useState("")
  const router = useRouter();

  // ✅ put useTranslations here
  const t = useTranslations("Navigation")

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ").find(row => row.startsWith("MYNEXTAPP_LOCALE="))?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale}`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}`;
    router.refresh();
  }

  // Add icons to Tours
  // ✅ titles should be strings, not objects
  const tours = [
    { title: t("tours&Exchange.subMenu.schoolExchangeTours"), href: "/tours/school-exchange", icon: GraduationCap },
    { title: t("tours&Exchange.subMenu.governmentTours"), href: "/tours/government-tours", icon: Landmark },
    { title: t("tours&Exchange.subMenu.culturalHeritageTours"), href: "/tours/cultural-heritage-tours", icon: Palette },
    { title: t("tours&Exchange.subMenu.researchTours"), href: "/tours/research-tours", icon: BookOpen },
    { title: t("tours&Exchange.subMenu.sportTours"), href: "/tours/sports-tours", icon: Trophy },
    { title: t("tours&Exchange.subMenu.study&FieldTrips"), href: "/tours/study-field-trips", icon: Plane },
    { title: t("tours&Exchange.subMenu.nigeriaDomesticTours"), href: "/tours/nigeria-local-tourism", icon: Globe2 },
  ].sort((a, b) => a.title.localeCompare(b.title));

  // Add icons to Areas of Work
const areasOfWork = [
  { title: t("areasWork.subMenu.education"), href: "/education", icon: GraduationCap },
  { title: t("areasWork.subMenu.humanitarian"), href: "/humanitarian", icon: HeartHandshake },
  { title: t("areasWork.subMenu.exhibition"), href: "/exhibition", icon: Landmark },
  { title: t("areasWork.subMenu.youthDevelopment"), href: "/youth-development", icon: Users },
  { title: t("areasWork.subMenu.training"), href: "/training-workshop", icon: BookOpen },
  { title: t("areasWork.subMenu.scholarship"), href: "/scholarship-programs", icon: GraduationCap },
  { title: t("areasWork.subMenu.grantSourcing"), href: "/grant-sourcing", icon: Briefcase },
  { title: t("areasWork.subMenu.healthcare"), href: "/healthcare", icon: Activity },
  { title: t("areasWork.subMenu.languageCourses"), href: "/language-courses", icon: BookOpen },
  { title: t("areasWork.subMenu.culture"), href: "/culture", icon: Palette },
  { title: t("areasWork.subMenu.environment"), href: "/environment", icon: Trees },
  { title: t("areasWork.subMenu.inclusion"), href: "/inclusion", icon: Accessibility },
  { title: t("areasWork.subMenu.cooperation"), href: "/cooperation", icon: Handshake },
  { title: t("areasWork.subMenu.research"), href: "/research", icon: Lightbulb },
  { title: t("areasWork.subMenu.sports"), href: "/sports", icon: Trophy },
  { title: t("areasWork.subMenu.events"), href: "/events", icon: Calendar },
  { title: t("areasWork.subMenu.tourism"), href: "/tourism", icon: Globe2 },
  { title: t("areasWork.subMenu.innovation"), href: "/innovation", icon: Lightbulb },
].sort((a, b) => a.title.localeCompare(b.title))


  return (
    <motion.header
      className="relative top-0 z-50 w-full border-b bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe] dark:from-[#181f2a] dark:via-[#205375] dark:to-[#68b684] backdrop-blur supports-[backdrop-filter]:bg-white/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full mx-auto flex p-4 items-center justify-between">
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
        <NavigationMenu className="hidden xl:flex z-40">
          <NavigationMenuList>
            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    {t("about")}
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

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
                {t("toursExchange")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div className="grid w-[400px] gap-3 p-4">
                  {tours.map((tour, index) => (
                    <motion.div key={tour.href} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link
                        href={tour.href}
                        className="flex items-center space-x-3 rounded-md text-sm font-medium transition-colors hover:text-[#205375] dark:hover:text-[#8F770A]"
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

            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    {t("events")}
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/video" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    {t("videos")}
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    {t("gallery")}
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-[#68b684]/20 hover:text-[#205375] dark:hover:text-[#8F770A]">
                    {t("contact")}
                  </NavigationMenuLink>
                </Link>
              </motion.div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Language Switcher Desktop */}
        <div className="hidden xl:flex items-center ml-4">
          <LanguageSwitcher locale={locale} changeLocale={changeLocale} />
        </div>
        {/* Buttons & Mobile Nav */}
        <div className="flex items-center space-x-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="hidden xl:inline-flex bg-[#205375] text-white font-semibold shadow">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </motion.div>

          {/* Language Switcher Mobile */}
          <div className="xl:hidden">
            <LanguageSwitcher locale={locale} changeLocale={changeLocale} />
          </div>

         {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
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
                    {t("about")}
                  </Link>

                  {/* Single Accordion with multiple items */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="areas">
                      <AccordionTrigger>{t("areasOfWork")}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2">
                          {areasOfWork.map((area) => (
                            <Link
                              key={area.href}
                              href={area.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 rounded-md p-0 text-sm font-medium transition-colors hover:text-[#205375] dark:hover:text-[#8F770A]"
                            >
                              <span className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors group-hover:bg-[#68b684]/20">
                                <area.icon className="h-4 w-4 text-gray-600 group-hover:text-[#205375] dark:group-hover:text-[#8F770A]" />
                              </span>
                              {area.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="tours">
                      <AccordionTrigger>{t("toursExchange")}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 p-0">
                          {tours.map((tour) => (
                            <Link
                              key={tour.href}
                              href={tour.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 rounded-md text-sm font-medium transition-colors hover:text-[#205375] dark:hover:text-[#8F770A]"
                            >
                              <span className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors group-hover:bg-[#68b684]/20">
                                <tour.icon className="h-4 w-4 text-gray-600 group-hover:text-[#205375] dark:group-hover:text-[#8F770A]" />
                              </span>
                              {tour.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Link href="/video" onClick={() => setIsOpen(false)}>
                    {t("videos")}
                  </Link>
                  <Link href="/gallery" onClick={() => setIsOpen(false)}>
                    {t("gallery")}
                  </Link>
                  <Link href="/events" onClick={() => setIsOpen(false)}>
                    {t("events")}
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    {t("contact")}
                  </Link>

                  <Button asChild className="bg-[#205375] hover:bg-[#1e4e6d] text-white font-semibold shadow mt-4">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      {t("getInvolved")}
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


