import pic2 from "../images/pic8.jpg";
import pic5 from "../images/art2.jpg";
import pic1 from "../images/art1.jpg";
import pic3 from "../images/pic9.jpg";
import pic4 from "../images/pic10.jpg";
import {
  Carousel,
  CarouselProps,
  CarouselStylesType,
} from "@material-tailwind/react";
const pic7 = "https://picsum.photos/900/900?grayscale";
export default function HomeCarousel({ props }) {
  const pic = [
    {
      key: 1,
      src: pic1,
      altText: "slide 1",
    },
    {
      key: 2,
      src: pic2,
      altText: "slide 2",
    },
    {
      key: 3,
      src: pic3,
      altText: "slide 3",
    },
    {
      key: 4,
      src: pic4,
      altText: "slide 4",
    },
  ];
  return (
    <>
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-md  flex-auto xl:h-70w-full"
      >
        {pic.map((e) => {
          <img key={e.key} src={e.src} alt={e.altText} />;
        })}
      </Carousel>
    </>
  );
}
