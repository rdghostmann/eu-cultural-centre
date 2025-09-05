"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, hoverScale, hoverLift } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import CTASection from "@/components/CTASection/CTASection"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

const contactInfo = [
	{
		icon: <Mail className="h-6 w-6" />,
		title: "Email Us",
		details: ["info@eu-cultural-centre.com"],
		description: "Get in touch for general inquiries or program information",
	},
	{
		icon: <Phone className="h-6 w-6" />,
		title: "Call Us",
		details: ["+234 913 444 6638"],
		description: "Speak directly with our team during business hours",
	},
	{
		icon: <MapPin className="h-6 w-6" />,
		title: "Visit Us",
		details: ["47 Damaturu Crescent Garki Mall, FCT Abuja Nigeria"],
		description: "Come visit our offices for in-person consultations",
	},
	{
		icon: <Clock className="h-6 w-6" />,
		title: "Office Hours",
		details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
		description: "We're here to help during these hours",
	},
]

const departments = [
	{ name: "General Inquiries", email: "info@eccnigeria.org" },
	{ name: "Program Applications", email: "programs@eccnigeria.org" },
	{ name: "Partnership Opportunities", email: "partnerships@eccnigeria.org" },
	{ name: "Media & Press", email: "media@eccnigeria.org" },
]

