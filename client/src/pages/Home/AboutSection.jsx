import StatsCard from "./StatsCard";
import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "countries" },
    { value: "60+", label: "universities" },
    { value: "540+", label: "hackers" },
    { value: "$30K", label: "prizes" },
    { value: "36", label: "hours" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative flex flex-col items-center px-4 py-28 text-white bg-[#171717] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF8142]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#FF8142]/10 rounded-full blur-[100px]" />
      </div>

      <motion.div {...fadeInUp} className="relative">
        <h2 className="mb-2.5 text-center text-7xl font-bold uppercase leading-tight text-neutral-200 max-sm:text-4xl max-sm:leading-10">
          <span>About </span>
          <span className="text-[#FF8142] relative inline-block
            after:content-[''] after:absolute after:-bottom-2 after:left-0 
            after:w-full after:h-1 after:bg-[#FF8142] after:transform after:scale-x-0 
            after:transition-transform after:duration-300 hover:after:scale-x-100">
            LUIGI
          </span>
        </h2>
      </motion.div>

      <motion.p 
        {...fadeInUp}
        className="mb-12 text-lg leading-7 text-center max-w-[480px] text-neutral-200 
          bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 
          hover:border-[#FF8142]/30 transition-all duration-300"
      >
        Our mission is to create "Realistic Impact," which entails encouraging
        participants to create projects that could be feasibly implemented in
        real-world scenarios to make tangible change.
      </motion.p>

      <motion.h3 
        {...fadeInUp}
        className="mb-1.5 text-4xl font-semibold leading-10 text-white uppercase 
          bg-gradient-to-r from-[#FF8142] to-[#FF9061] bg-clip-text text-transparent"
      >
        Stats:
      </motion.h3>

      <motion.div 
        {...fadeInUp}
        className="flex flex-wrap gap-4 justify-center px-4 py-1.5 mb-12 max-w-[1200px]"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <StatsCard value={stat.value} label={stat.label} />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative flex flex-col items-center px-4 py-0 max-w-[1140px] lg:flex-row lg:gap-12">
        <motion.div 
          className="flex flex-col gap-8 lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xl leading-8 text-neutral-200 max-sm:text-base max-sm:leading-6
            p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
            hover:border-[#FF8142]/30 transition-all duration-300">
            Hacktech is Caltech's 11th premier annual intercollegiate hackathon.
            During the 36-hour event, participants will collaborate in teams of 1
            to 4 members to develop projects that align with our themes.
          </div>

          <div className="text-xl font-bold leading-8 text-white max-sm:text-base max-sm:leading-6
            p-6 rounded-lg bg-gradient-to-r from-[#FF8142]/10 to-transparent">
            This year, hackers will have the option to choose from these three
            tracks for their projects: Healthcare, Finance/Data Analytics, and
            Sustainability.
          </div>

          <div className="text-xl leading-8 text-neutral-200 max-sm:text-base max-sm:leading-6
            space-y-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div>
              <span className="font-bold text-[#FF8142]">What's New for 2025? </span>
              <span>
                A lot. We revamped the entire event from the ground up, featuring a
                new format, new venues, and improved dining options!
              </span>
            </div>
            <div>
              <span className="font-bold text-[#FF8142]">Event format: </span>
              <span>
                We're fully in-person this year! Scroll down to the FAQ for location
                details!
              </span>
            </div>
            <div>
              <span className="font-bold text-[#FF8142]">Venues and Food: </span>
              <span>
                We have double the space as previous years. This year will feature
                dedicated eating, sleeping, and working areas.
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="images/landingtwo.png"
            alt="About section image"
            className="w-full h-auto mb-8 lg:mb-0 rounded-lg shadow-2xl 
              transform hover:scale-105 transition-transform duration-500
              hover:shadow-[#FF8142]/20"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
