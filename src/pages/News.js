import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import "../css/news.css";
import { CardImg, CardImgOverlay, CardText, CardTitle } from "react-bootstrap";

export default function News() {
  const Text = "UniBax  ....".split("");

  function Cards({ prop }) {
    let today = new Date().toDateString();
    return (
      <div>
        <Card className={"card"}>
          {}
          <CardImg
            alt="Card image cap"
            src={prop}
            style={{
              height: "270",
              maxWidth: "700px",
            }}
          />
          <CardImgOverlay>
            <CardTitle>یکم زیبایی ببینیم ....</CardTitle>
            <CardText>
              <small className="text-muted">{today}</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <Cards prop={"https://picsum.photos/900/900?grayscale"} />
        <Cards prop={"https://picsum.photos/900/950?grayscale"} />

        {Text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: i / 10,
              repeat: Infinity,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <Footer />
    </>
  );
}