export default function ContactPage() {
	const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
	const { ref: formRef, isInView: formInView } = useScrollAnimation()
	const { ref: infoRef, isInView: infoInView } = useScrollAnimation()

	const hoverScale = { scale: 1.05 }
	const hoverLift = { y: -5, scale: 1.05 }

	return (
		<div className="flex flex-col overflow-hidden">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-[#205375] via-[#68b684] to-[#8F770A] text-white py-20">
				<motion.div
					className="absolute inset-0 bg-black/20"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				/>
				<div className="container mx-auto relative z-10 flex flex-col items-center" ref={heroRef}>
					<motion.div
						className="max-w-4xl mx-auto px-4 w-full text-center"
						variants={staggerContainer}
						initial="hidden"
						animate={heroInView ? "visible" : "hidden"}
					>
						<motion.div variants={staggerItem}>
							<Badge className="mb-6 bg-white/20 text-white border-white/30 mx-auto">Contact Us</Badge>
						</motion.div>
						<motion.h1 className="text-4xl lg:text-5xl font-bold mb-6" variants={staggerItem}>
							Get in Touch
						</motion.h1>
						<motion.p className="text-xl mb-8 text-[#e0f2fe] max-w-3xl mx-auto" variants={staggerItem}>
							Ready to start your cultural journey? Have questions about our programs? We're here to help you every
							step of the way.
						</motion.p>
					</motion.div>
				</div>
			</section>


			{/* Contact Form & Info */}
			<section className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe]">
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center px-5">
						{/* Contact Form */}
						<motion.div ref={formRef} variants={fadeInUp} initial="hidden" animate={formInView ? "visible" : "hidden"}>
							<Card className="h-full bg-white/80 border border-[#68b684]/30 shadow-xl rounded-2xl backdrop-blur-md mx-auto">
								<CardHeader>
									<CardTitle className="text-2xl text-[#205375] flex items-center justify-center">
										<MessageSquare className="mr-3 h-6 w-6 text-[#68b684]" />
										Send us a Message
									</CardTitle>
									<CardDescription className="text-center">
										Fill out the form below and we'll get back to you within 24 hours.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<form className="space-y-6">
										<div className="grid grid-cols-2 gap-4">
											<motion.div whileFocus={{ scale: 1.02 }}>
												<Input className="w-full text-xs lg:text-xl" placeholder="First Name"  />
											</motion.div>
											<motion.div whileFocus={{ scale: 1.02 }}>
												<Input className="w-full text-xs lg:text-xl" placeholder="Last Name"  />
											</motion.div>
										</div>
										<motion.div whileFocus={{ scale: 1.02 }}>
											<Input className="w-full text-xs lg:text-xl" type="email" placeholder="Email Address"  />
										</motion.div>
										<motion.div whileFocus={{ scale: 1.02 }}>
											<Input className="w-full text-xs lg:text-xl" placeholder="Phone Number"  />
										</motion.div>
										<motion.div whileFocus={{ scale: 1.02 }}>
											<Select>
												<SelectTrigger className="text-xs lg:text-xl w-full p-3 border border-[#68b684] rounded-md focus:ring-2 focus:ring-[#68b684] focus:border-transparent">
													<SelectValue placeholder="Select Department" />
												</SelectTrigger>
												<SelectContent>
													{departments
														.sort((a, b) => a.name.localeCompare(b.name))
														.map((dept, index) => (
															<SelectItem className="text-xs lg:text-lg" key={index} value={dept.email}>
																{dept.name}
															</SelectItem>
														))}
												</SelectContent>
											</Select>
										</motion.div>
										<motion.div whileFocus={{ scale: 1.02 }}>
											<Textarea placeholder="Your Message" className="w-full text-xs lg:text-xl min-h-[120px]" />
										</motion.div>
										<motion.div whileHover={hoverScale} whileTap={{ scale: 0.95 }}>
											<Button className="w-full bg-[#68b684] hover:bg-[#205375] text-white font-semibold">
												Send Message <Send className="ml-2 h-4 w-4" />
											</Button>
										</motion.div>
									</form>
								</CardContent>
							</Card>
						</motion.div>

						{/* Contact Information */}
						<motion.div
							ref={infoRef}
							className="space-y-6 flex flex-col items-center"
							variants={staggerContainer}
							initial="hidden"
							animate={infoInView ? "visible" : "hidden"}
						>
							{contactInfo.map((info, index) => (
								<motion.div key={index} variants={staggerItem} whileHover={hoverLift} className="w-full max-w-md mx-auto">
									<Card className="bg-white/80 border border-[#68b684]/30 shadow-xl rounded-2xl backdrop-blur-md hover:bg-[#68b684]/10 transition-all duration-300">
										<CardContent className="p-6">
											<div className="flex items-start space-x-4">
												<motion.div
													className="p-3 bg-[#68b684]/20 rounded-lg text-[#68b684]"
													whileHover={{ scale: 1.1, rotate: 360 }}
													transition={{ duration: 0.5 }}
												>
													{info.icon}
												</motion.div>
												<div className="flex-1">
													<h3 className="text-lg font-bold text-[#205375] mb-2">{info.title}</h3>
													<div className="space-y-1 mb-2">
														{info.details.map((detail, idx) => (
															<p key={idx} className="text-[#205375] font-medium">
																{detail}
															</p>
														))}
													</div>
													<p className="text-sm text-gray-500">{info.description}</p>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</section>


			{/* Map Section */}
			<section className="py-20 bg-gradient-to-br from-[#181f2a] via-[#205375] to-[#68b684]">
				<div className="container flex flex-col items-center mx-auto px-7">
					<motion.div
						className="text-center mb-12 w-full"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Find Us</h2>
						<p className="text-xl text-[#68b684]">
							Located in the heart of Abuja, we're easily accessible by public transport.
						</p>
					</motion.div>
					<motion.div
						className="flex justify-center items-center w-full"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg border border-[#68b684]/30 mx-auto">
							<iframe
								title="ECC Nigeria Location"
								src="https://www.google.com/maps?q=47+Damaturu+Crescent,+Garki+Mall,+FCT,+Abuja&output=embed"
								width="100%"
								height="600"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-96"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<CTASection
				title="Ready to Get Started?"
				description=" Don't wait – reach out today and begin your journey with the European Cultural Center Nigeria."
				primaryLabel="Email Us"
				primaryHref="mailto:info@eu-cultural-centre.com"
				secondaryLabel="Call Us"
				secondaryHref="tel:+234 913 444 6638"
				className="bg-slate-100 text-white py-16 lg:py-20"
			/>


		</div>
	)
}