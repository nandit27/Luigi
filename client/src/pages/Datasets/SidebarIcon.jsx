import React from "react";

const SidebarIcon = ({ svgPath, fill }) => {
  return (
    <div className="flex justify-center items-center pl-6 w-full h-11">
      <div className="border-b border-solid border-b-zinc-400 h-[41px] w-[57px]">
        <div className="flex justify-center items-center w-6 h-6">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              style={{ width: "24px", height: "28px" }}
            >
              <path d={svgPath} fill={fill || "#D1D5DC"}></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarIcon;
