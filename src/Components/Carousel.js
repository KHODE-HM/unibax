import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import pic6 from "../images/art2.jpg";
import pic5 from "../images/art1.jpg";
import pic3 from "../images/pic9.jpg";
import pic4 from "../images/pic8.jpg";

const pic7 = "https://picsum.photos/900/900?grayscale";
export default function Carouselll({ props }) {
  const img = [
    {
      key: 1,
      src: pic6,
      altText: "slide 1",
      caption: "slide 1",
    },
    {
      key: 2,
      src: pic5,
      altText: "slide 2",
      caption: "slide 2",
    },
    {
      key: 3,
      src: pic3,
      altText: "slide 3",
      caption: "slide 3",
    },
    {
      key: 4,
      src: pic4,
      altText: "slide 4",
      caption: "slide 4",
    },
    {
      key: 5,
      src: pic7,
      altText: "slide 5",
      caption: "slide 5",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? img.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = img.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          key={item.key}
          src={item.src}
          style={{ height: "300px", width: props }}
        />
        <CarouselCaption className="text-danger" captionText={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div style={{ textAlign: "center" }}>
      <style>
        {`.custom-tag {
            max-width: auto;
              height: 300px;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={img}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}
