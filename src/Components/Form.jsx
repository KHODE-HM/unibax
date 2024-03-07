import {
  Card,
  Input,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@material-tailwind/react";
import { toast, Toaster } from "react-hot-toast";
import homesvg from "../images/dxf91zhqd2z6b0bwg85ktm5s4.png";
import supabase from "../services/supaBase";
export default function SignUp() {
  const [userComment, setUserComment] = useState("");
  const [username, setUsername] = useState("");
  const [userEmailFild, setUserEmailFild] = useState("");
  const { submitedData, setSubmitedData } = useState({});
  let rendercount = 0;
  const email_pattern = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  ,"");
  const userNamePattern =new RegExp()
  const user_form_submit_time = new Date();
  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: [
      { names: "..", email: "..", comment: "...", created_at: "" },
    ],
  });
  function handle_usernames(e) {
    setUsername(e.target.value);
    console.log(e.target.value);
  }
  function handleChangeEmailComment(e) {
    let value = e.target.value;
    if (email_pattern.test(value)) {
      setUserEmailFild(value);
    }
    setUserEmailFild("");
    console.log(e.target.value);
  }

  function handleChangeComment(e) {
    // setUserComment(e.target.value);
    console.log(e.target.value);
  }
  const onFormSubmit = async (data) => {
    try {
      console.log(
        submitedData,
        username,
        userEmailFild,
        userComment,
        user_form_submit_time
      );
      toast.success("متشکرم !!");
    } catch {
      toast.error("لطفا صبر کنید..");
    }

    // const { data, err } = await supabase.from("uniwall-users").insert({
    //   Email: userEmailFild,
    //   text: userComment,
    //   created_at: user_form_submit_time,
    // });
    // console.log(data);
    // if (data) {
    //   toast.success("ممنون از نظرت");
    // } else {
    //   toast.error("The request was not accepted");
    // }
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ names: "" });
      reset({ comment: "" });
      reset({ created_at: "" });
    }
  }, [submitedData, formState, reset]);
  rendercount++;
  console.log(rendercount);
  return (
    <>
      <Toaster />
      <Card
        color="transparent"
        className="items-center shadow-xl"
        shadow={false}
      >
        <CardHeader>
          <img
            src={homesvg}
            alt=""
            className="w-[300px] h-[300px] flex-shrink rounded-full p-5"
          />
        </CardHeader>
        <form
          className="mt-8 mb-2 p-6 w-80 max-w-screen-lg sm:w-96 "
          onSubmit={handleSubmit(onFormSubmit)}
        >
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
              {...register("name")}
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
              value={userEmailFild}
              onChange={(e) => {
                handleChangeEmailComment(e);
              }}
              {...register("email")}
              type={"text"}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              نظرت برای سایت:
            </Typography>
            <Textarea {...register("comment")} />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            ارسال
          </Button>
        </form>
      </Card>
    </>
  );
}
