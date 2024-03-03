import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLayoutMasonryFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M22 9.999V20C22 20.5523 21.5523 21 21 21H13V9.999H22ZM11 15.999V21H3C2.44772 21 2 20.5523 2 20V15.999H11ZM11 3V13.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V7.999H13V3H21Z"
    />
  </AnimatedSvg>
);

export default SvgLayoutMasonryFill;
