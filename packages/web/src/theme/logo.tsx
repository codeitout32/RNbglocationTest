import { SvgIcon } from "@mui/material";
import React from "react";

const LogoIcon = (props) => {
  return (
    <>
      <SvgIcon {...props}>
        <svg viewBox="0 0 51 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_835_6431)">
            <path
              d="M-2.62268e-06 3.8147e-06L21.3841 16.2943L16.4757 29.0748L3.15895 27.0093L-2.62268e-06 3.8147e-06ZM26.4582 40.7205L51 29.9994L26.4582 19.2795L18.0486 29.9994L26.4582 40.7205ZM3.15895 32.9846L0 60L21.3841 43.7045L16.4757 30.9252L3.15895 32.9846Z"
              fill="#A1A1AA"
            />
            <path
              d="M-2.62268e-06 3.8147e-06L16.4757 29.0748L3.15895 27.0093L-2.62268e-06 3.8147e-06ZM18.0486 29.9994L51 29.9994L26.4582 19.2795L18.0486 29.9994ZM16.4757 30.9252L0 60L21.3841 43.7045L16.4757 30.9252Z"
              fill="#E4E4E7"
            />
          </g>
          <defs>
            <clipPath id="clip0_835_6431">
              <rect
                width="60"
                height="51"
                fill="white"
                transform="translate(0 60) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      </SvgIcon>
    </>
  );
};

export default LogoIcon;
