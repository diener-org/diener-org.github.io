import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WorkNav from "./pages/WorkNav";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="work" element={<WorkNav />} />
        <Route path="american" element={<Work pageName="american" />} />
        <Route path="anine" element={<Work pageName="anine" />} />
        <Route path="bk" element={<Work pageName="bk" />} />
        <Route path="clare" element={<Work pageName="clare" />} />
        <Route path="doodle" element={<Work pageName="doodle" />} />
        <Route path="frame" element={<Work pageName="frame" />} />
        <Route path="jl" element={<Work pageName="jl" />} />
        <Route path="misc" element={<Work pageName="misc" />} />
        <Route path="ow" element={<Work pageName="ow" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
