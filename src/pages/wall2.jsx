import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Skeleton, Fild } from "../Components/skeleton";
import { isMobileContext } from "../context";
import { useEffect, useContext, useState } from "react";
import { Input, Textarea } from "@material-tailwind/react";
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
  const wordPatternString = [
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
    /\bجند\b/g,
    /\bکون\b/g,
    /\bکیر\b/g,
    /\bکص\b/g,
    /\bکس\b/g,
  ]
    .map((pattern) => pattern.source)
    .join("|");

  // console.log(wordPatternString);

  function handel_input_wall(e) {
    let value = e.target.value;
    console.log(value);
    const wordPattern =
      /\b\w*k\w*o\w*s\b|\b\w*k\w*i\w*r\b|\b\w*k\w*i\w*r\w*\b|\b\w*k\w*o\w*n\b|\b\w*k\w*o\w*n\w*\b|\bجند\b|\bکون\b|\bکیر\b|\bکس\b|\bکص\b/g;

    if (value.test(wordPattern)) {
      value = value.replace(wordPattern, "");
    }
    setTexareaInput(value);
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
      data.created_at = new Date().toLocaleString("fa-IR");
      if (isSubmitSuccessful) {
        const { data: insertedData, err } = await supabase
          .from("uniwall_blog")
          .insert({ data });
        console.log(data);
        toast.success("متشکرم !!  نظر شما ارسال شد");
      }
      getWallData({ prop: "blog_view" });
    } catch {
      toast.error("لطفا صبر کنید..");
      console.log("error");
    }
  };
  const onSubmit_test = async (data) => {
    if (isSubmitSuccessful) {
      toast.success("متشکرم !!  نظر شما ارسال شد");

      console.log(data);
    }
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
            <div className="mt-7 rounded-md sm:flex justify-around">
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
                    <div className=" w-full h-auto  mb-5 bg-transparent hover:border-blue-gray-400">
                      <div class="relative w-full min-w-[200px]">
                        <textarea
                          class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                          type="text"
                          required
                          // placeholder="متن رو اینجا وارد کنید و بعد save رو بزنید"
                          placeholder=" "
                          {...register("text", {
                            pattern:
                              /^((?!(کص|کون|کس|جنده|kir|kos|kon)).)*$/i,
                            message:
                              "لطفا از استفاده از اصطلاحات نامناسب خودداری کنید.",
                          })}
                        ></textarea>
                        <label class="before:content[' متن رو اینجا وارد کنید'] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          کامنت
                        </label>
                      </div>
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

// <Textarea
//   className="flex w-full h-[2rem] "
//
// />
