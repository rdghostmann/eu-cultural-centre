import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation/navigation"
import { Footer } from "@/components/Footer/footer"
import StampLogo from "@/components/StampLogo/StampLogo"
import Head from "next/head";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "European Cultural Centre Nigeria",
  description:"Bridging cultures, fostering understanding, and promoting cooperation between Europe and Nigeria through education, arts, and cultural exchange.",
    icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/speaker-favicon.png" />
      </Head>
      <body className={inter.className} cz-shortcut-listen="true">
        <Navigation />
        <main className="min-h-screen">
          {children}
           <ScrollToTopButton />
        <StampLogo />
          </main>
        <Footer />
      </body>
    </html>
  )
}
