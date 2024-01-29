import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Card, Typography } from "@material-tailwind/react";
import AlertCheck from "../Components/AlertCheck";
import toast from "react-hot-toast";
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
        <Card className={"bg-cyan-900 text-center"}>
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

  return (
    <div>
      <Navbar />
      <AlertCheck
        Title={"این صفحه در حال تکمیل میباشد "}
        Paragraph="به صفحه وال خوش آمدید"
        Paragraph2="وال یک بلاگ اختصاصی برای دانشجو ها است 
              شما میتونید تکست ها و روزمرگی هاتون توی دانشگاه اینجا برای همه
              اشتراک بزارید "
      />
      <div className={""}>
        <Cards
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
            <textarea
              ref={inputRef}
              className={"textarea "}
              placeholder={"متن رو اینجا وارد کنید و بعد save رو بزنید"}
            />
          }
          wallValue={
            <button className={"save-button"} onClick={handel_click}>
              save
            </button>
          }
        />
      </div>
      <Footer />
    </div>
  );
}
