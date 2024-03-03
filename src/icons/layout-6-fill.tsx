import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLayout6Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M15 10V21H3C2.44772 21 2 20.5523 2 20V10H15ZM22 10V20C22 20.5523 21.5523 21 21 21H17V10H22ZM21 3C21.5523 3 22 3.44772 22 4V8H2V4C2 3.44772 2.44772 3 3 3H21Z"
    />
  </AnimatedSvg>
);

export default SvgLayout6Fill;
