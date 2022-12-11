import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../src/index.css";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        {/* <Redirect to = "/" /> */}
      </Routes>
    </>
  );
};
export default App;
