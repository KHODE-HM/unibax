import Card from "react-bootstrap/Card";
import { CardBody, CardHeader, CardText, CardTitle } from "react-bootstrap";
import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Wall2() {
  const inputRef = useRef(null);
  let apiURL = "http://127.0.0.1:8000/";
  const [wallValue, setWallValue] = useState("");
  const [formInput, setFormInput] = useState("");

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

  function Cards({ wallValue, Title, SubTitle, color }) {
    let today = new Date().toDateString();
    let todayTime = today.toString();

    return (
      <div>
        <Card className={"mb-2"} bg={color}>
          <CardHeader>{Title}</CardHeader>
          <CardBody>
            <CardTitle tag="h5">{SubTitle}</CardTitle>
            <small>{todayTime}</small>
            <CardText>{wallValue}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className={"main_container_page_wall"}>
        <div className={"card"}>
          <Cards
            color={"info"}
            wallValue={
              "این اولین تکست صفحه وال است این صفحه برای ارتباط و یادگاری های شما ساخته شده است"
            }
            SubTitle={"اولین یادگاری من"}
            Title={"first Wall Text"}
          />
          <Cards
            color={"secondary"}
            Title={"تو هم یادگاریتو بنویس"}
            SubTitle={
              <textarea
                ref={inputRef}
                className={"textarea "}
                placeholder={"متن رو اینجا وارد کنید و بعد save رو بزنید"}
              />
            }
            wallValue={
              <motion.button
                className={"save-button"}
                onClick={handel_click}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                save
              </motion.button>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
