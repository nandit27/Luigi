const HeroSection = () => {
  return (
    <section className="flex flex-col items-center pt-10 bg-[url('images\\bg-image.png')] bg-cover bg-center text-white">
      <div className="h-[153px] w-[1096px] max-md:px-5 max-md:py-0 max-md:w-full">
        <div className="text-9xl font-bold text-white uppercase text-center tracking-[10px]">
          <span>L</span>
          <span className="text-orange-500">UI</span>
          <span>GI</span>
        </div>
      </div>
      <h2 className="mb-9 text-2xl font-semibold leading-10 text-white tracking-[5px] max-sm:text-2xl max-sm:tracking-[1px]">
        Development made easy!
      </h2>
      <div className="flex gap-8 mb-20 max-md:flex-col max-md:items-center">
        <button className="px-8 py-2.5 text-xl font-semibold text-black cursor-pointer border-[none] min-w-[180px] bg-gradient-to-r from-[#FF8142] to-[#FF9061]">
          Search Dataset
        </button>
        <button className="px-8 py-2.5 text-xl font-semibold text-black cursor-pointer border-[none] min-w-[180px] bg-gradient-to-r from-[#FF8142] to-[#FF9061]">
          Search Models
        </button>
      </div>
      <div className="relative w-full max-md:h-auto flex justify-center">
        <img
          src="images\\hero.png"
          alt="Hero"
          className="w-full max-w-[1500px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
