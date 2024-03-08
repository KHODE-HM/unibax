import "../App.css";
import { useContext, useState } from "react";
import { isMobileContext } from "../context";
import { Button } from "@material-tailwind/react";
import { BubblyLink } from "react-bubbly-transitions";

export default function Navbar() {
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
          <h2>
            <i className="block text-wrap fo">UniWall</i>
          </h2>
        </header>
        <MyBubblyLink to={"/"} text="خانه" />
        <MyBubblyLink to={"/wall2"} text="بلاگ" />
        <MyBubblyLink to={"/News"} text="اساتید" />
      </nav>
    </div>
  );
  /*return (
    <>
      <div className={"nav_bar"}>
        <div className={"nav_bar_right_items"}>
          <div className={"nav_bar_item"}>
            
          </div>
          <div className={"nav_bar_item"}>
            
          </div>
          <div className={"nav_bar_item"}>
          
          </div>
        </div>
        <div className={"nav_bar_left"}>
          {!Mobile && (
            <div
              onClick={() => {
                console.log(Mobile);
              }}
              className={"nav_bar_left_items"}
            >
              Uniwall
            </div>
          )}
          {Mobile && (
            <div
              style={{
                fontFamily: "cursive",
                fontSize: "1.75rem",
                color: "white",
              }}
            >
              UniWall
            </div>
          )}
        </div>
      </div>
    </>
  );*/
}
