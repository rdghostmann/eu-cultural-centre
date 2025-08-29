import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"

interface CTASectionProps {
  title: string
  description: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  className?: string
}

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#205375] via-[#68b684] to-[#8F770A] text-white ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-100 max-w-2xl mx-auto px-2 sm:px-4">
            {description}
          </p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Primary Button */}
            <motion.div variants={staggerItem} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[#68b684] hover:bg-[#205375] text-white font-semibold shadow-lg"
              >
                <Link href={primaryHref}>
                  {primaryLabel} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Secondary Button */}
            {secondaryLabel && secondaryHref && (
              <motion.div variants={staggerItem} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#205375] bg-transparent font-semibold shadow"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
