const SpeakerCard = ({ image, category, title, description }) => {
  return (
    <article className="bg-yellow-950 bg-opacity-90 shadow-[0_2px_5px_rgba(0,0,0,0.20)] w-[352px] max-md:w-full max-md:max-w-[352px]">
      <div className="overflow-hidden bg-orange-400 h-[352px] w-[352px]">
        <img
          src={image}
          alt={`${category} Icon`}
          className="object-cover size-full"
        />
      </div>
      <div className="px-5 py-0 text-xs font-semibold leading-8 text-white uppercase w-fit">
        {category}
      </div>
      <h3 className="p-8 text-2xl font-bold leading-8 text-left text-neutral-200">
        {title}
      </h3>
      <p className="px-8 pt-0 pb-8 text-lg leading-7 text-left text-neutral-200">
        {description}
      </p>
    </article>
  );
};

export default SpeakerCard;
