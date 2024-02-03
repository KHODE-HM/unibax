import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

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

  function Cards({ wallValue, Title, SubTitle, color }) {
    let today = new Date().toString();
    return (
      <div>
        <Card className={"bg-blue-gray-900 mb-5 rounded-lg text-center"}>
          <Typography>{Title}</Typography>
          <div>
            <Typography tag="h5">{SubTitle}</Typography>
            <small>{today}</small>
            <p>{wallValue}</p>
          </div>
        </Card>
      </div>
    );
  }

  function BlogCard({ Title, SubTitle, wallValue }) {
    return (
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src="https://picsum.photos/400/400?grayscale"
            alt="ui/ux review check"
          />
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
        <div className={"p-6 mt-6 "}>
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
          <BlogCard
            wallValue={
              "این اولین تکست صفحه وال است این صفحه برای ارتباط و یادگاری های شما ساخته شده است"
            }
            SubTitle={"اولین یادگاری من"}
            Title={"first Wall Text"}
          />
          <BlogCard
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
        <Footer />
      </div>
    </>
  );
}
