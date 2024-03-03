import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFolder2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M22 11V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11H22ZM22 9H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V9Z"
    />
  </AnimatedSvg>
);

export default SvgFolder2Fill;
