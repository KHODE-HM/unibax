import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState, useRef } from "react";
import { Textarea } from "@material-tailwind/react";
import { toast, Toaster } from "react-hot-toast";
import supabase from "../services/supaBase";
export default function SignUp() {
  const [userComment, setUserComment] = useState([]);
  const [username, setUsername] = useState([]);
  const [userEmailFild, setUserEmailFild] = useState([]);
  const user_form_submit_time = new Date().getTime();
  function handel_usernames() {
    setUsername(e.target.value);
  }
  function handelChangeEmailComment(e) {
    setUserEmailFild(e.target.value);
  }

  function handelChangeComment(e) {
    setUserComment(e.target.value);
  }
  async function postUserInfo() {
    const { data, err } = await supabase.from("uniwall-users").insert({
      Email: userEmailFild,
      text: userComment,
      created_at: user_form_submit_time,
    });
    setUserComment("");
    setUserEmailFild("");
    setUsername("");
    console.log(data);
    if (data) {
      toast.success("ممنون از نظرت");
    } else {
      toast.error("The request was not accepted");
    }
  }
  return (
    <>
      <Toaster />
      <Card
        color="transparent"
        className="items-center shadow-xl"
        shadow={false}
      >
        <form className="mt-8 mb-2 p-6 w-80 max-w-screen-lg sm:w-96 ">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              نام:
            </Typography>
            <Input
              size="lg"
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
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              onChange={(e) => {
                handelChangeEmailComment(e);
              }}
              type={"text"}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              نظرت برای سایت:
            </Typography>
            <Textarea />
          </div>

          <Button className="mt-6" fullWidth onClick={postUserInfo}>
            ارسال
          </Button>
        </form>
      </Card>
    </>
  );
}
