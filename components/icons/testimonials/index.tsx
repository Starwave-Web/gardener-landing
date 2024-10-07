import { ElementRef, SVGProps } from "react";

const Star = (props: SVGProps<ElementRef<"svg">>) => (
  <svg
    {...props}
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9627 5.20688L10.4996 4.55825L8.50448 0.51352C8.44999 0.402777 8.36034 0.313129 8.2496 0.258637C7.97186 0.121528 7.63436 0.235785 7.4955 0.51352L5.50038 4.55825L1.03729 5.20688C0.914245 5.22446 0.801745 5.28246 0.715612 5.37036C0.611482 5.47738 0.554102 5.62137 0.55608 5.77068C0.558057 5.91999 0.619231 6.06241 0.726159 6.16664L3.95526 9.31489L3.19237 13.7604C3.17448 13.8638 3.18592 13.9702 3.2254 14.0674C3.26488 14.1646 3.33082 14.2489 3.41573 14.3105C3.50065 14.3722 3.60114 14.4089 3.70583 14.4163C3.81051 14.4238 3.91519 14.4018 4.008 14.3528L7.99999 12.2539L11.992 14.3528C12.101 14.4108 12.2275 14.4301 12.3488 14.409C12.6547 14.3563 12.8603 14.0663 12.8076 13.7604L12.0447 9.31489L15.2738 6.16664C15.3617 6.08051 15.4197 5.96801 15.4373 5.84496C15.4848 5.53735 15.2703 5.25258 14.9627 5.20688Z"
      fill="#6CB981"
    />
  </svg>
);


export {Star}