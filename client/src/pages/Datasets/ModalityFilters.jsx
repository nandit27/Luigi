import React from "react";

const ModalityFilters = () => {
  const modalities = [
    {
      name: "3D",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/6d604688ce1683adb4a8b0300fd8baa077f3ddd47d97dc2c494a531716f8067c?placeholderIfAbsent=true",
    },
    {
      name: "Audio",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/dc723e421e44d407613040e8857f49eda8d6145d1e7c83f81be797fc82adf662?placeholderIfAbsent=true",
    },
    {
      name: "Geospatial",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/ae1acb97e3ce768837b6ae77bf7a35a7087c1356f3ea7a9db082bb92040b3e6d?placeholderIfAbsent=true",
    },
    {
      name: "Image",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/f2ce18e026d368ef94ce422b9a24e65107804dae09babb85a956c677f79b3255?placeholderIfAbsent=true",
    },
    {
      name: "Tabular",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/1c8ff291a99fbae4d6f7e82f77f1c2ffb92b98489a75c6445162f015aed3d06e?placeholderIfAbsent=true",
    },
    {
      name: "Text",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/9d92177e7afe5cef3b06de0c7e5a91cbbf2ef88738d2a8b2b23b2dafccdd47d3?placeholderIfAbsent=true",
    },
    {
      name: "Time-series",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/00b8e32d6f6fa57600c334ffad6755c1aa95c3f8aab1db9d534258f20c577b7d?placeholderIfAbsent=true",
    },
    {
      name: "Video",
      icon: "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/8c5fb430de8669c3eb66e581d2b5160b670e9ff95db13a600711fdb9a51b0915?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="mt-6 w-full text-sm leading-none whitespace-nowrap">
      <header className="flex items-center w-full text-gray-500">
        <h3 className="self-stretch my-auto">Modalities</h3>
      </header>
      <div className="mt-4 w-full text-orange-500">
        <div className="flex flex-wrap max-w-full">
          {modalities.map((modality) => (
            <button
              key={modality.name}
              className="flex flex-col justify-center pr-1.5 pb-1.5 min-h-[34px]"
            >
              <div className="rounded-lg min-h-7">
                <div className="gap-8 items-center px-9 py-4 rounded-lg border-solid shadow bg-[rgba(255,255,255,0.00)] border border-[rgba(229,231,235,0.70)]">
                  <img
                    src={modality.icon}
                    alt={modality.name}
                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                  />
                  <span className="self-stretch my-auto">{modality.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalityFilters;
