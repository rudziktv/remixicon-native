import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgMacbookFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M2 4.00685C2 3.45078 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44995 22 4.00685V17H2V4.00685ZM1 19H23V21H1V19Z"
    />
  </AnimatedSvg>
);

export default SvgMacbookFill;
