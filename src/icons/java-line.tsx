import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgJavaLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M10.8193 8.42654C10.0602 7.34217 9.77392 6.55513 9.71179 5.98243C9.6531 5.44149 9.78522 5.01294 10.0473 4.59929C10.3303 4.15244 10.755 3.73687 11.2954 3.24643C11.8004 2.78803 12.4323 2.24339 12.9281 1.62639L11.369 0.373657C10.9532 0.891134 10.4413 1.32064 9.95118 1.76549C9.41712 2.25024 8.80225 2.82728 8.35773 3.52902C7.89217 4.26395 7.60866 5.13997 7.72346 6.19813C7.83481 7.22454 8.31113 8.33114 9.18085 9.57351L10.8193 8.42654ZM12.0691 5.39666C12.3539 4.71314 12.9313 4.02758 13.8492 3.24077L15.1508 4.75928C14.3187 5.47247 14.0211 5.91191 13.9153 6.16589C13.8112 6.41559 13.8802 6.66497 13.9502 6.91319C14.0337 7.20908 14.1728 7.70231 14.1639 8.23544C14.1522 8.94083 13.9104 9.6872 13.3321 10.5547L11.6679 9.44533C12.0896 8.81285 12.1603 8.43422 12.1642 8.20211C12.1691 7.907 12.0921 7.74146 11.9674 7.24256C11.8478 6.76427 11.7573 6.14506 12.0691 5.39666ZM6.14205 9.99985C6.61127 9.68577 7.19166 9.52606 7.73387 9.39563L7.26613 7.4511C6.45314 7.64666 5.71471 7.91182 5.15413 8.25779C4.64408 8.57258 4 9.13581 4 9.99993C4 10.7262 4.48572 11.306 5.06549 11.6857C5.02301 11.8687 5 12.0596 5 12.2576C5 13.238 5.41805 14.0646 6.14274 14.6786C6.03632 14.9777 5.98811 15.3119 6.00331 15.6465C5.22587 15.7972 4.46698 16.0193 3.83335 16.3097C3.40087 16.5079 2.97509 16.7612 2.64304 17.0874C2.30876 17.4157 2 17.8913 2 18.5C2 18.927 2.18863 19.2717 2.37382 19.5093C2.56286 19.7519 2.8059 19.9586 3.05811 20.1338C3.56429 20.4854 4.24239 20.8028 5.0167 21.0702C6.57504 21.6084 8.68585 22 11 22C14.3273 22 16.6627 21.6161 18.1899 21.2177C18.9534 21.0185 19.5137 20.816 19.894 20.6568C20.1036 20.5691 20.3141 20.4759 20.5102 20.3601C20.5209 20.3537 19.4817 18.6448 19.4864 18.642C18.9216 18.9361 18.2983 19.1224 17.6851 19.2824C16.3373 19.634 14.1727 20 11 20C8.89587 20 7.00668 19.6416 5.6696 19.1798C5.13841 18.9964 4.58196 18.7818 4.12894 18.4405C4.24432 18.3492 4.41971 18.241 4.66665 18.1278C5.22462 17.8721 5.98958 17.6623 6.80607 17.5366C7.03515 17.7796 7.30872 17.994 7.62113 18.1763C8.58641 18.7394 9.91268 19 11.5 19C12.81 19 13.7578 18.8682 14.3982 18.7263C14.7536 18.6476 15.1117 18.5587 15.4402 18.3979C15.4434 18.3964 14.5589 16.6026 14.5589 16.6026C14.3651 16.6735 14.1673 16.729 13.9657 16.7737C13.4775 16.8818 12.6753 17 11.5 17C10.0873 17 9.16359 16.7606 8.62887 16.4487C8.20348 16.2006 8.04009 15.9254 8.00673 15.6255C8.87463 15.8783 9.90235 16 11.0625 16C12.5261 16 13.5815 15.8565 14.2908 15.7033C14.6765 15.62 15.0664 15.5241 15.4255 15.3566C15.4458 15.3469 14.5678 13.5498 14.5678 13.5498C14.513 13.5722 14.2892 13.6575 13.8686 13.7483C13.3082 13.8694 12.3949 14 11.0625 14C9.45935 14 8.39107 13.7356 7.76003 13.3767C7.28904 13.1088 7.08228 12.8089 7.02081 12.487C8.26048 12.8135 9.82491 12.9999 11.5 12.9999C13.3167 12.9999 15.0016 12.7806 16.2832 12.4022L15.7168 10.4841C14.6626 10.7954 13.1762 10.9999 11.5 10.9999C9.77625 10.9999 8.25501 10.7836 7.19789 10.4584C6.69889 10.3048 6.35214 10.1417 6.14205 9.99985ZM17.5905 10.7457C18.8029 10.6355 19.2497 10.934 19.3939 11.0885C19.543 11.2483 19.5952 11.496 19.5299 11.7573C19.4137 12.2219 19.0872 12.6724 18.5567 13.0863C18.0281 13.4988 17.3563 13.8266 16.6839 14.0506L17.3161 15.9481C18.1437 15.6723 19.0344 15.2504 19.787 14.6631C20.5378 14.0773 21.2113 13.278 21.4701 12.2424C21.6547 11.5039 21.5819 10.5016 20.8561 9.72387C20.1252 8.94081 18.9471 8.61417 17.4095 8.75396L17.5905 10.7457Z" />
  </Svg>
);

export default SvgJavaLine;
