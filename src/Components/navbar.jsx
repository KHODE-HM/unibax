import "../App.css";
import { useContext, useState } from "react";
import { isMobileContext } from "../context";
import { Button } from "@material-tailwind/react";

export default function Navbar() {
  const Mobile = useContext(isMobileContext);
  return (
    <>
      <div className={"nav_bar"}>
        <div className={"nav_bar_right_items"}>
          <div className={"nav_bar_item"}>
            <a href={"/"}>Home</a>
          </div>
          <div className={"nav_bar_item"}>
            <a href={"News"}>news</a>
          </div>
          <div className={"nav_bar_item"}>
            <a href={"Wall2"}>Wall</a>
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
  );
}
