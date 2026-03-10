"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide5.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[800px] relative overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
  );
}