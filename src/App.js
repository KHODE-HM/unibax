import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import News from "./pages/News";
import Wall2 from "./pages/wall2";
import { isMobileContext } from "./context";

import { StrictMode, Suspense, useEffect, useState } from "react";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  return (
    <>
      <BrowserRouter>
        <BubblyContainer />
        <isMobileContext.Provider value={isMobile}>
          <Routes>
            <Route
              path=""
              element={
                <>
                  <Outlet />
                  <BubblyLink to="home" element="home"></BubblyLink>
                  <BubblyLink to="News" element="News"></BubblyLink>
                  <BubblyLink to="wall2" element="wall2"></BubblyLink>
                </>
              }
            />
            <Route path="/" index element={<Home />} />
            <Route path="News" element={<News />} />
            <Route path="wall2" element={<Wall2 />} />
            <Route
              path="*"
              element={
                <h1 className="text-pretty text-center text-2xl">Not Found </h1>
              }
            />
          </Routes>
        </isMobileContext.Provider>
      </BrowserRouter>
    </>
  );
}
