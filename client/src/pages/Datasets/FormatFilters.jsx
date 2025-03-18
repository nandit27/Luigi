import React from "react";

const FormatFilters = () => {
  const formats = [
    {
      name: "json",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/845aceea84ed703e3ac3ede9c786b396e50afc394426017171fa7ceb989f3da9?placeholderIfAbsent=true",
    },
    {
      name: "csv",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/962d9b307a6a933afe0cb5e541699c65565c910ae49eb990ef3037106564e25f?placeholderIfAbsent=true",
    },
    {
      name: "parquet",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/159f938302bf84218f574bcc36cf7db9c8e633f4d3143c74a125777c915ac153?placeholderIfAbsent=true",
    },
    {
      name: "imagefolder",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/30afb1afd0533e63bf13912f8fd9be3335bf4df4131d2414a12f143482834f2a?placeholderIfAbsent=true",
    },
    {
      name: "soundfolder",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/cce4c6f413109467e1ca51d2298b6a8733dd9f9794e857ac909381156c261cae?placeholderIfAbsent=true",
    },
    {
      name: "webdataset",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/5b83e059222a00a2b39ec60878400752407101adf22821cba459407889c692cf?placeholderIfAbsent=true",
    },
    {
      name: "text",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/f8f4f8ce69e406b9232aeadc92037da972067625d877e45f630db54663efb0f0?placeholderIfAbsent=true",
    },
    {
      name: "arrow",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/3a2b492fa18ea75f114118a763d510a7f5dfa3006b50168975d3f41f1d1e16ca?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="mt-4 w-full text-sm leading-none whitespace-nowrap">
      <header className="flex items-center w-full text-gray-500">
        <h3 className="self-stretch my-auto">Format</h3>
      </header>
      <div className="mt-4 w-full text-orange-500">
        <div className="flex flex-wrap max-w-full">
          {formats.map((format) => (
            <button
              key={format.name}
              className="flex flex-col justify-center pr-1.5 pb-1.5 min-h-[34px]"
            >
              <div className="rounded-lg min-h-7">
                <div className="gap-8 items-center px-9 py-4 rounded-lg border-solid shadow bg-[rgba(255,255,255,0.00)] border border-[rgba(229,231,235,0.70)]">
                  <img
                    src={format.icon}
                    alt={format.name}
                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                  />
                  <span className="self-stretch my-auto">{format.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormatFilters;
