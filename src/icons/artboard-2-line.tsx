import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgArtboard2Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8 8V16H16V8H8ZM6 6H18V18H6V6ZM6 2H8V5H6V2ZM6 19H8V22H6V19ZM2 6H5V8H2V6ZM2 16H5V18H2V16ZM19 6H22V8H19V6ZM19 16H22V18H19V16ZM16 2H18V5H16V2ZM16 19H18V22H16V19Z"
    />
  </AnimatedSvg>
);

export default SvgArtboard2Line;
