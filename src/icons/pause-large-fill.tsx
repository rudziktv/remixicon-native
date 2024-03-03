import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgPauseLargeFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z" />
  </AnimatedSvg>
);

export default SvgPauseLargeFill;
