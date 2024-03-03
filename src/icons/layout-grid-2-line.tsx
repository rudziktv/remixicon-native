import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLayoutGrid2Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4 10L8 10V14H4V10ZM4 19V16H8V19H4ZM10 19V16H14V19H10ZM16 19V16H20V19H16ZM16 14V10H20V14H16ZM16 8V5H20V8H16ZM14 5V8H10V5H14ZM14 10V14H10V10H14ZM4 8V5H8V8L4 8ZM3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3Z"
    />
  </AnimatedSvg>
);

export default SvgLayoutGrid2Line;
