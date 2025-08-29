"use client";

import { useState } from "react";
import Image from "next/image";
import PictureFrame from "../gallery/PictureFrame";
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2";
import { ExhibitionPageCarouselData } from "@/lib/ExhibitionPageCarouselData";

const images = [
  { id: 1, src: "/cultural/IMG-20250815-WA0055.jpg", title: "Cultural Dance" },
  { id: 2, src: "/cultural/IMG-20250815-WA0056.jpg", title: "Cultural Dance" },
  { id: 3, src: "/cultural/IMG-20250815-WA0081.jpg", title: "Cultural Dance" },
  { id: 4, src: "/cultural/IMG-20250815-WA0085.jpg", title: "Cultural Dance" },

];

export default function ExihibitionPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="p-6">
      {/* Hero Section  */}
      <HeaderSlider2 images={ExhibitionPageCarouselData} />

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative cursor-pointer group"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={1280}
              height={960}
              priority
              className="w-full h-40 object-cover rounded-lg shadow-md group-hover:opacity-80"
            />
            <div className="absolute bottom-2 left-2 text-white text-sm bg-black/50 px-2 py-1 rounded">
              {image.title}
            </div>
          </div>
        ))}
      </div>

      {/* Overlay PictureFrame */}
      {activeIndex !== null && (
        <PictureFrame
          images={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
}
