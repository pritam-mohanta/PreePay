import React from "react";
import Home from "./home";
import { Routes ,Route } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/error" element={<Error/>}/>
        </Routes>
    </>
  );
};

export default App;