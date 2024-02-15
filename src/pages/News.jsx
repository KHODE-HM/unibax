import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import "../css/news.css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function News() {
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

  return (
    <div>
      <>
        <header className="mx-4 p-5">
          <h1>
            <i className="text-lg">UniWall</i>
          </h1>
          <Navbar />
        </header>
      </>

      <>
        <div>
          <Cards />
          <Cards />
        </div>
        <Footer />
      </>
    </div>
  );
}
