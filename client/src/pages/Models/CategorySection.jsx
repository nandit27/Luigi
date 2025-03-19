"use client";
import React from "react";
import Button from "./Button";

const CategorySection = ({ title, items }) => {
  return (
    <section className="mt-4">
      <h2 className="text-sm leading-none text-gray-100">{title}</h2>
      <div className="flex flex-wrap gap-2 mt-3">
        {items.map((item, index) => (
          <Button
            key={index}
            variant="icon"
            className="gap-8 items-center pr-8 pl-1 rounded-lg border-solid shadow bg-[rgba(255,255,255,0.00)] border border-[rgba(229,231,235,0.70)]"
          >
            <div className="flex justify-center items-center self-stretch px-2.5 py-2 my-auto w-8 bg-orange-500 rounded-lg min-h-7">
              <img
                src={item.icon}
                alt=""
                className="object-contain self-stretch my-auto w-3.5 aspect-square"
              />
            </div>
            <span className="self-stretch my-auto text-sm leading-none text-gray-100">
              {item.name}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;