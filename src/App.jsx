import React, { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [navBarActive, setNavBarActive] = useState(false);
  

  return (
    <>
      <div className={` ${navBarActive ? "toggle-body" : "toggle-bodyClose"}`}>
        <BrowserRouter>
          <Navbar setNavBarActive={setNavBarActive} />
          <div className="body-container">
            <Rutas />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
