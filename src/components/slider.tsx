// components/DualSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "@/lib/swiper/swiper-react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = Array.from(
  { length: 13 },
  (_, i) => `/pics/sliderImages/image ${i + 1}.png`
);

const Slider = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateView = () => setIsDesktop(window.innerWidth >= 1024);
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <div
      className={`flex ${
        isDesktop ? "flex-row h-[80vh]" : "flex-col h-[60vh]"
      } w-full gap-8`}
    >
      <ImageSlider images={images} isVertical={isDesktop} reverse={false} />
      <ImageSlider images={images} isVertical={isDesktop} reverse={true} />
    </div>
  );
};

type ImageSliderProps = {
  images: string[];
  isVertical: boolean;
  reverse: boolean;
};

const ImageSlider = ({ images, isVertical, reverse }: ImageSliderProps) => {
  const [initialTheme, setInitialTheme] = useState("light");

  useEffect(() => {
    const theme =
      typeof window !== "undefined"
        ? localStorage.getItem("theme") || "light"
        : "light";
    setInitialTheme(theme);
  }, []);

  console.log(initialTheme);

  return (
    <Swiper
      direction={isVertical ? "vertical" : "horizontal"}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      allowTouchMove={false}
      modules={[Autoplay, FreeMode]}
      speed={10000}
      slidesPerView="auto"
      spaceBetween={10}
      className="w-full h-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="w-auto h-auto">
          <div className="relative w-auto h-auto">
            <Image
              src={src}
              alt={`img-${index}`}
              width={260}
              height={321}
              className="w-full min-w-3xs min-h-full lg:min-h-none"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
