import React from "react";
import NavigationTab from "./NavigationTab";
import ModalitiesSection from "./ModalitiesSection";
import SizeSlider from "./SizeSlider";
import FormatSection from "./FormatSection";

const Datasets = () => {
  return (
    <>
      <main className="flex-1 px-6 py-6 bg-neutral-900 max-sm:p-4">
        <NavigationTab />
        <ModalitiesSection />
        <SizeSlider />
        <FormatSection />
      </main>
    </>
  );
};

export default Datasets;