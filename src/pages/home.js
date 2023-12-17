import Navbar from "./navbar";
import "../css/home.css";
import ideaMan from "../images/idea_man.png";
import Footer from "./footer";
import { useContext, useEffect, useRef, useState } from "react";
import { isMobileContext } from "../context";
import CountUp from "react-countup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Alert from "react-bootstrap/Alert";
import {
    AlertHeading,
    ProgressBar,
    ToastBody,
    ToastHeader,
} from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ScrollCarousel from "scroll-carousel-react";
import pic3 from "../images/photoThree.jpg";
import pic4 from "../images/photoFour.jpg";
import pic5 from "../images/photoFive.jpg";
import pic6 from "../images/photoSix.jpg";

export default function Home() {
    let apiURL = "http://127.0.0.1:8000/";
    const Mobile = useContext(isMobileContext);
    const [weekTypeObj, setWeekTypeObj] = useState();
    const [nameComment, setNameComment] = useState("");
    const [emailComment, setEmailComment] = useState("");
    const textAreaComment = useRef(null);
    const [show, setShow] = useState(true);
    const img = [
        {
            id: 1,
            src: pic6,
            size: "500px",
        },
        {
            id: 2,
            src: pic4,
            size: "500px",
        },
        {
            id: 3,
            src: pic5,
            size: "500px",
        },
        {
            id: 4,
            src: pic3,
            size: "500px",
        },
        {
            id: 5,
            src: pic6,
            size: "500px",
        },
    ];
    const img2 = [
        {
            id: 3,
            src: pic5,
            size: "300px",
        },
        {
            id: 4,
            src: pic3,
            size: "300px",
        },
    ];
    useEffect(() => {
        let starterPoint = new Date("2023-09-20T16:00:00.000Z").getTime();
        let todayDate = new Date().getTime();
        let diffDaysPerMSec = new Date(todayDate - starterPoint).getTime();
        setWeekTypeObj({
            isFard: Math.ceil(diffDaysPerMSec / (1000 * 60 * 60 * 24) / 7) % 2 === 1,
            weekCount: Math.ceil(diffDaysPerMSec / (1000 * 60 * 60 * 24) / 7),
        });
    }, []);

    function AlertCheck() {
        if (show) {
            return (
                <Alert variant={"info"} onClose={() => setShow(true)} dismissible>
                    <AlertHeading>سایت در حال طراحی و توسعه است</AlertHeading>
                    <div>
                        <p>
                            {" "}
                            ایده اصلی سایت این بود که بچه ها لیست واحد هایی که برداشتن رو به
                            اشتراک بزارن تا همه بتونن ببینن که ، کی ، چی برداشته و بتونن با
                            دوستاشون درس بردارن و دور هم دوران شادی داشته باشن
                        </p>
                        <p>
                            <br />
                            ولی بنا به دلایلی (میدونین یکم پیچیدس ما هم انگیزمون کمه)
                            <br />
                            این ایده هنوز عملی نشده یک قسمت اخر این صفحه اضافه شده تا شما ایده
                            هاتونو به ما بگید
                        </p>
                    </div>
                </Alert>
            );
        }
    }

    function Toastmessage({ weekInfo = null, txt, txt2 }) {
        return (
            <div style={{ minHeight: "240px", textAlign: "center" }}>
                <Toast className={"d-inline-block m-lg-5 bg-dark"}>
                    <ToastHeader
                        closeButton={false}
                        className={"bg-dark"}
                        style={{ color: "white" }}
                    >
                        <big>This Week</big>{" "}
                    </ToastHeader>
                    <ToastBody style={{ color: "white" }}>
                        {txt} {weekInfo} {txt2}
                    </ToastBody>
                </Toast>
            </div>
        );
    }

    function Carousel({ Title, text, Title2, prop }) {
        return (
            <div className={"toast-pc"}>
                <Alert className={"bg-gradient"}>
                    <h2>{Title2}</h2>
                    <AlertHeading>{Title}</AlertHeading>
                    <p>{text}</p>
                </Alert>
                <ScrollCarousel
                    autoplay
                    smartSpeed
                    direction="rtl"
                    speed={9}
                    margin={10}
                    className={"toast-pc"}
                    onMove={(progress) => {
                        if (progress > 50 && progress < 60)
                            console.log("Scrolling", progress);
                    }}
                >
                    {prop.map((el) => (
                        <div className={"toast-pc"}>
                            <img
                                key={el.id}
                                src={el.src}
                                alt={"event of week"}
                                style={{ height: el.size, width: el.size }}
                            />
                        </div>
                    ))}
                </ScrollCarousel>
                <hr />
            </div>
        );
    }

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
            <div>
                <Toaster />
                <Navbar />
                <AlertCheck />
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
                    <div style={{ color: "white" }}>
                        <Toastmessage
                            weekInfo={weekTypeObj?.weekCount}
                            txt={"  این هفته "}
                            txt2={"است"}
                        />
                    </div>
                    <div>
                        <Toastmessage
                            weekInfo={weekTypeObj?.isFard ? "فرد" : "زوج"}
                            txt={"  این هفته  هفته"}
                            txt2={"میباشد"}
                        />
                    </div>
                </div>
                <div>
                    <Carousel
                        Title={"در این هفته "}
                        Title2={" رویداد ها"}
                        text={"همایش و رویداد های دانشجویی این هفته"}
                        prop={img2}
                    />
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
                        <motion.button
                            onClick={submit_comment}
                            className={"submit_button"}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ارسال
                        </motion.button>
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
                <AlertCheck />
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
                <div className={"toast-pc"}>
                    <Toastmessage
                        weekInfo={weekTypeObj?.weekCount}
                        txt={" این هفته "}
                        txt2={"است"}
                    />
                    <Toastmessage
                        weekInfo={weekTypeObj?.isFard ? "فرد" : "زوج"}
                        txt={" این هفته  هفته"}
                        txt2={"میباشد"}
                    />
                </div>
                <div>
                    <div>
                        <Carousel
                            Title={"در این هفته "}
                            Title2={" رویداد ها"}
                            text={"همایش و رویداد های دانشجویی این هفته"}
                            prop={img}
                        />
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
                                <motion.button
                                    onClick={submit_comment}
                                    className={"submit_button"}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    ارسال
                                </motion.button>
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
}
