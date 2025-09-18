// AboutPage.tsx

"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
	Globe,
	Award,
	BookOpen,
	Users,
	Languages,
	GraduationCap,
	Paintbrush,
	Recycle,
	HeartHandshake,
	Plane,
	Trophy,
	Handshake,
	Landmark,
	Target,
	HeartIcon,
	EyeIcon,
	ArrowRight,
} from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import HeaderSlider from "@/components/CustomSlider/HeaderSlider"
import CTASection from "@/components/CTASection/CTASection"
import { AboutPageCarouselData } from "@/lib/AboutPageCarouselData"
import Image from "next/image"
import Partners from "@/components/Partners/Partners"
import { useTranslations } from "next-intl"

export default function AboutPage() {
	const { ref: teamRef, isInView: teamInView } = useScrollAnimation()
	const hoverLift = { y: -5, scale: 1.05 }
	const t = useTranslations("AboutPage")

	// Values use translated strings
	const values = t.raw("values.items").map((item: any, index: number) => {
		const icons = [
			<Paintbrush className="h-6 w-6" />,
			<Award className="h-6 w-6" />,
			<GraduationCap className="h-6 w-6" />,
			<HeartHandshake className="h-6 w-6" />,
			<Landmark className="h-6 w-6" />,
			<Users className="h-6 w-6" />,
			<Languages className="h-6 w-6" />,
			<BookOpen className="h-6 w-6" />,
			<Trophy className="h-6 w-6" />,
			<Plane className="h-6 w-6" />,
			<Recycle className="h-6 w-6" />,
			<HeartHandshake className="h-6 w-6" />,
			<Globe className="h-6 w-6" />,
			<Handshake className="h-6 w-6" />,
		]
		return {
			title: item.title,
			description: item.description,
			icon: icons[index],
		}
	})

	const teamMembers = t.raw("team.members")

	return (
		<div className="flex flex-col overflow-hidden">
			{/* Hero Section */}
			<HeaderSlider images={AboutPageCarouselData} />

			{/* Mission Section */}
			<section id="about-us" className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe]">
				<div className="container mx-auto p-5">
					<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
						{/* Mission */}
						<section className="bg-transparent py-16 px-4">
							<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
								<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
									<div className="flex items-center space-x-3 mb-6">
										<motion.div className="p-2 bg-[#205375]/10 rounded-full w-fit mb-4" whileHover={{ scale: 1.1, rotate: 360 }}>
											<Target className="h-8 w-8 text-[#205375]" />
										</motion.div>
										<h2 className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4">{t("mission.title")}</h2>
									</div>
									<p className="text-gray-600 mb-4 leading-relaxed">{t("mission.paragraph1")}</p>
									<p className="text-gray-600 mb-4 leading-relaxed">{t("mission.paragraph2")}</p>
									<p className="text-gray-600 mb-6 leading-relaxed">{t("mission.paragraph3")}</p>
									<motion.button className="hidden bg-[#68b684] text-white px-6 py-3 rounded-full hover:bg-[#205375]" whileHover={{ scale: 1.05 }}>
										<span className="mr-2">{t("mission.button")}</span>
										<ArrowRight className="h-5 w-5" />
									</motion.button>
								</motion.div>
							</div>
						</section>

						{/* Vision */}
						<section className="bg-transparent py-16 px-4">
							<div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
								<motion.div className="md:block md:w-1/2 mb-8 md:mb-0">
									<Image src="/about_ecc.png" alt="Vision" width={600} height={500} className="rounded-2xl shadow-lg object-cover" />
								</motion.div>
								<motion.div className="md:w-1/2">
									<div className="flex items-center space-x-3 mb-6">
										<motion.div className="p-2 bg-[#205375]/10 rounded-full w-fit mb-4">
											<EyeIcon className="h-8 w-8 text-[#68b684]" />
										</motion.div>
										<h2 className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4">{t("vision.title")}</h2>
									</div>
									<p className="text-gray-600 pb-3">{t("vision.paragraph1")}</p>
									<p className="text-gray-600 pb-3">{t("vision.paragraph2")}</p>
									<motion.button className="hidden bg-[#68b684] text-white px-6 py-3 rounded-full hover:bg-[#205375]">
										<span className="mr-2">{t("vision.button")}</span>
										<ArrowRight className="h-5 w-5" />
									</motion.button>
								</motion.div>
							</div>
						</section>

						{/* Values */}
						<section className="bg-transparent py-16 px-4">
							<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
								<motion.div className="md:block md:w-1/2 mb-8 md:mb-0">
									<Image src="/banner-1.png" alt="Vision" width={600} height={500} className="rounded-2xl shadow-lg object-cover" />
								</motion.div>
								<motion.div className="md:w-1/2">
									<div className="flex items-center space-x-3 mb-6">
										<HeartIcon className="h-8 w-8 text-[#8F770A]" />
										<h2 className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4">{t("values.title")}</h2>
									</div>
									<p className="text-gray-600">{t("values.description")}</p>
									<motion.button className="hidden bg-[#68b684] text-white px-6 py-3 rounded-full hover:bg-[#205375]">
										<span className="mr-2">{t("values.button")}</span>
										<ArrowRight className="h-5 w-5" />
									</motion.button>
								</motion.div>
							</div>
						</section>
					</motion.div>
				</div>
			</section>

			{/* Team */}
			<section className="hidden py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe]" ref={teamRef}>
				<div className="container mx-auto">
					<motion.div className="text-center mb-16 px-4" variants={fadeInUp} initial="hidden" animate={teamInView ? "visible" : "hidden"}>
						<h2 className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4">{t("team.title")}</h2>
						<p className="text-xl text-[#68b684] max-w-3xl mx-auto">{t("team.description")}</p>
					</motion.div>
					<motion.div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 px-4" variants={staggerContainer}>
						{teamMembers.map((member: any, index: number) => (
							<motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
								<Card className="h-full text-center bg-white/80">
									<CardContent className="p-6 flex flex-col items-center">
										<div className="w-32 h-32 mb-4 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }} />
										<h3 className="text-xl font-bold text-[#205375] mb-1">{member.name}</h3>
										<Badge variant="secondary" className="mb-3">{member.role}</Badge>
										<p className="text-sm text-gray-600">{member.bio}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Partners */}
			<Partners />

			{/* CTA */}
			<CTASection
				title={t("cta.title")}
				description={t("cta.description")}
				primaryLabel={t("cta.primaryLabel")}
				primaryHref="/contact"
				secondaryLabel={t("cta.secondaryLabel")}
				secondaryHref="/contact"
				className="bg-slate-100 text-white py-16 lg:py-20"
			/>
		</div>
	)
}
