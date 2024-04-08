import React from 'react';
import { SvgXml } from 'react-native-svg';

export function SvgVector() {
    const vector = `<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0.5C9.31697 0.5 12 3.15665 12 6.45585C12 7.94851 11.4422 9.30197 10.5327 10.3498L10.2943 10.6546L7.25876 14.0765L7.0171 14.3838L6.01738 15.5L5.03338 14.3854L4.79421 14.0765L1.848 10.7617C1.84005 10.7534 1.83177 10.7454 1.82317 10.7378C1.80828 10.7238 1.78924 10.7024 1.76193 10.6752C1.2034 10.1223 0.760194 9.46501 0.457814 8.74104C0.155433 8.01706 -0.000154579 7.24072 1.15241e-07 6.45667C1.15241e-07 3.15665 2.68303 0.500824 6 0.500824V0.5ZM6.00166 3.55618C5.22843 3.5577 4.4873 3.86413 3.94055 4.40836C3.39379 4.9526 3.08595 5.6903 3.08441 6.45996C3.08594 7.22978 3.39373 7.96765 3.94044 8.51215C4.48715 9.05665 5.22827 9.36344 6.00166 9.3654C6.77519 9.36344 7.51648 9.0567 8.06346 8.51225C8.61043 7.9678 8.91858 7.22993 8.92055 6.45996C8.9188 5.69001 8.61069 4.9521 8.06364 4.40773C7.5166 3.86336 6.77518 3.55688 6.00166 3.55536V3.55618ZM6.00166 4.37995C6.2764 4.37908 6.5486 4.43228 6.80261 4.53648C7.05663 4.64068 7.28745 4.79383 7.4818 4.98713C7.67615 5.18043 7.83019 5.41006 7.93508 5.66282C8.03996 5.91559 8.09362 6.18649 8.09297 6.45996C8.09373 6.73355 8.04016 7.00458 7.93533 7.25748C7.8305 7.51038 7.67649 7.74017 7.48214 7.93362C7.28779 8.12707 7.05694 8.28038 6.80287 8.38472C6.54879 8.48907 6.27651 8.54239 6.00166 8.54163C5.72692 8.54228 5.45475 8.48887 5.20082 8.38447C4.94689 8.28007 4.71619 8.12673 4.522 7.93328C4.3278 7.73983 4.17394 7.51007 4.06925 7.25723C3.96457 7.00439 3.91113 6.73344 3.912 6.45996C3.91102 6.1865 3.96439 5.91554 4.06905 5.6627C4.1737 5.40985 4.32757 5.18011 4.5218 4.9867C4.71603 4.79329 4.94678 4.64004 5.20075 4.53576C5.45473 4.43149 5.72692 4.37825 6.00166 4.37913V4.37995Z" fill="white"/>
                 </svg>`;
  const SvgImg = () => <SvgXml xml={vector} />;
  return <SvgImg />;
}

export function SvgSunny() {
    const sunny = `<svg width="218" height="235" viewBox="0 0 218 235" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_27_264)">
<rect x="42" y="77" width="99" height="93.225" rx="46.6125" fill="#FFEF9A"/>
</g>
<g filter="url(#filter1_i_27_264)">
<path d="M134.45 124.138C134.45 148.514 114.874 168.275 90.725 168.275C66.5763 168.275 47 148.514 47 124.138C47 99.761 66.5763 80 90.725 80C114.874 80 134.45 99.761 134.45 124.138Z" fill="url(#paint0_linear_27_264)"/>
</g>
<defs>
<filter id="filter0_f_27_264" x="-35" y="0" width="253" height="247.225" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur_27_264"/>
</filter>
<filter id="filter1_i_27_264" x="47" y="80" width="87.45" height="93.2749" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="9"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_27_264"/>
</filter>
<linearGradient id="paint0_linear_27_264" x1="84.0832" y1="148.162" x2="120.572" y2="84.7645" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF9900"/>
<stop offset="1" stop-color="#FFEE94"/>
</linearGradient>
</defs>
</svg>
`;
    const SvgImg = () => <SvgXml xml={sunny} />;
    return <SvgImg />;
}

export function SvgElips() {
    const vector = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="8" stroke="url(#paint0_linear_315_125)" stroke-width="4"/>
<defs>
<linearGradient id="paint0_linear_315_125" x1="10" y1="0" x2="4.1537e-08" y2="35.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D9D9D9"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`;
    const SvgImg = () => <SvgXml xml={vector} />;
    return <SvgImg />;
}

export function SvgLeftArrow() {
    const vector = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="white"/>
</svg>
`;
    const SvgImg = () => <SvgXml xml={vector} />;
    return <SvgImg />;
}

export function SvgPoints() {
    const vector = `<svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 14.8954 0.89543 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.89543 18 0 17.1046 0 16Z" fill="white"/>
</svg>`;
    const SvgImg = () => <SvgXml xml={vector} />;
    return <SvgImg />;
}