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
} from "lucide-react"; import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import HeaderSlider from "@/components/CustomSlider/HeaderSlider"
import CTASection from "@/components/CTASection/CTASection"
import Partners from "@/components/Partners/Partners"
import { AboutPageCarouselData } from "@/lib/AboutPageCarouselData"

const values = [
	{
		title: "Art and the Creative Industries",
		description: "Promoting creativity and supporting artists across Africa and Europe.",
		icon: <Paintbrush className="h-6 w-6" />,
	},
	{
		title: "Digitalization and Innovation",
		description: "Embracing technology and innovation for cultural advancement.",
		icon: <Award className="h-6 w-6" />,
	},
	{
		title: "Education, Training, and Skills Development",
		description: "Empowering communities through learning and capacity building.",
		icon: <GraduationCap className="h-6 w-6" />,
	},
	{
		title: "Gender Equality and Women’s Empowerment",
		description: "Championing equal opportunities and leadership for women.",
		icon: <HeartHandshake className="h-6 w-6" />,
	},
	{
		title: "Cultural Heritage and Preservation",
		description: "Safeguarding and celebrating our shared cultural legacy.",
		icon: <Landmark className="h-6 w-6" />,
	},
	{
		title: "Human Rights and Social Inclusion",
		description: "Advocating for justice, equity, and inclusive societies.",
		icon: <Users className="h-6 w-6" />,
	},
	{
		title: "Languages and Multilingualism",
		description: "Promoting language learning and cross-cultural communication.",
		icon: <Languages className="h-6 w-6" />,
	},
	{
		title: "International Student Exchange Programs",
		description: "Connecting students globally for shared learning experiences.",
		icon: <BookOpen className="h-6 w-6" />,
	},
	{
		title: "Youth Engagement and Empowerment",
		description: "Supporting young leaders and changemakers.",
		icon: <Trophy className="h-6 w-6" />,
	},
	{
		title: "Sports and Tourism",
		description: "Building bridges through sports and cultural travel.",
		icon: <Plane className="h-6 w-6" />,
	},
	{
		title: "Environmental Sustainability",
		description: "Driving climate action and environmental stewardship.",
		icon: <Recycle className="h-6 w-6" />,
	},
	{
		title: "Aid and Humanitarian Support",
		description: "Providing relief and support to those in need.",
		icon: <HeartHandshake className="h-6 w-6" />,
	},
	{
		title: "European-African Exchange Projects",
		description: "Facilitating collaboration and cultural exchange between continents.",
		icon: <Globe className="h-6 w-6" />,
	},
	{
		title: "Sourcing Foreign Investors for Project Development",
		description: "Attracting investment for impactful projects in Nigeria and Africa.",
		icon: <Handshake className="h-6 w-6" />,
	},
];

const teamMembers = [
	{
		name: "Dr. Amina Hassan",
		role: "Executive Director",
		bio: "Leading cultural diplomat with 15+ years experience in international cooperation.",
		image: "/placeholder.svg?height=300&width=300",
	},
	{
		name: "Prof. John Smith",
		role: "Research Director",
		bio: "Renowned researcher in cultural studies and heritage preservation.",
		image: "/placeholder.svg?height=300&width=300",
	},
	{
		name: "Sarah Johnson",
		role: "Programs Manager",
		bio: "Expert in program development and international educational exchanges.",
		image: "/placeholder.svg?height=300&width=300",
	},
	{
		name: "Dr. Kwame Asante",
		role: "Innovation Lead",
		bio: "Technology innovator focused on digital solutions for cultural preservation.",
		image: "/placeholder.svg?height=300&width=300",
	},
]



