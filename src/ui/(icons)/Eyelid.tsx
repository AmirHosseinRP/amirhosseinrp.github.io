import { memo } from "react";

const Eyelid = () => (
  <svg
    width="128"
    height="64"
    viewBox="0 0 128 64"
    fill="none"
    className="relative top-1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 32.5C40 70.3255 92.3 69.3379 124 32.5"
      stroke="white"
      strokeWidth="6"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 32.4487C40 -5.37677 92.3 -4.38916 124 32.4487"
      stroke="white"
      strokeWidth="8"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(Eyelid);
