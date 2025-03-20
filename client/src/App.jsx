import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import Home from "./pages/Home/Home";
import Models from "./pages/Models/Models";
import Datasets from "./pages/Datasets/Datasets";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/datasets" element={<Datasets />} />
      </Routes>
    </Router>
  );
};

export default App;