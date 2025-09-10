"use client";

import { useState } from "react";
import PictureFrame from "./PictureFrame";
import Image from "next/image";

const images = [
  { id: 1, src: "/culture/culture-slider1.png", title: "Cultural Dance" },
  { id: 2, src: "/culture/culture-slider3.png", title: "Cultural Dance" },
  { id: 3, src: "/culture/culture-slider5.png", title: "Cultural Dance" },
  { id: 4, src: "/culture/culture-slider6.png", title: "Cultural Dance" },
  { id: 5, src: "/culture/culture-slider17.png", title: "Cultural Dance" },
  { id: 6, src: "/culture/culture-slider18.png", title: "Cultural Dance" },
  { id: 7, src: "/culture/culture-slider19.png", title: "Cultural Dance" },
  { id: 8, src: "/culture/culture-slider23.png", title: "Cultural Dance" },
  { id: 9, src: "/culture/culture-slider39.png", title: "Cultural Dance" },
  { id: 10, src: "/culture/culture-slider41.png", title: "Cultural Dance" },
  { id: 11, src: "/events/event1.png", title: "Events" },
  { id: 12, src: "/arts/art-slide1.png", title: "Art Slide" },
  { id: 13, src: "/arts/art-slide6.png", title: "Art Slide" },
  { id: 14, src: "/exhibitions/exhibition1.png", title: "Exhibition" },
  { id: 15, src: "/government-delegation/government-delegation-slide1.png", title: "Government Delegation" },
  { id: 16, src: "/humanitarian/humanitarian-slide1.png", title: "Humanitarian" },
];

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Shuffle images on each render
  const shuffledImages = shuffleArray(images);

  return (
    <div className="p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Gallery & Events
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffledImages.map((image, index) => (
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
          images={shuffledImages}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
}