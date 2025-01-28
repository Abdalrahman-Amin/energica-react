import React, { useEffect, useState } from "react";
import { Button } from "../button";

type CarouselProps = {
   images: string[];
};

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
   };

   const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
   };

   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide();
      }, 5000);

      return () => clearInterval(interval);
   });

   return (
      <div className="relative w-full mx-auto">
         {/* Images */}
         <div className="overflow-hidden rounded-lg">
            <div
               className="flex transition-transform duration-500"
               style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
               }}
            >
               {images.map((image, index) => (
                  <img
                     key={index}
                     src={image}
                     alt={`Slide ${index + 1}`}
                     className="w-full object-cover flex-shrink-0"
                     style={{height: "40rem"}}
                  />
               ))}
            </div>
         </div>

         {/* Navigation Buttons */}
         <Button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 shadow-md cursor-pointer"
         >
            &#10094;
         </Button>
         <Button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 shadow-md cursor-pointer"
         >
            &#10095;
         </Button>

         {/* Indicators */}
         <div className="flex justify-center space-x-2 mt-2">
            {images.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full ${
                     currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                  } hover:bg-blue-400 transition-colors cursor-pointer`}
               ></button>
            ))}
         </div>
      </div>
   );
};
