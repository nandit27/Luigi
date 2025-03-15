import StatsCard from "./StatsCard";

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "countries" },
    { value: "60+", label: "universities" },
    { value: "540+", label: "hackers" },
    { value: "$30K", label: "prizes" },
    { value: "36", label: "hours" },
  ];

  return (
    <section className="flex flex-col items-center px-4 py-28 text-white">
      <h2 className="mb-2.5 text-center text-7xl font-bold uppercase leading-tight text-neutral-200 max-sm:text-4xl max-sm:leading-10">
        <span>About </span>
        <span className="text-orange-500">LUIGI</span>
      </h2>
      <p className="mb-12 text-lg leading-7 text-center max-w-[480px] text-neutral-200">
        Our mission is to create "Realistic Impact," which entails encouraging
        participants to create projects that could be feasibly implemented in
        real-world scenarios to make tangible change.
      </p>
      <h3 className="mb-1.5 text-4xl font-semibold leading-10 text-white uppercase">
        Stats:
      </h3>
      <div className="flex flex-wrap gap-2.5 justify-center px-4 py-1.5 mb-8 max-w-[1200px]">
        {stats.map((stat, index) => (
          <StatsCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
      <div className="relative flex flex-col items-center px-4 py-0 max-w-[1140px] lg:flex-row lg:gap-8">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="text-xl leading-8 text-neutral-200 max-sm:text-base max-sm:leading-6">
            Hacktech is Caltech's 11th premier annual intercollegiate hackathon.
            During the 36-hour event, participants will collaborate in teams of 1
            to 4 members to develop projects that align with our themes. Whether
            you're a seasoned coder or a curious beginner, Hacktech invites you to
            join a vibrant community of problem solvers, dreamers, and builders on
            Caltech's campus this year.
          </div>
          <div className="text-xl font-bold leading-8 text-white max-sm:text-base max-sm:leading-6">
            This year, hackers will have the option to choose from these three
            tracks for their projects: Healthcare, Finance/Data Analytics, and
            Sustainability.
          </div>
          <div className="text-xl leading-8 text-neutral-200 max-sm:text-base max-sm:leading-6">
            <span className="font-bold text-amber-500">
              What's New for 2025?{" "}
            </span>
            <span>
              A lot. We revamped the entire event from the ground up, featuring a
              new format, new venues, and improved dining options!
            </span>
            <br />
            <span className="font-bold text-amber-500">Event format: </span>
            <span>
              We're fully in-person this year! Scroll down to the FAQ for location
              details!
            </span>
            <br />
            <span className="font-bold text-amber-500">Venues and Food: </span>
            <span>
              We have double the space as previous years. This year will feature
              dedicated eating, sleeping, and working areas.
            </span>
          </div>
        </div>
        <img
          src="images\\landingtwo.png"
          alt="About section image"
          className="w-full h-auto mb-8 lg:w-1/2 lg:mb-0"
        />
      </div>
    </section>
  );
};

export default AboutSection;
