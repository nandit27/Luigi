import React from "react";

const Tag = ({ name, icon, color = "gray-500" }) => {
  return (
    <div className="flex">
      <div
        className={`flex gap-2 items-center px-2.5 py-1 rounded-lg border border-solid shadow bg-white bg-opacity-0 border-gray-200 border-opacity-70 max-sm:px-2 max-sm:py-1`}
      >
        {icon && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: icon }} />
          </div>
        )}
        <span className={`text-sm leading-5 text-${color}`}>{name}</span>
      </div>
    </div>
  );
};

export default Tag;
