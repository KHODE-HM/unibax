import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Skeleton, Fild } from "../Components/skeleton";
import { isMobileContext } from "../context";
import { useEffect, useContext, useState } from "react";
import { Textarea } from "@material-tailwind/react";
import pic1 from "../assets/images/message.svg";
import pic2 from "../assets/images/blog.svg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import AlertCheck from "../Components/AlertCheck";
import { toast, Toaster } from "react-hot-toast";
import supabase from "../services/supaBase";
import { useForm } from "react-hook-form";
export default function Wall2() {
  const [wallValues, setWallValues] = useState([]);
  const [texareaInput, setTexareaInput] = useState("");
  const Mobile = useContext(isMobileContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 290,
      behavior: "smooth",
    });
  };
  const wordPattern = [
    /\b\w*k\w*o\w*s\b/g,
    /\b\w*k\w*i\w*r\b|\b\w*k\w*i\w*r\w*\b/g,
    /\b\w*k\w*o\w*n\b|\b\w*k\w*o\w*n\w*\b/g,
    /\b\w*\w*ص\w*ک\b/g,
    /\b\w*g\w*a\w*i\b/g,
    /\b\w*\w*ص\w*ک\b/g,
    /\b\w*\w*س\w*ک\b/g,
    /\b\w*ر\w*ی\w*ک\b|\b\w*ر\w*ی\w*ک\b/g,
    /\b\w*ن\w*و\w*ک\b|\b\w*ن\w*و\w*ک\b/g,
    /\b\w*د\w*ن\w*ج\b/g,
  ];

  function handel_input_wall(e) {
    let value = e.target.value;
    if (wordPattern.test(value)) {
      value.replace("");
    }

    console.log(texareaInput);
  }
  useEffect(() => {
    getWallData({ prop: "blog_view" });
  }, []);

  async function getWallData({ prop }) {
    const { data, error } = await supabase.from(prop).select("*");
    setWallValues(data);
    if (!data) {
      throw error.code;
    }
  }
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      data.created_at = new Date().getDatetoLocaleString("fa-IR");

      const { data: insertedData, err } = await supabase
        .from("uniwall_blog")
        .insert({ data });
      console.log(data);
      getWallData({ prop: "blog_view" });
      if (isSubmitSuccessful) {
        toast.success("متشکرم !!  نظر شما ارسال شد");
      }
    } catch {
      toast.error("لطفا صبر کنید..");
      console.log("error");
    }
  };
  const onSubmit_test = async (data) => {
    console.log(data);
    reset();
  };

  function BlogCard({ Title, SubTitle, img }) {
    return (
      <>
        <div className="mt-5 p-6 sm:flex justify-around">
          <Card className="  mt-5 md:w-full  sm:w-[24rem]  overflow-hidden  text-center  ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-full"
            >
              <img src={img} className="w-auto" alt="ui/ux" />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue-gray">
                {Title}
              </Typography>
            </CardBody>
            <CardFooter className="flex  flex-col items-center">
              <span className="font-Peyda-md ">{SubTitle}</span>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  }
  if (Mobile) {
    return (
      <div className="lg:flex justify-around">
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
            <div className="mt-7 p-5 sm:flex justify-around">
              <form onSubmit={handleSubmit(onSubmit_test)}>
                <Card className=" mt-5 md:w-full  sm:w-[24rem]  overflow-hidden  ">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-md"
                  >
                    <img
                      src={pic2}
                      className="w-full"
                      alt="ui/ux review check"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h4" color="blue-gray">
                      تو هم یادگاریتو بنویس
                    </Typography>
                  </CardBody>
                  <CardFooter className=" inline-block justify-between">
                    <div className=" w-full h-auto  mb-5 bg-transparent decoration-wavy">
                      <Textarea
                        required
                        placeholder="متن رو اینجا وارد کنید و بعد save رو بزنید"
                        rows={5}
                        {...register("text", { pattern: /\b\w*k\w*o\w*s\b/g })}
                      />
                    </div>
                    <Button type="submit">save</Button>
                  </CardFooter>
                </Card>
              </form>
            </div>
          </>
        </div>
        {wallValues.map((e) => {
          return (
            <>
              <BlogCard Title={e.text} SubTitle={e.created_at} img={pic1} />
            </>
          );
        })}

        <Footer />
        <>
          <Button
            className="relative bg-white h-auto w-auto bottom-36 right-3 "
            onClick={scrollToTop}
          >
            <svg
              className="flex  items-center text-center"
              aria-label=" Logo"
              // fill="var(--geist-foreground)"
              fill="black"
              viewBox="0 0 100 100"
              height="30"
            >
              <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
            </svg>
          </Button>
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
