import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgShareForward2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4 19H20V14H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V14H4V19ZM12 10H9C7.00442 10 5.23638 10.9742 4.14556 12.473C4.85831 8.78512 8.10391 6 12 6V2L20 8L12 14V10Z"
    />
  </AnimatedSvg>
);

export default SvgShareForward2Fill;
