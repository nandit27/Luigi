import CountUp from 'react-countup';

const StatsCard = ({ value, label }) => {
  // Extract the numeric value and any suffix (like +, K, etc.)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  return (
    <div className="flex flex-col items-center justify-center w-[220px] h-[180px] p-4 
      bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 
      hover:border-[#FF8142]/30 hover:shadow-lg hover:shadow-[#FF8142]/10 
      transition-all duration-300 transform hover:scale-105">
      <div className="text-4xl font-bold mb-2 text-[#FF8142]">
        <CountUp
          end={numericValue}
          duration={2.5}
          separator=","
          decimals={value.includes('.') ? 1 : 0}
          suffix={suffix}
          enableScrollSpy
          scrollSpyOnce
        />
      </div>
      <div className="text-xl font-medium text-white capitalize">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;
