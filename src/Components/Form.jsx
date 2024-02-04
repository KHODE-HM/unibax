import {
  Card,
  Input,

  Button,
  Typography,
} from "@material-tailwind/react";
import { useState, useRef } from "react";
import { Textareas } from "./TextArea";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
export function SignUp() {
  const [nameComment, setNameComment] = useState("");
  const [emailComment, setEmailComment] = useState("");
  const textAreaComment = useRef(null);
  //APi
  let apiURL = "http://127.0.0.1:8000/";
  function submit_comment() {
    console.log(nameComment);
    console.log(emailComment);
    console.log(textAreaComment);
  }
  //   let now_date = new Date();
  //   console.log({
  //     date: `${now_date.getFullYear()}-${now_date.getMonth()}-${now_date.getDay()}`,
  //     name: nameComment,
  //     email: emailComment,
  //     idea: textAreaComment.current.value,
  //   });
  //   axios
  //     .post(apiURL + "/idea/add-idea-api/", {
  //       date: `${now_date.getFullYear()}-${now_date.getMonth()}-${now_date.getDay()}`,
  //       name: nameComment,
  //       email: emailComment,
  //       idea: textAreaComment.current.value,
  //     })
  //     .then((response) => {
  //       if (response.data.detail === "ok") {
  //         toast.success("ممنون از نظرت");
  //       } else {
  //         toast.error("The request was not accepted");
  //       }
  //     });
  // }

  function handelChangeEmailComment(e) {
    setEmailComment(e.target.value);
  }

  function handelChangeNameComment(e) {
    setNameComment(e.target.value);
  }
  return (
    <>
      <Toaster />
      <Card color="transparent" className="items-center shadow-xl" shadow={false}>
        <form className="mt-8 mb-2 p-6 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              نام:
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                handelChangeNameComment(e);
              }}
              type={"text"}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              ایمیل:
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => {
                handelChangeEmailComment(e);
              }}
              type={"text"}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              نظرت برای سایت:
            </Typography>
            <Textareas />
          </div>

          <Button className="mt-6" fullWidth onClick={submit_comment()}>
            ارسال
          </Button>
        </form>
      </Card>
    </>
  );
}
{
  /* <div>
  <div className="mt-10 bg-white">
    <div className="w-96 p-6 text-right text-xl mb-4 pt-4"> </div>
    <Input about="" className="w-72 bg-gray-500 rounded-lg" />
    <div className="text-right text-xl mb-4 pt-4"> </div>
    <Input className="w-72 bg-gray-500 rounded-lg" />
    <div className="text-right text-xl mb-4 pt-4"></div>

    <Button className={"justify-end "} onClick={submit_comment}></Button>
  </div>
  <div>
    <img
      src={ideaMan}
      alt={"ideaMan"}
      className={"container w-full mt-6 divide-x-reverse"}
    />
  </div>
  <Footer />
</div>; */
}
