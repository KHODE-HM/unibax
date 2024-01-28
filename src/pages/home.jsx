import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import ProgressBar from "@material-tailwind/react/components/Progress";
// import "../css/home.css";
import ideaMan from "../images/idea_man.png";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { isMobileContext } from "../context";
import CountUp from "react-countup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import AlertCheck from "../Components/AlertCheck";
import Toastmessage from "../Components/Toastmessage";
import Carouselll from "../Components/Carousel";
import { Button } from "@material-tailwind/react";
import Loading from "../Components/loading";
import { Typography } from "@material-tailwind/react";
export default function Home() {
  let apiURL = "http://127.0.0.1:8000/";
  const Mobile = useContext(isMobileContext);
  const [weekTypeObj, setWeekTypeObj] = useState();
  const [nameComment, setNameComment] = useState("");
  const [emailComment, setEmailComment] = useState("");
  const textAreaComment = useRef(null);

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

  function Loading() {
    return (
      <div className="max-w-full animate-pulse">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-3 w-56 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>
    );
  }

  return (
    <>
      {" "}
      <Navbar />
      <AlertCheck />
      <Carouselll />
    </>
  );
  /*
  // page on mobile mod
  if (Mobile) {
    return (
      <div>
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
          dismiss={true}
        />
        <div className="week">
          <div className="progressBarContainer">
            <div className={"progressBarBackDrop"}>
              <ProgressBar
                animated
                now={(weekTypeObj?.weekCount / 16) * 100}
              ></ProgressBar>
            </div>
            <div className="progressBarPercentage">
              <CountUp end={weekTypeObj?.weekCount} />
              /16
            </div>
          </div>
          <div className="ToastContainer" style={{ color: "white" }}>
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
        <div style={{ textAlign: "center" }} className="CarouselContainer">
          <AlertCheck
            dismiss={false}
            Title={"رویداد ها"}
            Paragraph={"همایش ها و رویداد های این هفته"}
            Style={"secondary"}
          />
          <Carouselll props={"auto"} />
        </div>
        <div className={"send_idea"}>
          <div className={"send_idea_box"}>
            <div className={"input_label"}> نام:</div>
            <input
              onChange={(e) => {
                handelChangeNameComment(e);
              }}
              type={"text"}
            />
            <div className={"input_label"}> ایمیل:</div>
            <input
              onChange={(e) => {
                handelChangeEmailComment(e);
              }}
              type={"text"}
            />
            <div className={"input_label"}> نظرت برای سایت:</div>
            <textarea></textarea>
            <button
              onClick={submit_comment}
              className={"submit_button"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ارسال
            </button>
            <div className={"image_container"}>
              <img src={ideaMan} alt={"ideaMan"} className={"idea_image_man"} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
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
        <div className="week">
          <div className="progressBarContainer">
            <div className="progressBarBackDrop">
              <ProgressBar
                animated
                now={(weekTypeObj?.weekCount / 16) * 100}
              ></ProgressBar>
            </div>
            <div className="progressBarPercentage">
              <CountUp end={weekTypeObj?.weekCount} />
              /16
            </div>
          </div>
        </div>
        <div
          className={
            "p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4"
          }
        >
          <Toastmessage
            weekInfo={weekTypeObj?.weekCount}
            titleTxt={"این هفته"}
            txt={" این هفته "}
            txt2={"است"}
          />
          <Toastmessage
            weekInfo={weekTypeObj?.isFard ? "فرد" : "زوج"}
            titleTxt={"This Week"}
            txt={" این هفته  هفته"}
            txt2={"میباشد"}
          />
        </div>
        <div>
          <div className="CarouselContainer">
            <AlertCheck
              dismiss={false}
              Title={"رویداد ها"}
              Paragraph={"همایش ها و رویداد های این هفته"}
              Style={"white"}
            />
            <Carouselll props={"100%"} />
          </div>
        </div>
        <div className={"send_box_container_pc"}>
          <div className={"send_idea_pc"}>
            <div className={"send_box_pc"}>
              <div className={"send_box_pc_right"}>
                <div className={"send_box_inputs_pc"}>
                  <div className={"input_pc_container"}>
                    <div style={{ color: "#FFF" }}>اسم:</div>
                    <input
                      onChange={(e) => {
                        handelChangeNameComment(e);
                      }}
                      className={"input_pc"}
                    />
                  </div>
                  <div className={"input_pc_container"}>
                    <div style={{ color: "#FFF" }}>ایمیل:</div>
                    <input
                      onChange={(e) => {
                        handelChangeEmailComment(e);
                      }}
                      className={"input_pc"}
                    />
                  </div>
                </div>
                <div className={"send_box_textarea_pc"}>
                  <div style={{ color: "#FFF" }}>نظرت برای سایت:</div>
                  <textarea
                    ref={textAreaComment}
                    className={"text_area_comment"}
                  ></textarea>
                </div>
                <button
                  onClick={submit_comment}
                  className={"submit_button"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ارسال
                </button>
              </div>
              <div className={"send_box_pc_left"}>
                <img src={ideaMan} alt={"ideaMan"} className={"image_pc"} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  */
}
