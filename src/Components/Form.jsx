import {
  Card,
  Input,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "@material-tailwind/react";
import { toast, Toaster } from "react-hot-toast";
import supabase from "../services/supaBase";
import working from "../assets/images/working.mp4";
export default function SignUp() {
  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({});
  const onFormSubmit = async (data) => {
    try {
      data.created_at = new Date();
      const { data: incertedData, error } = await supabase
        .from("uniwall-users")
        .insert({ data });
      // console.log(data);
      toast.success("ممنون از نظرت");
      if (error) {
        console.log(error.message, error.hint);
      }
      reset();
    } catch {
      toast.error("لطفا صبر کنید..");
      console.log("error");
    }
  };

  return (
    <>
      <Toaster />
      <Card
        color="transparent"
        className="items-center shadow-xl"
        shadow={false}
      >
        <CardHeader className="h-[450px] mt-3">
          <video autoPlay muted>
            {" "}
            <source src={working} />
            your browser dosnt supoort video
          </video>
        </CardHeader>
        <form
          className="mt-8 mb-2 p-6 w-80 max-w-screen-lg sm:w-96 "
          onSubmit={onFormSubmit}
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
              {...register("name", { pattern: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/ })}
              type="text"
              placeholder="Name"
              required
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
              {...register("email", {
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
              type="email"
              required
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
