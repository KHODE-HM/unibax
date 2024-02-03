import { Skeleton } from "../Components/skeleton";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import AlertCheck from "../Components/AlertCheck";
import Toastmessage from "../Components/Toastmessage";
import HomeCarousel from "../Components/Carousel";
import { Textareas } from "../Components/TextArea";
import { Progress, Typography, Button, Input } from "@material-tailwind/react";
import ideaMan from "../images/idea_man.png";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { isMobileContext } from "../context";
import CountUp from "react-countup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export default function Home() {
  //APi
  let apiURL = "http://127.0.0.1:8000/";
  //I used context for passing around window width
  const Mobile = useContext(isMobileContext);
  const [weekTypeObj, setWeekTypeObj] = useState();
  const [nameComment, setNameComment] = useState("");
  const [emailComment, setEmailComment] = useState("");
  const textAreaComment = useRef(null);
  const passedBy = (weekTypeObj?.weekCount / 16) * 100;
  //my odd - even week calculator
  useEffect(() => {
    let starterPoint = new Date("2023-09-22T23:59:59.000Z").getTime();
    let todayDate = new Date().getTime();
    let diffDaysPerMSec = new Date(todayDate - starterPoint).getTime();
    setWeekTypeObj({
      isFard: Math.ceil(diffDaysPerMSec / (1000 * 60 * 60 * 24) / 7) % 2 === 1,
      weekCount: Math.ceil(diffDaysPerMSec / (1000 * 60 * 60 * 24) / 7),
    });
  }, []);

  function submit_comment() {
    let now_date = new Date();
    console.log({
      date: `${now_date.getFullYear()}-${now_date.getMonth()}-${now_date.getDay()}`,
      name: nameComment,
      email: emailComment,
      idea: textAreaComment.current.value,
    });
    axios
      .post(apiURL + "/idea/add-idea-api/", {
        date: `${now_date.getFullYear()}-${now_date.getMonth()}-${now_date.getDay()}`,
        name: nameComment,
        email: emailComment,
        idea: textAreaComment.current.value,
      })
      .then((response) => {
        if (response.data.detail === "ok") {
          toast.success("ممنون از نظرت");
        } else {
          toast.error("The request was not accepted");
        }
      });
  }

  function handelChangeEmailComment(e) {
    setEmailComment(e.target.value);
  }

  function handelChangeNameComment(e) {
    setNameComment(e.target.value);
  }
  // page on mobile mod
  if (Mobile) {
    return (
      <>
        <Toaster />
        <Navbar />
        <AlertCheck
          Title={"سایت در حال طراحی و توسعه است"}
          Paragraph={
            "ایده اصلی سایت این بود که بچه ها لیست واحد هایی که برداشتن رو به اشتراک بزارن تا همه بتونن ببینن که ، کی ، چی برداشته و بتونن بادوستاشون درس بردارن و دور هم دوران شادی داشته باشن"
          }
          Paragraph2={
            "ولی بنا به دلایلی (میدونین یکم پیچیدس ما هم انگیزمون کمه)"
          }
          Paragraph3={
            "این ایده هنوز عملی نشده یک قسمت اخر این صفحه اضافه شده تا شما ایده\n" +
            " هاتونو به ما بگید"
          }
        />
        <div>
          <div>
            <div className="pt-5 ">
              <Progress
                value={passedBy}
                label={"Compelated"}
                variant="filled"
                size="lg"
              ></Progress>
            </div>
            {/* <div>
              <CountUp end={weekTypeObj?.weekCount} />
              /16
            </div> */}
          </div>
          <div className="rounded-md justify-center gap-3 animate-pulse">
            <Toastmessage
              weekInfo={weekTypeObj?.weekCount}
              titleTxt={"این هفته"}
              txt={"  این هفته "}
              txt2={"است"}
            />

            <Toastmessage
              weekInfo={weekTypeObj?.isFard ? "فرد" : "زوج"}
              titleTxt={"This Week"}
              txt={"  این هفته  هفته"}
              txt2={"میباشد"}
            />
          </div>
        </div>
        <div>
          <AlertCheck
            Title={"رویداد ها"}
            Paragraph={"همایش ها و رویداد های این هفته"}
          />
          {/* <HomeCarousel /> */}
        </div>
        <div>
          <div className="mt-10 rounded-xl bg-blue-gray-50 shadow-white p-6">
            <div className="text-right text-xl mb-4 pt-4"> نام:</div>
            <Input
              onChange={(e) => {
                handelChangeNameComment(e);
              }}
              type={"text"}
            />
            <div className="text-right text-xl mb-4 pt-4"> ایمیل:</div>
            <Input
              onChange={(e) => {
                handelChangeEmailComment(e);
              }}
              type={"text"}
            />
            <div className="text-right text-xl mb-4 pt-4"> نظرت برای سایت:</div>
            <Textareas />
            <Button className={"justify-end "} onClick={submit_comment}>
              ارسال
            </Button>
          </div>
          <div>
            <img
              src={ideaMan}
              alt={"ideaMan"}
              className={"container w-full mt-6 divide-x-reverse"}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Skeleton visibility="hidden" />
        <div className="mt-10 justify-center grid-rows-3">
          <Skeleton show="hidden" />
          <Skeleton show="hidden" />
        </div>
      </>
    );
  }
}
