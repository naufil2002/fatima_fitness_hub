import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Prices from "./pages/Prices";
import Schedules from "./pages/Schedules";
import Acheivements from "./pages/Acheivements";
import Contact from "./pages/Contact";
// import CallToAction from "./components/CallToAction"
import Footer from "./pages/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppContext = React.createContext();
export { AppContext };

export default function App() {
  const sectionRefs = React.useRef([]);
  const homeRef = React.useRef();
  const [homeVisibility, setHomeVisibility] = React.useState(true);

  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light-theme");
  }
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light-theme"
  );
  function toggleTheme() {
    setTheme((prevTheme) => {
      if (prevTheme === "light-theme") {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-theme");
        return "dark-theme";
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light-theme");
        return "light-theme";
      }
    });
  }

  const windowWidth = window.innerWidth;
  const isBigWindow = windowWidth >= 1200 ? true : false;

  return (
    <AppContext.Provider
      value={{
        homeRef,
        homeVisibility,
        setHomeVisibility,
        theme,
        toggleTheme,
        sectionRefs,
        isBigWindow,
      }}
    >
      <div className={`${theme}`}>
        <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/prices" element={<Prices />}/>
          <Route path="/schedules" element={<Schedules />}/>
          <Route path="/acheivements" element={<Acheivements />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        </Router>
        <Footer />

        {/* <Classes /> */}
        {/* <CallToAction /> */}
        {/* 
        <Schedules />
        <Trainers />
        <Contact /> */}
      </div>
    </AppContext.Provider>
  );
}
