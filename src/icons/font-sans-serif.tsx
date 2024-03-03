import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFontSansSerif = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M5 4H19V8H17.5C17 6 17 5 15 5H10V12H13C14 12 15 11.5 15 10H16V15H15C15 13.5 14 13 13 13H10V17.5C10 20 13.5 20 13.5 20V21H5V20C7 19.5 7 18.5 7 17.5V7.5C7 6.5 7 5.5 5 5V4Z"
    />
  </AnimatedSvg>
);

export default SvgFontSansSerif;
