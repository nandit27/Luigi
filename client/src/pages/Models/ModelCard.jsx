import React from "react";

const ModelCard = ({
  title,
  author,
  variations,
  notebooks,
  description,
  votes,
  image,
  isImageCard = false,
}) => {
  return (
    <article className="p-1 rounded-2xl border border-[#DADCE0] basis-[0%] flex-1 max-w-[282px] min-h-[212px] min-w-[200px] shrink-1">
      {isImageCard && image && (
        <div className="overflow-hidden w-full min-h-[106px]">
          <img
            src={image}
            alt={title}
            className="object-contain w-full aspect-[2.64]"
          />
        </div>
      )}

      <div
        className={`${isImageCard ? "flex justify-between px-4 pt-9 pb-4 w-full text-xl font-semibold leading-6 text-gray-50" : "flex-1 px-4 pt-4 pb-6 w-full text-xs text-gray-50 bg-neutral-800"}`}
      >
        {isImageCard ? (
          <>
            <div className="flex flex-col justify-center pb-1">
              <h3 className="pr-7 min-h-12">{title}</h3>
            </div>
            {image && (
              <img
                src={image}
                alt=""
                className="object-contain shrink-0 self-start w-6 aspect-square"
              />
            )}
          </>
        ) : (
          <div className="w-full">
            <h3 className="pb-1 w-full text-base font-semibold">{title}</h3>
            <p className="pb-1 mt-1 w-full tracking-wide leading-loose">
              {author}
            </p>
            <p className="pb-1 mt-1 w-full tracking-wide leading-loose">
              {variations} Variations · {notebooks} Notebooks
            </p>
            {description && (
              <p className="pb-1 mt-1 w-full tracking-wide leading-loose">
                {description}
              </p>
            )}
          </div>
        )}
      </div>

      {!isImageCard && (
        <div className="flex justify-between items-center border-t border-[#DADCE0] w-full px-4 py-4">
          <div className="flex items-center h-6">
            <div className="w-[30px]">
              <button className="flex items-center bg-white rounded-[12px] min-h-[26px] w-[30px] p-2">
                <img
                  src="URL_UPVOTE"
                  alt="upvote"
                  className="w-[18px] aspect-square"
                />
              </button>
            </div>
            <div className="py-1 px-9 text-6xl font-bold leading-[24px] min-h-[26px] text-[#f8f9fa] border border-[#BDC1C6]">
              {votes}
            </div>
          </div>
          <img
            src="URL_AVATAR"
            alt=""
            className="w-6 aspect-square"
          />
        </div>
      )}
    </article>
  );
};

export default ModelCard;
