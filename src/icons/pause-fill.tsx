import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgPauseFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z" />
  </AnimatedSvg>
);

export default SvgPauseFill;
