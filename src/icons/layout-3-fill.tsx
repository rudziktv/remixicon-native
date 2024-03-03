import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLayout3Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8 10V21H4C3.44772 21 3 20.5523 3 20V10H8ZM21 10V20C21 20.5523 20.5523 21 20 21H10V10H21ZM20 3C20.5523 3 21 3.44772 21 4V8H3V4C3 3.44772 3.44772 3 4 3H20Z"
    />
  </AnimatedSvg>
);

export default SvgLayout3Fill;
