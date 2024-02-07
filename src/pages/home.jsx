import { Skeleton } from "../Components/skeleton";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import AlertCheck from "../Components/AlertCheck";
import Toastmessage from "../Components/Toastmessage";
import HomeCarousel from "../Components/Carousel";
import { Progress, Typography, Button, Input } from "@material-tailwind/react";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { isMobileContext } from "../context";
import { createClient } from "@supabase/supabase-js";
import { SignUp } from "../Components/Form";
//supabase
export const supabase = createClient(
  "https://diyoxrrtujlpkdftwlhk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeW94cnJ0dWpscGtkZnR3bGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NzU1MDgsImV4cCI6MjAyMTE1MTUwOH0.zPGWMhTfUZI6_TCxCd_XNacVhLBFYXKcCZH2IqWhjPs"
);
export default function Home() {
  //I used context for passing around window width
  const Mobile = useContext(isMobileContext);
  const [weekTypeObj, setWeekTypeObj] = useState();

  const passedBy = (weekTypeObj?.weekCount / 16) * 100;
  const [Users, setUsers] = useState([]);
  // useEffect(() => {
  //   getUsers();
  //   console.log(Users);
  // }, []);
  // async function getUsers() {
  //   const { data } = await supabase.from("myUser").fetch();
  //   setUsers(data);
  //   console.log(data);
  //   return () => {};
  // }

  //my odd - even week calculator
  useEffect(() => {
    let starterPoint = new Date("2024-02-9T23:59:59.000Z").getTime();
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
        </>

        <>
          <div className="p-6 mt-3 mb-3">
            <Progress
              value={passedBy}
              label={"Compelated"}
              variant="filled"
              size="lg"
            ></Progress>
          </div>
        </>
        <>
          <div className="rounded-md justify-center gap-3 animate-pulse">
            <Toastmessage
              // weekInfo={weekTypeObj?.weekCount}
              // titleTxt={"این هفته"}
              // txt={"  این هفته "}
              // txt2={"است"}
              titleTxt={"Semester Will Start next week"}
            />

            <Toastmessage
              // weekInfo={weekTypeObj?.isFard ? "فرد" : "زوج"}
              // titleTxt={"This Week"}
              // txt={"  این هفته  هفته"}
              // txt2={"میباشد"}
              titleTxt={"Good Luck"}
            />
          </div>
        </>
        <>
          <div className="justify-center pt-6">
            <AlertCheck
              Title={"رویداد ها"}
              Paragraph={"همایش ها و رویداد های این هفته"}
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
