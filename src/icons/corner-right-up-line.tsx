import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCornerRightUpLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M13.9999 19.0001L5.00003 19.0002L5 17.0002L11.9999 17.0001L12 6.8283L8.05027 10.778L6.63606 9.36381L13 2.99985L19.364 9.36381L17.9498 10.778L14 6.82825L13.9999 19.0001Z"
    />
  </AnimatedSvg>
);

export default SvgCornerRightUpLine;
