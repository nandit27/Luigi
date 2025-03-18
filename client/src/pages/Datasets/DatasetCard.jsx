import React from "react";

const DatasetCard = ({
  title,
  image,
  author,
  updateTime,
  usability,
  size,
  fileCount,
  fileType,
  votes,
  hasBookmark,
}) => {
  return (
    <article className="p-1 rounded-2xl border-solid border border-[#DADCE0] flex-1 min-h-[320px] min-w-[200px] shrink-1">
      <div className="pb-4 w-full text-xs leading-loose text-gray-50 bg-neutral-800">
        <img
          src={image}
          alt=""
          className="object-contain w-full aspect-[2.59]"
        />
        <div className="flex mx-4 mt-5 text-base font-semibold leading-6 max-md:mx-2.5">
          <h3 className="overflow-hidden pr-8">{title}</h3>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/62b8d84e453cfbea8564dbb10e6b5c34c5d7284041482940533f071650d9e0b3?placeholderIfAbsent=true"
            alt=""
            className="object-contain shrink-0 self-start aspect-[0.82] w-[18px]"
          />
        </div>
        <div className="flex overflow-hidden items-center pt-0.5 pb-px mx-4 mt-1 tracking-wide max-md:mx-2.5">
          <a href="#" className="border-b border-[#9AA0A6]">
            {author}
          </a>
          <span className="self-stretch my-auto"> · {updateTime}</span>
        </div>
        <div className="flex overflow-hidden items-start pt-0.5 pb-px mx-4 tracking-wide max-md:mx-2.5">
          <span>Usability </span>
          <span className="font-bold whitespace-nowrap">{usability}</span>
          <span> · {size}</span>
        </div>
        <div className="overflow-hidden pt-0.5 pb-px mx-4 tracking-wide max-md:mx-2.5">
          {fileCount} File ({fileType})
        </div>
      </div>
      <footer className="border-t border-[#DADCE0] flex w-full p-4 items-stretch gap-10">
        <div className="flex flex-1">
          <button className="items-center rounded-lg border border-[#BDC1C6] bg-white flex min-h-[26px] px-2 py-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/9744b19f888ade49e94a8eb6794e8230701959ecc4d125975dc498b609e5d273?placeholderIfAbsent=true"
              alt=""
              className="object-contain self-stretch my-auto aspect-square w-[18px]"
            />
          </button>
          <div className="py-1 px-9 text-6xl font-bold leading-6 min-h-[26px] text-[#f8f9fa] border border-[#BDC1C6]">
            {votes}
          </div>
        </div>
        <div className="flex flex-1 gap-5 self-start">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/429012dbf0fc62784b458e36e9331ea0b7e8e9fa50208af528eccd7fe3b329f8?placeholderIfAbsent=true"
            alt=""
            className="object-contain shrink-0 my-auto w-4 aspect-square"
          />
          <img
            src={
              hasBookmark
                ? "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/d0dac9617951eac2f3ba7e96659e1b43eae71fa8af52512c507de436cabad726?placeholderIfAbsent=true"
                : "https://cdn.builder.io/api/v1/image/assets/bbf3c9cfde88474a830baa845a12da21/dd8227cdde216200a18b5c89c6e572217eadecb6af99e715152cacd29e4319b5?placeholderIfAbsent=true"
            }
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </div>
      </footer>
    </article>
  );
};

export default DatasetCard;