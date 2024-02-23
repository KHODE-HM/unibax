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
    <div className="mx-4 p-5 ">
      <nav className="animate-in" style={{ animationDelay: "800ms" }}>
        <header className="mx-4 p-5">
          <h2>
            <i className="block font-bold text-wrap">UniWall</i>
          </h2>
        </header>
        <MyBubblyLink to={"/"} text="Home" />
        <MyBubblyLink to={"/wall2"} text="Wall" />
        <MyBubblyLink to={"/News"} text="News" />
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
