import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgEqualFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z" />
  </AnimatedSvg>
);

export default SvgEqualFill;
