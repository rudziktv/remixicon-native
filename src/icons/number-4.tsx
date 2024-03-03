import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgNumber4 = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M16.0001 1.5L16 16H19.0001V18H16L16.0001 22H14.0001L14 18H4V16.898L14.0001 1.5H16.0001ZM14 16V5.171L6.968 16H14Z"
    />
  </AnimatedSvg>
);

export default SvgNumber4;
