import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgBillFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM8 9V11H16V9H8ZM8 13V15H16V13H8Z"
    />
  </AnimatedSvg>
);

export default SvgBillFill;
