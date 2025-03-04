import React from "react";

const IconSidebar = ({
  className,
  strokeColor,
}: {
  className?: string;
  strokeColor?: string;
}) => {
  return (
    <svg
      className={className}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.513 29.3333H20.513C27.1797 29.3333 29.8464 26.6667 29.8464 20V12C29.8464 5.33333 27.1797 2.66666 20.513 2.66666H12.513C5.84638 2.66666 3.17971 5.33333 3.17971 12V20C3.17971 26.6667 5.84638 29.3333 12.513 29.3333Z"
        stroke={strokeColor || "#AAAAAA"}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.513 2.66666V29.3333"
        stroke={strokeColor || "#AAAAAA"}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconSidebar;
