import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export default function Wall() {
  const inputRef = useRef(null);
  let apiURL = "http://127.0.0.1:8000/";
  const [wallValue, setWallValue] = useState("");
  const [formInput, setFormInput] = useState("");
  const wallText = {
    view: {
      transition: { type: "spring", duration: 4 },
      style: { fontFamily: "cursive" },
    },
  };

  /*  useEffect(() => {
          axios.get(apiURL + "/wall/get-api").then(
            (response) => {
              setWallValue(response.data.text);
            },
            [formInput],
          );
        });*/
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

  return (
    <div>
      <Toaster />
      <Navbar />
      <div className={"main_container_page_wall"}>
        <div className={"wall_container"}>
          <div className={"wall-explain"}>
            <p variants={wallText} animate={{ scale: [0, 1, 0.75, 1] }}>
              روی دیوار بنویس!!
            </p>
            <br />
            <p>
              {" "}
              &nbsp;&nbsp; اخرین نوشته روی دیوار نمایش داده میشه <br />
              ایده اصلی از مستند "نوشتن بر شهر" گرفته شده(کیوان کریمی)
              <br />
              <br />
            </p>
          </div>
          <div className={"wall"}>
            <p className={"wall-text"}>{wallValue}</p>
          </div>
          <div className={"send_box_container"}>
            <div className={"send_box"}>
              {/*<textarea ref={inputRef}  placeholder={'متن رو اینجا وارد کنید و بعد save رو بزنید'} onChange={(e) => {*/}
              {/*  setWallValue(e.target.value)*/}
              {/*}}/>*/}
              <textarea
                ref={inputRef}
                placeholder={"متن رو اینجا وارد کنید و بعد save رو بزنید"}
              />
              <button className={"save-button"} onClick={handel_click}>
                save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
