"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  id: number;
  src: string;
  title: string;
}

interface PictureFrameProps {
  categoryTitle?: string;
  images: Image[];
  activeIndex: number;
  setActiveIndex: (index: number | null) => void;
}

export default function PictureFrame({
  categoryTitle,
  images,
  activeIndex,
  setActiveIndex,
}: PictureFrameProps) {
  const currentImage = images[activeIndex];

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
   <>
   <h4 className="text-left font-semibold">{categoryTitle}</h4>
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative max-w-3xl w-full px-4">
        {/* Close Button */}
        <button
          onClick={() => setActiveIndex(null)}
          className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="rounded-lg shadow-lg w-full max-h-[80vh] object-contain"
        />
        <p className="text-center text-white mt-2">{currentImage.title}</p>

        {/* Navigation */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
   </>
  );
}
