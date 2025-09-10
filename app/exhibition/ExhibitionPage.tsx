"use client";

import { useState } from "react";
import Image from "next/image";
import PictureFrame from "../gallery/PictureFrame";
import HeaderSlider2 from "@/components/CustomSlider/HeaderSlider2";
import { ExhibitionPageCarouselData } from "@/lib/ExhibitionPageCarouselData";

const images = [
  { id: 1, src: "/culture/culture-slider1.png", title: "Cultural Dance" },
  { id: 2, src: "/culture/culture-slider3.png", title: "Cultural Dance" },
  { id: 3, src: "/culture/culture-slider5.png", title: "Cultural Dance" },
  { id: 4, src: "/culture/culture-slider6.png", title: "Cultural Dance" },

];

export default function ExihibitionPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="">
      {/* Hero Section  */}
      <HeaderSlider2 images={ExhibitionPageCarouselData} />

      <div className="container mx-auto py-10">
        <div className="w-full my-7">
          <h5 className="text-2xl text-center font-bold">Exhibition & Conference</h5>
          <p className="text-xl text-center">our event, exhibition and Conference showcasing </p>
        </div>

        {/* Gallery Grid */}
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

        <h5 className="text-2xl p-4 font-bold">Cultural Exhibition</h5>
        {/* Gallery Grid */}
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


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



    </div>
  );
}
