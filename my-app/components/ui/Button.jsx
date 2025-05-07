import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`
    w-full sm:w-[220px] md:w-[260px] lg:w-[300px]
    h-12 sm:h-14 md:h-[60px]
    bg-[#eae3d2] hover:bg-[#b8e1e8]
    text-[#085a69]
    border-2 border-[#085a69] rounded-[40px]
    text-base sm:text-lg md:text-xl
    font-[var(--text-font)]
    px-4 sm:px-6 md:px-8
    py-2 sm:py-2.5 md:py-3
    transition-colors duration-300
    text-center
    ${className}
  `}
      {...props}
    >
      {children}
    </button>
  );
}
