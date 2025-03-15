import React from "react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center">
      {/* Constellation Background */}
      <div className="absolute inset-0">
        <img
          src="https://raw.githubusercontent.com/nandit123/Luigi/main/public/constellation.png"
          alt="Constellation"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[120px] font-bold text-white mb-2">
          HACKTECH
        </h1>
        <p className="text-2xl text-white tracking-widest mb-8">
          APRIL 25 - 27, 2025
        </p>
        <div className="flex flex-col gap-2 w-[300px]">
          <button className="w-full bg-[#ff5900] hover:bg-[#ff5900]/90 text-black py-2 text-lg font-medium transition-colors">
            Search Dataset
          </button>
          <button className="w-full bg-[#ff5900] hover:bg-[#ff5900]/90 text-black py-2 text-lg font-medium transition-colors">
            Search Models
          </button>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 w-full">
        <img
          src="https://raw.githubusercontent.com/nandit123/Luigi/main/public/team.png"
          alt="Team"
          className="w-full"
          style={{
            maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
          }}
        />
      </div>
    </section>
  );
} 