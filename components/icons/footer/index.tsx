import { type ElementRef, type SVGProps } from "react";

const FacebookLogo = (props: SVGProps<ElementRef<"svg">>) => (
  <svg
    {...props}
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 15.8921C30 7.55535 23.2863 0.800781 15 0.800781C6.71371 0.800781 0 7.55535 0 15.8921C0 23.4377 5.44355 29.7054 12.6411 30.8008V20.2734H8.83064V15.8921H12.6411V12.6061C12.6411 8.83324 14.879 6.70342 18.2661 6.70342C19.9597 6.70342 21.6532 7.00768 21.6532 7.00768V10.7196H19.7782C17.9032 10.7196 17.2984 11.8758 17.2984 13.0929V15.8921H21.4718L20.8065 20.2734H17.2984V30.8008C24.496 29.7054 30 23.4377 30 15.8921Z"
      fill="white"
    />
  </svg>
);
const LinkedInLogo = (props: SVGProps<ElementRef<"svg">>) => (
  <svg
    {...props}
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15.8008" r="15" fill="white" />
    <path
      d="M8.22154 22.8596H11.3056V12.8752H8.22154V22.8596Z"
      fill="#324B29"
    />
    <path
      d="M7.94116 9.68774C7.94116 10.6721 8.73555 11.469 9.76359 11.469C10.7449 11.469 11.5393 10.6721 11.5393 9.68774C11.5393 8.70337 10.7449 7.85962 9.76359 7.85962C8.73555 7.85962 7.94116 8.70337 7.94116 9.68774Z"
      fill="#324B29"
    />
    <path
      d="M19.8103 22.8596H22.9412V17.3752C22.9412 14.7034 22.3337 12.594 19.2028 12.594C17.7075 12.594 16.6795 13.4377 16.2589 14.2346H16.2122V12.8752H13.2683V22.8596H16.3524V17.9377C16.3524 16.6252 16.586 15.3596 18.2215 15.3596C19.8103 15.3596 19.8103 16.8596 19.8103 17.9846V22.8596Z"
      fill="#324B29"
    />
  </svg>
);
const TwitterLogo = (props: SVGProps<ElementRef<"svg">>) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="white" />
    <path
      d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
      fill="#324B29"
    />
  </svg>
);

export { LinkedInLogo, FacebookLogo, TwitterLogo };
