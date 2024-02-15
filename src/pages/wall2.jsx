import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Fragment, useEffect, useRef, useState } from "react";
import { Textarea } from "@material-tailwind/react";
import pic1 from "../images/2.jpg";
import pic2 from "../images/3.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import AlertCheck from "../Components/AlertCheck";
import toast from "react-hot-toast";
import Text from "@material-tailwind/react/components/Textarea";
import supabase from "../services/supaBase";
export default function Wall2() {
  const inputRef = useRef(null);
  let apiURL = "http://127.0.0.1:8000/";
  const [wallValues, setWallValues] = useState([]);
  const [formInput, setFormInput] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    getWallData();
  }, []);

  async function insertWallValues() {
    const { data, error } = await supabase
      .from("uniwall-users")
      .insert({ name: formInput, email: "" });

    getWallData();
  }

  async function getWallData() {
    const { data, error } = await supabase.from("uniwall-users").select("*");
    setWallValues(data);
    if (!data) {
      throw error.code;
    }
  }

  function handel_input_wall(e) {
    setFormInput(e.target.value);
  }

  function BlogCard({ Title, SubTitle, wallValue, img }) {
    return (
      <>
        <Card className=" mt-5 md:w-full items-center sm:w-[24rem]  overflow-hidden  ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-md"
          >
            <img src={img} className="w-200px" alt="ui/ux review check" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              {Title}
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              &apos;{SubTitle}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between">
            <Typography className="font-normal">{wallValue}</Typography>
          </CardFooter>
        </Card>
      </>
    );
  }
  return (
    <div>
      <div>
        <>
          <Navbar />

          <AlertCheck
            Title={"این صفحه در حال تکمیل میباشد "}
            Paragraph="به صفحه وال خوش آمدید"
            Paragraph2="وال یک بلاگ اختصاصی برای دانشجو ها است 
              شما میتونید تکست ها و روزمرگی هاتون توی دانشگاه اینجا برای همه
              اشتراک بزارید "
          />
        </>

        <>
          <div className="mt-6 p-10 ">
            <BlogCard
              img={pic2}
              Title={"تو هم یادگاریتو بنویس"}
              SubTitle={
                <Textarea
                  type={"text"}
                  size="md"
                  onChange={(e) => handel_input_wall(e)}
                  placeholder={"متن رو اینجا وارد کنید و بعد save رو بزنید"}
                />
              }
              // wallValue={<Button onClick={handel_click}>save</Button>}
              wallValue={<Button onClick={insertWallValues}>save</Button>}
            />
          </div>
          <div className="sm:mt-6 justify-center p-10  ">
            {wallValues.map((card) => {
              return (
                <BlogCard
                  wallValue={card.name}
                  SubTitle={card.id}
                  Title={card.id}
                  img={pic1}
                />
              );
            })}
            {/* <Button
              className="fixed top-0 right-1"
              onClick={window.scroll(0, 0)}
            >
              Scroll top{" "}
            </Button> */}
          </div>
          <Footer />
        </>
      </div>
    </div>
  );
}
