import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../css/news.css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export default function News() {
  const Text = "UniBax  ....".split("");

  function Cards({ prop }) {
    return (
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url()] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            Tania Andrew
          </Typography>
          <Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white"
            src="https://picsum.photos/900/900?grayscale"
          />
        </CardBody>
      </Card>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <Cards prop={"https://picsum.photos/900/900?grayscale"} />
        <Cards prop={"https://picsum.photos/900/950?grayscale"} />

        {Text.map((el, i) => (
          <span
            key={i}
          >
            {el}{" "}
          </span>
        ))}
      </div>
      <Footer />
    </>
  );
}