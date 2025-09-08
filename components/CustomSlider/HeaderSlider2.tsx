// HeaderSlider2.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slide, HomePageCarouselData } from "@/lib/HomePageCarouselData";

// Motion variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const hoverScale = { scale: 1.05 };

type HeaderSliderProps = {
  images?: Slide[];
  autoPlay?: boolean;
  interval?: number;
};

export default function HeaderSlider2({
  images = HomePageCarouselData,
  autoPlay = true,
  interval = 5000,
}: HeaderSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  const slide = images[currentSlide];

  return (
    <div className="relative w-full h-[calc(100vh-304px)] lg:h-[calc(100vh-144px)] bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 overflow-hidden flex flex-col">
      {/* Background slides */}
      <div className="absolute inset-0">
        {images.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === currentSlide}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-purple-900/50" />
          </div>
        ))}
      </div>

      {/* Content pinned bottom center */}
      <motion.div
        className="relative z-10 mt-auto mb-8 px-6 md:px-16 lg:px-24 text-center text-white max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {slide.badge && (
          <motion.div variants={staggerItem}>
            <Badge className="hidden mb-4 bg-white/20 text-white border-white/30 shadow-lg backdrop-blur-sm">
              {slide.badge}
            </Badge>
          </motion.div>
        )}

        <motion.h1
          variants={staggerItem}
          className="text-xl sm:text-3xl font-extrabold mb-4 leading-tight text-[#68b684] drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
        >
          {slide.title}
        </motion.h1>

        {slide.description && (
          <motion.p
            className="text-base mb-6 text-[#e0f2fe] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] max-w-2xl mx-auto"
            variants={staggerItem}
          >
            {slide.description}
          </motion.p>
        )}

        {/* Links */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={staggerItem}
        >
          {slide.primaryLink && (
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-[#68b684] hover:bg-[#205375] text-white font-semibold shadow-lg"
              >
                <Link href={slide.primaryLink.href}>
                  {slide.primaryLink.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          )}

          {slide.secondaryLink && (
            <motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white hover:bg-white hover:text-[#B38C49] bg-[#B38C49] font-semibold shadow"
              >
                <Link href={slide.secondaryLink.href}>
                  {slide.secondaryLink.text}
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Dots */}
        <div className="flex space-x-2 mt-6 justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white/75 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
