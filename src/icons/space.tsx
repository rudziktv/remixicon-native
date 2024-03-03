import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSpace = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4 9V13H20V9H22V14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14V9H4Z"
    />
  </AnimatedSvg>
);

export default SvgSpace;
