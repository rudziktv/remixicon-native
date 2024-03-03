import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgClockwise2Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M10.5858 4.00003L8.75736 2.1716L10.1716 0.757385L14.4142 5.00003L10.1716 9.24267L8.75736 7.82845L10.5858 6.00003H8C6.34315 6.00003 5 7.34317 5 9.00003V13H3V9.00003C3 6.2386 5.23858 4.00003 8 4.00003H10.5858ZM9 11C9 10.4477 9.44772 10 10 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H10C9.44772 22 9 21.5523 9 21V11ZM11 12V20H19V12H11Z"
    />
  </AnimatedSvg>
);

export default SvgClockwise2Line;
