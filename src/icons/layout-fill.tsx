import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLayoutFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M16 21V10H21V20C21 20.5523 20.5523 21 20 21H16ZM14 21H4C3.44772 21 3 20.5523 3 20V10H14V21ZM21 8H3V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V8Z"
    />
  </AnimatedSvg>
);

export default SvgLayoutFill;
