import SpeakerCard from "./SpeakerCard";

const SpeakersSection = () => {
  const speakers = [
    {
      image:
        "images\\dataset-icon.jpeg",
      category: "DataSets",
      title: "Rich Library of Datasets",
      description:
        "Explore our extensive library of datasets to find the perfect match for your project. Download now and elevate your work with high-quality, tailored data!",
    },
    {
      image:
        "images\\search-icon.jpg",
      category: "Search",
      title: "Powerful Filters & Categories",
      description:
        "Streamline your search with advanced filters and category-based options. Find the perfect dataset or model quickly and efficiently for your project!",
    },
    {
      image:
        "images\\models-icon.jpeg",
      category: "Models",
      title: "Extensive Model Repository",
      description:
        "Access a vast collection of pre-trained models designed to accelerate your development. Download the perfect model for your project and bring your ideas to life!",
    },
  ];

  return (
    <section className="px-3 py-0 mx-auto my-0 text-center max-w-[1140px]">
      <h2 className="mb-2.5 text-4xl font-semibold leading-10 text-white uppercase">
        A Round of Applause for our
      </h2>
      <div className="text-7xl font-bold text-center uppercase leading-[74.8px] text-neutral-200 max-sm:text-4xl max-sm:leading-10">
        <span>Hacktech</span>
        <span className="text-orange-500">Speakers</span>
      </div>
      <p className="mx-auto mt-0 mb-16 text-lg leading-7 max-w-[480px] text-neutral-200">
        Hacktech would not be the same without the contributions of our
        speakers, whose insights, expertise, and passion drive the innovation
        and creativity that define us. Note: Speaker list is currently
        tentative.
      </p>
      <div className="flex gap-8 justify-center mb-24 max-md:flex-col max-md:items-center">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
