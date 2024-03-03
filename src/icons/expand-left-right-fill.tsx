import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgExpandLeftRightFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M9 6 3 12 9 18V6ZM15 18 21 12 15 6V18Z" />
  </AnimatedSvg>
);

export default SvgExpandLeftRightFill;
