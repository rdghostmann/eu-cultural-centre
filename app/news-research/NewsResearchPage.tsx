"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  hoverScale,
  hoverLift,
} from "@/lib/animations";

// --- Articles Data ---
export interface Article {
  title: string;
  description: string;
  source: string;
}

export const articles: Article[] = [
  {
    title: "Russia held responsible for MH17 downing",
    description:
      "A UN body concluded that Russia was accountable for the downing of Malaysia Airlines flight MH17, resulting in the tragic loss of all 298 on board.",
    source: "BBC",
  },
  {
    title: "Putin's diplomacy may sow discord in the West",
    description:
      "BBC’s Russia Editor Steve Rosenberg suggests Putin's proposition for talks might be an attempt to create divisions among European and US policymakers.",
    source: "BBC",
  },
  {
    title: "Gérard Depardieu’s legal verdict incoming",
    description:
      "French actor Gérard Depardieu is set to receive a verdict in his sexual assault trial, potentially altering ongoing discussions around high-profile legal accountability.",
    source: "BBC",
  },
  {
    title: "Kim Kardashian called to testify in Paris court",
    description:
      "Kim Kardashian is scheduled to appear in court as a witness in a Paris burglary case.",
    source: "BBC",
  },
  {
    title: "Poland alleges Russian complicity in Warsaw fire",
    description:
      "Poland’s minister claims Russia orchestrated a shopping-center fire in Warsaw, a claim the Kremlin denies.",
    source: "BBC",
  },
  {
    title: "PKK announces disarmament after four decades",
    description:
      "The Kurdish PKK group declared it is laying down arms and disbanding after a 40-year insurgency—marking a significant shift in Turkish and regional dynamics.",
    source: "BBC",
  },
  {
    title: "Basel readies for an inclusive Eurovision hosting",
    description:
      "The Swiss city of Basel pledges a welcoming and inclusive approach as it prepares to host Eurovision amid broader cultural tensions.",
    source: "BBC",
  },
];

// --- News Page ---
export default function NewsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        className="text-center mb-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-[#205375] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
          European News
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest headlines and updates from across Europe.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {articles.map((article, index) => (
          <motion.div key={index} variants={staggerItem} >
            <Card className="overflow-hidden h-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{article.source}</Badge>
                </div>
                <CardTitle className="text-lg leading-snug text-[#205375]">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div  whileTap={{ scale: 0.95 }}>
                  <span className="text-sm font-semibold text-[#68b684] hover:text-[#8F770A] cursor-pointer">
                    Read More →
                  </span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
