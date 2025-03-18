const HeroSection = () => {
  return (
    <section className="mt-20 flex flex-col items-center pt-10 bg-[url('images/bg-image.png')] bg-cover bg-center text-white relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[#171717]/70 before:z-0">
      <div className="relative z-10 h-[153px] w-[1096px] max-md:px-5 max-md:py-0 max-md:w-full">
        <div className="text-9xl font-bold text-white uppercase text-center tracking-[10px] animate-fadeIn">
          <span className="hover:scale-110 inline-block transition-transform duration-300">L</span>
          <span className="text-[#FF8142] hover:text-orange-400 inline-block transition-colors duration-300 hover:scale-110">UI</span>
          <span className="hover:scale-110 inline-block transition-transform duration-300">GI</span>
        </div>
      </div>
      <h2 className="relative z-10 mb-9 text-2xl font-semibold leading-10 text-white tracking-[5px] max-sm:text-2xl max-sm:tracking-[1px] animate-slideUp">
        Development made easy!
      </h2>
      <div className="relative z-10 flex gap-8 mb-20 max-md:flex-col max-md:items-center">
        <button className="px-8 py-2.5 text-xl font-semibold text-black cursor-pointer border-[none] min-w-[180px] bg-gradient-to-r from-[#FF8142] to-[#FF9061] hover:from-[#FF9061] hover:to-[#FF8142] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,129,66,0.5)] rounded-md">
          Search Dataset
        </button>
        <button className="px-8 py-2.5 text-xl font-semibold text-black cursor-pointer border-[none] min-w-[180px] bg-gradient-to-r from-[#FF8142] to-[#FF9061] hover:from-[#FF9061] hover:to-[#FF8142] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,129,66,0.5)] rounded-md">
          Search Models
        </button>
      </div>
      <div className="relative z-10 w-full max-md:h-auto flex justify-center animate-fadeIn">
        <img
          src="images/hero.png"
          alt="Hero"
          className="w-full max-w-[1500px] h-auto object-contain hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default HeroSection;
