import "../App.css";
import { useContext, useState } from "react";
import { isMobileContext } from "../context";
import { Button } from "@material-tailwind/react";
import { BubblyLink } from "react-bubbly-transitions";

export default function Navbar() {
  function DarkMode() {
   let dark= document.body.classList.add("darkMode");
    // document.body.remove("darkMode")
  }
  const Mobile = useContext(isMobileContext);
  const MyBubblyLink = ({ to = "", text = "" }) => (
    <BubblyLink to={to} colorStart="#080808" colorEnd="#ffffff">
      {text}
    </BubblyLink>
  );
  return (
    <div className="mx-4 p-2">
      <nav className="animate-in" style={{ animationDelay: "800ms" }}>
        <header className="mx-4 p-3">
          {/* <Button size="sm" onClick={DarkMode()}>تاریک</Button> */}
          <h2>UniWall</h2>
        </header>
        <MyBubblyLink to={"/"} text="خانه" />
        <MyBubblyLink to={"/wall2"} text="بلاگ" />
        <MyBubblyLink to={"/News"} text="اساتید" />
      </nav>
    </div>
  );
}
