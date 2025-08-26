import { useState, useEffect } from "react";
import Slider from "react-slick";
import { people } from "../data/data";
import SliderItem from "./SliderItem";

function HeaderSlider() {
  const [mounted, setMounted] = useState(false); // sadece client-side render
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true); // sadece client
    setWindowWidth(window.innerWidth); // slider responsive için
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:
      windowWidth > 1000
        ? 3
        : windowWidth > 800
          ? 2
          : windowWidth > 480
            ? 1
            : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding:
      windowWidth > 1350
        ? "180px"
        : windowWidth > 1000
          ? "0"
          : windowWidth > 800
            ? "0"
            : windowWidth > 480
              ? "15%"
              : "0px",
    arrows: false,
    afterChange: (current) => setActiveIndex(current),
    customPaging: (i) => (
      <div
        className={`ba mt-20 h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
          i === activeIndex ? "scale-125 bg-amber-700" : "bg-gray-400"
        }`}
      />
    ),
    appendDots: (dots) => (
      <div className="mt-4 flex justify-center gap-2">{dots}</div>
    ),
  };

  if (!mounted) return null; // SSR/initial render hatasını önler

  return (
    <div className="slider-container" key={windowWidth}>
      <Slider {...settings}>
        {people.map((person, index) => (
          <SliderItem
            key={person.id}
            person={person}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </Slider>
    </div>
  );
}

export default HeaderSlider;
