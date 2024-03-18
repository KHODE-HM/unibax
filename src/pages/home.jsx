import { Skeleton, Fild } from "../Components/skeleton";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import AlertCheck from "../Components/AlertCheck";
import Toastmessage from "../Components/Toastmessage";
import { Progress, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useRef, useState } from "react";
import { isMobileContext } from "../context";
import SignUp from "../Components/Form";
export default function Home() {
  //I used context for passing around window width
  const Mobile = useContext(isMobileContext);
  const [weekTypeObj, setWeekTypeObj] = useState();

  const passedBy = (weekTypeObj?.weekCount / 16) * 100;

  //my odd - even week calculator
  useEffect(() => {
    let starterPoint = new Date("2024-02-09T23:59:59.000Z").getTime();
    let todayDate = new Date().getTime();
    let diffDaysPerMSec = new Date(todayDate - starterPoint).getTime();
    setWeekTypeObj({
      isFard: Math.ceil(diffDaysPerMSec / (1000 * 60 * 60 * 24) / 7) % 2 === 1,
      weekCount: Math.ceil(diffDaysPerMSec / (1000 * 60 * 60 * 24) / 7),
    });
  }, []);

  // page on mobile mod
  if (Mobile) {
    return (
      <div>
        <>
          <Navbar />

          <AlertCheck
            list="list-disc"
            Title={"قابلیت های سایت ما "}
            Paragraph={"مشاهده هفته آموزشی  "}
            Paragraph2={"وبلاگ  دانشجویی"}
            Paragraph3={"نظر سنجی اساتید توسط دانشجو"}
          />
        </>

        <>
          <div className="rounded-md justify-center hover:animate-pulse">
            <Toastmessage
              titleTxt={
                <Typography className="text-xl  font-extrabold text-pretty mb-5">
                  سپری شده : %{passedBy.toString()}
                </Typography>
              }
              txt={
                <Progress
                  className="h-6"
                  label={<p>{passedBy}%</p>}
                  value={passedBy}
                  variant="filled"
                  size="lg"
                  dir="LTR"
                ></Progress>
              }
            />
          </div>
        </>

        <div className="rounded-md justify-center animate-bounce hover:animate-pulse ">
          <>
            <Toastmessage
              weekInfo={weekTypeObj?.weekCount}
              titleTxt={" این هفته"}
              txt={"  این هفته "}
              txt2={"    آموزشی است"}
              //titleTxt={"Semester Will Start next week"}
            />
            <Toastmessage
              weekInfo={weekTypeObj?.isFard ? "فرد" : "زوج"}
              titleTxt={"This Week"}
              txt={"این هفته آموزشی  "}
              txt2={"  میباشد  "}
              // titleTxt={"Good Luck"}
            />
          </>
        </div>

        <>
          <div className="items-center pt-5 ">
            <AlertCheck
              Title={"نظرات"}
              Paragraph=" &nbsp;نطرات و تجربه کاربری خودتون با ما به اشتراک بزار" 
             
              Paragraph2="تا یک محیط کاربری تمام کمال بسازیم"
            />
          </div>
          <div>
            <SignUp />
          </div>
          <Footer />
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
