import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgVipCrownFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8L12.0049 2L17.0049 8L22.0049 5V17H2.00488V5Z"
    />
  </AnimatedSvg>
);

export default SvgVipCrownFill;
