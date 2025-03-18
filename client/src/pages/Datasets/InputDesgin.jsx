import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./Datasets";

function InputDesign() {
  return (
    <div className="flex min-h-screen bg-neutral-900">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default InputDesign;
