import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgUDiskFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4 12H20C20.5523 12 21 12.4477 21 13V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V13C3 12.4477 3.44772 12 4 12ZM5 2H19V10H5V2ZM9 5V7H11V5H9ZM13 5V7H15V5H13Z"
    />
  </AnimatedSvg>
);

export default SvgUDiskFill;
