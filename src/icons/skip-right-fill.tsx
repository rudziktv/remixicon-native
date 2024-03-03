import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSkipRightFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M17 6 17 18H15L15 6 17 6ZM13 12 7 18V6L13 12Z" />
  </AnimatedSvg>
);

export default SvgSkipRightFill;
