import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      image:
        "images/dataset-icon.jpeg",
      category: "DataSets",
      title: "Rich Library of Datasets",
      description:
        "Explore our extensive library of datasets to find the perfect match for your project. Download now and elevate your work with high-quality, tailored data!",
    },
    {
      image:
        "images/search-icon.jpg",
      category: "Search",
      title: "Powerful Filters & Categories",
      description:
        "Streamline your search with advanced filters and category-based options. Find the perfect dataset or model quickly and efficiently for your project!",
    },
    {
      image:
        "images/models-icon.jpeg",
      category: "Models",
      title: "Extensive Model Repository",
      description:
        "Access a vast collection of pre-trained models designed to accelerate your development. Download the perfect model for your project and bring your ideas to life!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative px-3 py-20 mx-auto my-0 text-center max-w-[1140px] overflow-hidden">
      <div className="absolute inset-0 bg-[#171717]">
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

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="mb-2.5 text-4xl font-semibold leading-10 text-white">
            Explore
          </h2>
          <div className="text-7xl font-bold text-center uppercase leading-[74.8px] text-neutral-200 max-sm:text-4xl max-sm:leading-10">
            <span className="relative inline-block">Luigi</span>
            <span className="text-[#FF8142] ml-4 relative inline-block">features</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex justify-center"
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