export default function AboutPage() {
	const { ref: heroRef, isInView: heroInView } = useScrollAnimation()
	const { ref: valuesRef, isInView: valuesInView } = useScrollAnimation()
	const { ref: teamRef, isInView: teamInView } = useScrollAnimation()
	const hoverScale = { scale: 1.05 }
	const hoverLift = { y: -5, scale: 1.05 }

	return (
		<div className="flex flex-col overflow-hidden">
			{/* Hero Section */}
			<HeaderSlider images={AboutPageCarouselData} />

			{/* Mission, Vision, Impact */}
			<section className="py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe]">
				<div className="container mx-auto">
					<motion.div
						className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 px-4 lg:px-10"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{/* Mission - Full Row */}
						<motion.div
							variants={staggerItem}
							whileHover={hoverLift}
							className="lg:col-span-2"
						>
							<Card className="h-full text-center bg-white/80 border border-[#68b684]/30 shadow-xl rounded-2xl backdrop-blur-md">
								<CardHeader>
									<motion.div
										className="mx-auto p-3 bg-[#205375]/10 rounded-full w-fit mb-4"
										whileHover={{ scale: 1.1, rotate: 360 }}
										transition={{ duration: 0.5 }}
									>
										<Target className="h-8 w-8 text-[#205375]" />
									</motion.div>
									<CardTitle className="text-2xl text-[#205375]">Our Mission</CardTitle>
								</CardHeader>
								<CardContent className="px-2 lg:px-7">
									<p className="text-gray-600 mb-3">
										The European Cultural Centre Nigeria/West Africa is a non-profit institution and serves as
										the umbrella for promoting diverse European cultures and fostering meaningful cultural
										exchange in collaboration with our partners.
									</p>
									<p className="text-gray-600 mb-3">
										We bring European cultural collaboration to life connecting more than 27 European
										countries with Africa through cultural exchanges and advocate for a prominent role of
										culture in international relations.
									</p>
									<p className="text-gray-600 mb-3">
										The European Cultural Centre Nigeria/West Africa provides a dynamic platform for knowledge
										sharing and capacity building through exchange programs connecting Nigeria, Africa, Europe,
										and the broader global community
									</p>
								</CardContent>
							</Card>
						</motion.div>

						{/* Vision */}
						<motion.div variants={staggerItem} whileHover={hoverLift}>
							<Card className="h-full text-center bg-white/80 border border-[#68b684]/30 shadow-xl rounded-2xl backdrop-blur-md">
								<CardHeader>
									<motion.div
										className="mx-auto p-3 bg-[#68b684]/10 rounded-full w-fit mb-4"
										whileHover={{ scale: 1.1, rotate: 360 }}
										transition={{ duration: 0.5 }}
									>
										<EyeIcon className="h-8 w-8 text-[#68b684]" />
									</motion.div>
									<CardTitle className="text-2xl text-[#205375]">Our Vision</CardTitle>
								</CardHeader>
								<CardContent className="px-2 lg:px-7">
									<p className="text-gray-600 pb-3">
										Through culture, education, innovation, and cultural exchange, the European Cultural
										Centre Nigeria/West Africa strives to build trust and mutual understanding between
										European countries and Africa as a whole.
									</p>
									<p className="text-gray-600 pb-3">
										We are dedicated to making culture a key element in international relations. We work
										through fair partnerships, grounded in mutual listening, learning, and action engaging in
										cultural exchanges and joint capacity-building efforts both locally and internationally.
									</p>
								</CardContent>
							</Card>
						</motion.div>

						{/* Values */}
						<motion.div variants={staggerItem} whileHover={hoverLift}>
							<Card className="h-full text-center bg-white/80 border border-[#68b684]/30 shadow-xl rounded-2xl backdrop-blur-md">
								<CardHeader>
									<motion.div
										className="mx-auto p-3 bg-[#8F770A]/10 rounded-full w-fit mb-4"
										whileHover={{ scale: 1.1, rotate: 360 }}
										transition={{ duration: 0.5 }}
									>
										<HeartIcon className="h-8 w-8 text-[#8F770A]" />
									</motion.div>
									<CardTitle className="text-2xl text-[#205375]">Our Values</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600">
										We believe that culture is a vital force for inclusive growth, mutual understanding, and
										sustainable development locally, across Africa, and around the world.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 bg-gradient-to-br from-[#181f2a] via-[#205375] to-[#68b684]" ref={valuesRef}>
				<div className="container mx-auto">
					<motion.div
						className="text-center mb-16 px-4"
						variants={fadeInUp}
						initial="hidden"
						animate={valuesInView ? "visible" : "hidden"}
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-[#68b684] mb-4">Our Values & Areas of Impact</h2>
						<p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
							The core principles that guide our work and shape our approach to cultural cooperation.
						</p>
					</motion.div>
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-7 lg:px-10"
						variants={staggerContainer}
						initial="hidden"
						animate={valuesInView ? "visible" : "hidden"}
					>
						{values.map((value, index) => (
							<motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
								<Card className="h-full bg-[#1a2332]/80 border border-[#205375]/40 shadow-xl rounded-2xl backdrop-blur-md">
									<CardContent className="p-6">
										<div className="flex items-center space-x-4">
											<motion.div
												className="p-3 bg-[#205375]/10 rounded-lg text-[#68b684]"
												whileHover={{ scale: 1.1, rotate: 360 }}
												transition={{ duration: 0.5 }}
											>
												{value.icon}
											</motion.div>
											<div>
												<h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
												<p className="text-gray-200">{value.description}</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
					<motion.div
						className="max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ delay: 0.2 }}
					>

					</motion.div>
				</div>
			</section>

			{/* Team */}
			<section className="hidden py-20 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#dbeafe]" ref={teamRef}>
				<div className="container mx-auto">
					<motion.div
						className="text-center mb-16 px-4"
						variants={fadeInUp}
						initial="hidden"
						animate={teamInView ? "visible" : "hidden"}
					>
						<h2 className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4">Our Leadership Team</h2>
						<p className="text-xl text-[#68b684] max-w-3xl mx-auto">
							Meet the dedicated professionals leading our mission to connect cultures and build bridges.
						</p>
					</motion.div>
					<motion.div
						className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 px-4"
						variants={staggerContainer}
						initial="hidden"
						animate={teamInView ? "visible" : "hidden"}
					>
						{teamMembers.map((member, index) => (
							<motion.div key={index} variants={staggerItem} whileHover={hoverLift}>
								<Card className="h-full text-center bg-white/80 border border-[#68b684]/30 shadow-xl rounded-2xl backdrop-blur-md">
									<CardContent className="p-6 flex flex-col items-center">
										<motion.div
											className="w-32 h-32 mb-4 rounded-full bg-cover bg-center"
											style={{ backgroundImage: `url(${member.image})` }}
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.3 }}
										/>
										<h3 className="text-xl font-bold text-[#205375] mb-1">{member.name}</h3>
										<Badge variant="secondary" className="mb-3">
											{member.role}
										</Badge>
										<p className="text-sm text-gray-600">{member.bio}</p>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Partners Section */}
			<Partners />
			{/* CTA Section */}
			<CTASection
				title="Ready to Join Our Mission?"
				description=" Be part of our growing community working to build bridges between cultures and create lasting
							positive impact."
				primaryLabel="Get Involved Today"
				primaryHref="/contact"
				secondaryLabel="Contact Us"
				secondaryHref="/contact"
				className="bg-slate-100 text-white py-16 lg:py-20"
			/>

		</div>
	)
}