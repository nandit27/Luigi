import React from "react";

const FAQItem = ({ question, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center p-2.5 w-full text-xl font-bold leading-8 text-left text-black bg-gradient-to-r from-[#FF8142] to-[#FF9061] cursor-pointer border-[none] max-sm:text-base max-sm:leading-6"
    >
      <span>{question}</span>
      <span className="text-4xl font-bold leading-[64px] max-sm:text-3xl max-sm:leading-10">
        {isOpen ? "-" : "+"}
      </span>
    </button>
  );
};

export default FAQItem;
