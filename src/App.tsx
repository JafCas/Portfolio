import React, { useState, useContext } from "react";
// import { NavLink } from "react-router-dom";
import "./App.css";
// import Layout from './components/layout';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPortfolio from "./pages/MyPortfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

// import { ThemeContext } from "./context/themeContext";

function App() {
  // const currentTheme = useContext(ThemeContext);
  // const [themeToggle, setThemeToggle] = useState(true);
  return (
    <Router>
      <div style={{ backgroundColor: "grey" }}>
        <div className="App">
          <NavBar />
        </div>
        {/* <div style={{ display: "flex", justifyContent: "center"}}>{themeToggle ? "Hola" : "Adios"}</div> */}
        <div style={{ display: "flex", justifyContent: "center"}}>
          <Routes>
            {/* {themeToggle ? (<div></div>) : (<div></div>)} */}
            {/* <div> */}
            <Route path="/" element={<MyPortfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
            {/* </div> */}
          </Routes>
        </div>
        <div>
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
      {/* <NavLink to="/"><h1>Test</h1></NavLink> */}
    </Router>
  );
}

export default App;
