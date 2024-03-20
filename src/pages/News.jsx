import Navbar from "../Components/navbar";
import { useState } from "react";

import { Skeleton, Fild } from "../Components/skeleton";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { isMobileContext } from "../context";
import { useContext } from "react";
import Cardsss from "../Components/card";
export default function News() {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };
  const Mobile = useContext(isMobileContext);
  function Cards({ prop }) {
    return (
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center "
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url(https://picsum.photos/900/900?grayscale)] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          {/* <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            .
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            .
          </Typography> */}
        </CardBody>
      </Card>
    );
  }
  if (Mobile) {
    return (
      <div>
        <>
          <Navbar />
        </>
        <>
          <Cards />
        </>
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            {[1, 2, 3].map((id) => (
              <Cardsss
                key={id}
                id={id}
                title={`Card ${id}`}
                subtitle={`Subtitle ${id}`}
                isSelected={id === selectedId}
                onClick={handleClick}
              />
            ))}
          </div>
        </>
      </div>
    );
  } else {
    return (
      <div className=" overflow-hidden">
        <div className=" grid  grid-cols-3 gap-3  ">
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Fild />
            <Fild />
            <Fild />
          </>
        </div>
      </div>
    );
  }
}
