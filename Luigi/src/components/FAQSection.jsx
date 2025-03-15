import React, { useState } from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    "What types of datasets and models are available on the platform?",
    "How can I search for the right dataset or model?",
    "Can I upload my own datasets or models?",
    "Are the datasets and models free to use?",
    "How do I ensure the quality and reliability of the datasets and models?",
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-3 py-0 mx-auto my-0 text-center max-w-[1140px]">
      <h2 className="text-7xl font-bold text-center uppercase leading-[74.8px] text-neutral-200 max-sm:text-4xl max-sm:leading-10">
        FAQ
      </h2>
      <p className="mx-auto mt-0 mb-12 text-lg leading-7 max-w-[480px] text-neutral-200">
        If you can't find your answer here, feel free to contact us via our
        email or social media! FAQ last updated March 2nd, 2025.
      </p>
      <div className="mb-20 flex flex-col gap-2.5">
        {faqItems.map((question, index) => (
          <FAQItem
            key={index}
            question={question}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
