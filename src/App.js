import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Wall from "./pages/wall";
import News from "./pages/News";
import Wall2 from "./pages/wall2";
import { isMobileContext } from "./context";
import { StrictMode, Suspense, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
//supabase
// const url = process.env.React_App_Url;
// const anon = process.env.Reacr_App_Anon;
// export const supabase = createClient(url, anon);
export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [Users, setUsers] = useState([]);

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
    <Suspense fallback={"<Loading/>"}>
      <BrowserRouter>
        <isMobileContext.Provider value={isMobile}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            {/* <Route path="/wall" element={<Wall />} />*/}
            <Route path="/news" element={<News />} />
            <Route path="/wall2" element={<Wall2 />} />
          </Routes>
        </isMobileContext.Provider>
      </BrowserRouter>
    </Suspense>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
