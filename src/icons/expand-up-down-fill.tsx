import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgExpandUpDownFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z" />
  </AnimatedSvg>
);

export default SvgExpandUpDownFill;
