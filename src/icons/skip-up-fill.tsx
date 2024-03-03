import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSkipUpFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M6 7 18 7V9L6 9 6 7ZM12 11 6 17H18L12 11Z" />
  </AnimatedSvg>
);

export default SvgSkipUpFill;
