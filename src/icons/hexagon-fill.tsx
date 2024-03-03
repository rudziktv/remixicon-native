import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgHexagonFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5Z"
    />
  </AnimatedSvg>
);

export default SvgHexagonFill;
