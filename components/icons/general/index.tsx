import { type ElementRef, type SVGProps } from "react";

const GrassIcon = (props: SVGProps<ElementRef<"svg">>) => (
  <svg
    {...props}
    width="111"
    height="94"
    viewBox="0 0 111 94"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999993 50.896C12.7232 38.9826 50.8619 20.733 109.631 43.0413"
      stroke="#134E1C"
      strokeOpacity="0.4"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M2.00252 58.0741C12.0398 44.7095 47.4174 21.5568 108.629 35.8632"
      stroke="#134E1C"
      strokeOpacity="0.7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M4.0715 65.3315C12.145 50.6966 43.9442 22.8323 106.553 28.4541"
      stroke="#134E1C"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export { GrassIcon };
