import React from 'react';

const Button = ({
  children,
  variant = "default",
  className = "",
  icon,
  onClick,
}) => {
  const baseStyles =
    "flex items-center gap-2 rounded-3xl border border-[#BDC1C6] min-h-[36px]";
  const variants = {
    default: "px-6 py-2 text-sm font-bold text-center text-gray-50",
    icon: "px-4 py-2 text-sm leading-none text-center",
    large: "px-14 py-8 text-sm font-bold leading-none text-center text-gray-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span className="flex items-center justify-center w-6 min-h-[18px]">
          <img
            src={icon}
            alt=""
            className="object-contain w-[18px] aspect-square"
          />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
