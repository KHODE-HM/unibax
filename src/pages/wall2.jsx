import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import pic1 from "../images/2.jpg";
import pic2 from "../images/3.avif";
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
import { createClient } from "@supabase/supabase-js";
export default function Wall2() {
  const inputRef = useRef(null);
  let apiURL = "http://127.0.0.1:8000/";
  const [wallValue, setWallValue] = useState("");
  const [formInput, setFormInput] = useState("");
  const [show, setShow] = useState(true);

  /*  useEffect(() => {
        axios.get(apiURL + "/wall/get-api").then(
          (response) => {
            setWallValue(response.data.text);
          },
          [formInput],
        );
      });
  const supabase = createClient(
    "https://diyoxrrtujlpkdftwlhk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeW94cnJ0dWpscGtkZnR3bGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NzU1MDgsImV4cCI6MjAyMTE1MTUwOH0.zPGWMhTfUZI6_TCxCd_XNacVhLBFYXKcCZH2IqWhjPs"
  );
  useEffect(() => {
    getUsers();
  }, []);
  async function getUsers() {
    const { data } = await supabase.from("Users").select();
    console.log("++++++++++++++++++++++++++++++++++");
    console.log(d);
    console.log("++++++++++++++++++++++++++++++++++");
  }*/
  function handel_click() {
    setFormInput(inputRef.current.value);
    axios
      .post(apiURL + "/wall/add-api/", { text: inputRef.current.value })
      .then((response) => {
        if (response.data.detail === "ok") {
          toast.success("با موفقیت روی دیوار نوشته شد");
        } else {
          toast.error("The request was not accepted");
        }
      });
  }

  function BlogCard({ Title, SubTitle, wallValue, img }) {
    return (
      <Card className=" mt-5 max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-md"
        >
          <img src={img} alt="ui/ux review check" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {Title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            &apos;{SubTitle}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Typography className="font-normal">{wallValue}</Typography>
        </CardFooter>
      </Card>
    );
  }
  return (
    <>
      <div>
        <Navbar />
        <AlertCheck
          Title={"این صفحه در حال تکمیل میباشد "}
          Paragraph="به صفحه وال خوش آمدید"
          Paragraph2="وال یک بلاگ اختصاصی برای دانشجو ها است 
              شما میتونید تکست ها و روزمرگی هاتون توی دانشگاه اینجا برای همه
              اشتراک بزارید "
        />
        <div className={"justify-between "}>
          {/* <Cards
          color={"secondary"}
          wallValue={
            "این اولین تکست صفحه وال است این صفحه برای ارتباط و یادگاری های شما ساخته شده است"
          }
          SubTitle={"اولین یادگاری من"}
          Title={"first Wall Text"}
        />
        <Cards
          color={"secondary"}
          Title={"تو هم یادگاریتو بنویس"}
          SubTitle={
            <Text
              size="sm"
              ref={inputRef}
              placeholder={"متن رو اینجا وارد کنید و بعد save رو بزنید"}
            ></Text>
          }
          wallValue={<Button onClick={handel_click}>save</Button>}
        /> */}
          <div className="mt-6 justify-center p-10">
            <BlogCard
              wallValue={
                "این اولین تکست صفحه وال است این صفحه برای ارتباط و یادگاری های شما ساخته شده است"
              }
              SubTitle={"اولین یادگاری من"}
              Title={"first Wall Text"}
              img={pic1}
            />
          </div>
          <div className="mt-6 p-8">
            <BlogCard
              img={pic2}
              Title={"تو هم یادگاریتو بنویس"}
              SubTitle={
                <Text
                  size="sm"
                  ref={inputRef}
                  placeholder={"متن رو اینجا وارد کنید و بعد save رو بزنید"}
                ></Text>
              }
              wallValue={<Button onClick={handel_click}>save</Button>}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
