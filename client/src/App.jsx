import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Home/Navbar";
import Home from "./pages/Home/Home";
import Models from "./pages/Models/Models";
import Datasets from "./pages/Datasets/Datasets";

const App = () => {
  return (
    <Router>
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