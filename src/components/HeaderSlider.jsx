import { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { people } from "../data/data";
import SliderItem from "./SliderItem";

function HeaderSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { podcasterId } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "180px",
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
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 100,
          autoplaySpeed: 3000,
          cssEase: "ease-in-out",
          centerMode: true,
          centerPadding: "0px",
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 100,
          autoplaySpeed: 3000,
          cssEase: "ease-in-out",
          centerMode: true,
          centerPadding: "90px",
          arrows: false,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 100,
          autoplaySpeed: 3000,
          cssEase: "ease-in-out",
          centerMode: false,
          centerPadding: "90px",
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
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
