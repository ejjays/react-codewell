import * as React from "react";

const CheckIcon = ({size = 24, ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 42 42"
    {...props}
  >
    <g transform="translate(-243 -571)">
      <circle
        cx="21"
        cy="21"
        r="21"
        fill="#fff"
        data-name="Ellipse 1"
        transform="translate(243 571)"
      ></circle>
      <path d="m270.696 584.317-9.122 9.354-4.278-4.054-3 3.007 7.278 7.058 12.131-12.365z"></path>
    </g>
  </svg>
);

export default CheckIcon;
