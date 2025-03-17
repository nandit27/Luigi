import { motion } from "framer-motion";

const SpeakerCard = ({ image, category, title, description }) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-[#171717] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
        transition-all duration-300 ease-out border border-white/10 hover:border-[#FF8142]/30
        w-[352px] h-full max-md:w-full max-md:max-w-[352px]"
    >
      <div className="relative overflow-hidden h-[250px] w-full">
        <img
          src={image}
          alt={`${category} Icon`}
          className="object-cover w-full h-full transition-transform duration-500 ease-out
            group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent opacity-60" />
      </div>

      <div className="relative">
        <span className="inline-block px-4 py-2 ml-5 -mt-5 text-xs font-semibold leading-none 
          text-white uppercase bg-[#FF8142] rounded-md shadow-lg 
          transform transition-transform duration-200 ease-out group-hover:scale-105">
          {category}
        </span>
      </div>

      <div className="flex flex-col h-[calc(100%-250px)] justify-between">
        <div>
          <h3 className="p-8 pb-4 text-2xl font-bold leading-8 text-left text-white
            transition-colors duration-200 ease-out group-hover:text-[#FF8142]">
            {title}
          </h3>

          <p className="px-8 pt-0 pb-6 text-lg leading-7 text-left text-neutral-200
            transition-colors duration-200 ease-out group-hover:text-white">
            {description}
          </p>
        </div>

        <div className="px-8 pb-8 mt-auto">
          <button className="w-full px-6 py-3 text-white bg-gradient-to-r from-[#FF8142] to-[#FF9061] 
            rounded-lg transition-all duration-200 ease-out hover:from-[#FF9061] hover:to-[#FF8142]
            hover:scale-102 hover:shadow-lg hover:shadow-[#FF8142]/20 
            focus:ring-2 focus:ring-[#FF8142] focus:ring-opacity-50 active:scale-98">
            Learn More
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default SpeakerCard;
