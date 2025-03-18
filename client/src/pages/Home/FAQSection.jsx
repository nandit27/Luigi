import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What types of datasets and models are available on the platform?",
      answer: "Our platform offers a wide range of datasets and pre-trained models across various domains including computer vision, natural language processing, and machine learning. From image classification to sentiment analysis, we've got you covered."
    },
    {
      question: "How can I search for the right dataset or model?",
      answer: "You can use our advanced search filters to narrow down by category, size, format, and more. Our intelligent search system also supports tags and keywords to help you find exactly what you need."
    },
    {
      question: "Can I upload my own datasets or models?",
      answer: "Yes! You can contribute to our platform by uploading your own datasets and models. Our review process ensures quality and compatibility before making them available to the community."
    },
    {
      question: "Are the datasets and models free to use?",
      answer: "We offer both free and premium resources. Free datasets and models come with appropriate licenses, while premium ones may require a subscription or one-time payment."
    },
    {
      question: "How do I ensure the quality and reliability of the datasets and models?",
      answer: "All resources undergo thorough validation. We provide detailed documentation, quality metrics, and community ratings to help you make informed decisions."
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-3 py-20 mx-auto my-0 text-center max-w-[1140px] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-[#FF8142]/10 rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#FF8142]/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-7xl font-bold text-center uppercase leading-[74.8px] text-neutral-200 max-sm:text-4xl max-sm:leading-10">
            Frequently Asked
            <span className="block text-[#FF8142] mt-2">Questions</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 mb-12 text-lg leading-7 max-w-[480px] text-neutral-200
            bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 
            hover:border-[#FF8142]/30 transition-all duration-300"
        >
          If you can't find your answer here, feel free to contact us via our
          email or social media! FAQ last updated March 2nd, 2025.
        </motion.p>

        <motion.div 
          className="mb-20 flex flex-col gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
