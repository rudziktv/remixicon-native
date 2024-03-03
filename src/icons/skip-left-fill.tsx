import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSkipLeftFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M7 18V6H9V18H7ZM11 12 17 6V18L11 12Z" />
  </AnimatedSvg>
);

export default SvgSkipLeftFill;
