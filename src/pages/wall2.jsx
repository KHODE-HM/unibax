import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Fragment, Suspense, useEffect, useRef, useState } from "react";
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
import { toast, Toaster } from "react-hot-toast";
import supabase from "../services/supaBase";
export default function Wall2() {
  const [wallValues, setWallValues] = useState([]);
  const [texareaInput, setTexareaInput] = useState("");
  const user_get_date = new Date().getTime();
  const get_user_submit_time = new Date(user_get_date);
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
		in place of 'smooth' */
    });
  };

  useEffect(() => {
    getWallData();
  }, []);

  async function getWallData() {
    const { data, error } = await supabase.from("uniwall_blog").select("*");
    setWallValues(data);
    if (!data) {
      throw error.code;
    }
  }
  async function insertWallValues() {
    const { data, err } = await supabase
      .from("uniwall_blog")
      .insert({ text: texareaInput, created_at: get_user_submit_time });
    // console.log(texareaInput);
    toast.success("متشکرم !!  نظر شما ارسال شد");
    // console.log(wallValues);
    getWallData();
    if (err) {
      toast.error(`${err}`);
    }
  }

  function handel_input_wall(e) {
    setTexareaInput(e.target.value);
    setTexareaInput("");

    // console.log(texareaInput);
  }

  function BlogCard({ Title, SubTitle, img, prop }) {
    return (
      <>
        <div className="mt-5 p-6">
          <Card className="  mt-5 md:w-full  sm:w-[24rem]  overflow-hidden  text-center  ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-full"
            >
              <img src={img} className="w-200px" alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue-gray">
                {Title}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center ">
              <Typography className="font-light text-center ">
                {SubTitle}
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  }
  return (
    <div>
      <div>
        <>
          <Toaster />
          <Navbar />
          <AlertCheck
            Title="به صفحه وال خوش آمدید"
            Paragraph2="وال یک بلاگ اختصاصی برای دانشجو ها است 
              شما میتونید تکست ها و روزمرگی هاتون توی دانشگاه اینجابه
              اشتراک بزارید "
          />
        </>
        <>
          <div className="mt-6 p-10 ">
            <Card className=" mt-5 md:w-full  sm:w-[24rem]  overflow-hidden  ">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-md"
              >
                <img src={pic2} className="w-200px" alt="ui/ux review check" />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  تو هم یادگاریتو بنویس
                </Typography>
                {/* <Typography
                  variant="lead"
                  color="gray"
                  className="mt-3 font-normal"
                >
                  &apos;
                </Typography> */}
              </CardBody>
              <CardFooter className=" inline-block justify-between">
                <div className=" w-[10rem] h-[5rem]  mb-5 bg-transparent">
                  <Textarea
                    variant="static"
                    placeholder="متن رو اینجا وارد کنید و بعد save رو بزنید"
                    rows={5}
                    onChange={(e) => handel_input_wall(e)}
                  />
                </div>{" "}
              </CardFooter>{" "}
                  <Button size={"md "} onClick={insertWallValues}>
                    save
                  </Button>
            </Card>
          </div>
        </>
      </div>
      {wallValues.map((e) => {
        return (
          <>
            <BlogCard
              key={e.id}
              Title={e.text}
              SubTitle={e.created_at}
              img={pic1}
            />
          </>
        );
      })}
      <>
        {" "}
        <Button
          className="relative rounded-full left-0-p-5"
          onClick={scrollToTop}
        >
          top
        </Button>
      </>
      <Footer />
    </div>
  );
}

{
  /* <BlogCard
              img={pic1}
              Title={}
              SubTitle={
                <Text
                  type={"text"}
                  size="md"
                  placeholder={"}
                />
              }
              // wallValue={<Button onClick={handel_click}>save</Button>}
              wallValue={}
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
           
          */
}
