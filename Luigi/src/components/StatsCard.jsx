const StatsCard = ({ value, label }) => {
  return (
    <article className="flex flex-col flex-1 items-center max-w-[150px] min-w-[150px] max-sm:min-w-[120px]">
      <h3 className="text-5xl font-bold text-white leading-[81.6px] max-sm:text-4xl max-sm:leading-[60px]">
        {value}
      </h3>
      <p className="text-xl leading-8 text-white">{label}</p>
    </article>
  );
};

export default StatsCard;
