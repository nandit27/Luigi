import { motion } from "framer-motion";
import CountUp from 'react-countup';

const AboutSection = () => {
  const stats = [
    { 
      value: "1000", 
      suffix: "+",
      label: "Datasets",
      description: "High-quality datasets available"
    },
    { 
      value: "2.5", 
      suffix: "K+",
      label: "Projects",
      description: "Student projects completed"
    },
    { 
      value: "100",
      suffix: "+", 
      label: "Universities",
      description: "Trust our platform"
    },
    { 
      value: "6",
      suffix: "", 
      label: "Categories",
      description: "Covering major domains"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="relative flex flex-col items-center px-4 py-28 text-white bg-[#171717] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#32CD32]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#32CD32]/10 rounded-full blur-[100px]" />
      </div>

      <motion.div {...fadeInUp} className="relative">
        <h2 className="mb-2.5 text-center text-7xl font-bold uppercase leading-tight text-neutral-200 max-sm:text-4xl max-sm:leading-10">
          <span>About </span>
          <span className="text-[#32CD32] relative inline-block
            after:content-[''] after:absolute after:-bottom-2 after:left-0 
            after:w-full after:h-1 after:bg-[#32CD32] after:transform after:scale-x-0 
            after:transition-transform after:duration-300 hover:after:scale-x-100">
            LUIGI
          </span>
        </h2>
      </motion.div>

      <motion.p {...fadeInUp} className="mb-12 text-lg leading-7 text-center max-w-[600px] text-neutral-200 
        bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 
        hover:border-[#32CD32]/30 transition-all duration-300">
        LUIGI is dedicated to empowering students with high-quality datasets for their academic projects. 
        Our mission is to make data-driven development accessible and efficient for educational purposes, 
        helping students create impactful projects that solve real-world problems.
      </motion.p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 text-center group hover:bg-white/10 
                transition-all duration-300 border border-white/10 hover:border-[#32CD32]/30
                hover:shadow-lg hover:shadow-[#32CD32]/10 transform hover:scale-105"
            >
              <h3 className="text-3xl font-bold text-[#32CD32] mb-2">
                <CountUp
                  end={parseFloat(stat.value)}
                  duration={2.5}
                  separator=","
                  decimals={stat.value.includes('.') ? 1 : 0}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        {...fadeInUp}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-[#32CD32]/30 
          transition-all duration-300 hover:shadow-lg hover:shadow-[#32CD32]/10 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#32CD32] mb-4">For Students</h3>
          <ul className="space-y-2 text-gray-400">
            <li>• Access curated datasets for academic projects</li>
            <li>• Find data across multiple domains</li>
            <li>• Easy-to-use download and integration</li>
            <li>• Comprehensive documentation support</li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-[#32CD32]/30 
          transition-all duration-300 hover:shadow-lg hover:shadow-[#32CD32]/10 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#32CD32] mb-4">For Universities</h3>
          <ul className="space-y-2 text-gray-400">
            <li>• Support student research projects</li>
            <li>• Ensure quality data accessibility</li>
            <li>• Track project outcomes</li>
            <li>• Foster data-driven learning</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
