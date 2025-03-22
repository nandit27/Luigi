import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";

const HeroSection = () => {
  const navigate = useNavigate();

  // Letter animation variants
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Container animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="mt-20 flex flex-col items-center pt-10 relative overflow-hidden bg-[#171717] text-white">
      {/* Particles background */}
      <div className="absolute inset-0 bg-[#171717] z-0">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-10 h-[153px] w-[1096px] max-md:px-5 max-md:py-0 max-md:w-full">
        <motion.div 
          className="text-9xl font-bold text-white uppercase text-center tracking-[10px]"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span 
            variants={letterVariants}
            whileHover="hover"
            className="inline-block"
          >
            L
          </motion.span>
          <motion.span 
            variants={letterVariants}
            whileHover="hover"
            className="text-[#32CD32] hover:text-green-400 inline-block transition-colors duration-300"
          >
            U
          </motion.span>
          <motion.span 
            variants={letterVariants}
            whileHover="hover"
            className="text-[#32CD32] hover:text-green-400 inline-block transition-colors duration-300"
          >
            I
          </motion.span>
          <motion.span 
            variants={letterVariants}
            whileHover="hover"
            className="inline-block"
          >
            G
          </motion.span>
          <motion.span 
            variants={letterVariants}
            whileHover="hover"
            className="inline-block"
          >
            I
          </motion.span>
        </motion.div>
      </div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-10 mb-9 text-2xl font-semibold leading-10 text-white 
          tracking-[5px] max-sm:text-2xl max-sm:tracking-[1px]"
      >
        Development made easy!
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="relative z-10 flex gap-8 mb-20 max-md:flex-col max-md:items-center"
      >
        <button 
          onClick={() => navigate('/datasets')}
          className="px-8 py-2.5 text-xl font-semibold text-[#171717] cursor-pointer 
            border-[none] min-w-[180px] bg-gradient-to-r from-[#32CD32] to-[#00FF7F] 
            hover:from-[#00FF7F] hover:to-[#32CD32] transition-all duration-300 
            transform hover:scale-105 hover:shadow-[0_0_15px_rgba(50,205,50,0.5)] 
            rounded-md"
        >
          Search Dataset
        </button>
        <button 
          onClick={() => navigate('/models')}
          className="px-8 py-2.5 text-xl font-semibold text-[#171717] cursor-pointer 
            border-[none] min-w-[180px] bg-gradient-to-r from-[#32CD32] to-[#00FF7F] 
            hover:from-[#00FF7F] hover:to-[#32CD32] transition-all duration-300 
            transform hover:scale-105 hover:shadow-[0_0_15px_rgba(50,205,50,0.5)] 
            rounded-md"
        >
          Search Models
        </button>
      </motion.div>
      <div className="relative z-10 w-full max-md:h-auto flex justify-center animate-fadeIn">
        <img
          src="images/hero-image.png"
          alt="Hero"
          className="w-full max-w-[1400px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;