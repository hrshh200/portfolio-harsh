import React from "react";
import Aboutme from "./components/aboutme.js";
import Header from "./components/header.js";
import Describe from "./components/descri.js";
import Skills from "./components/skills.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";
import Form from "./components/Form.js";
import "./App.css"

const App = () => {
  return (
    <div className="background-image">
      <Header />
      <Describe />
      <Aboutme />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </div >
  );
}

export default App;
