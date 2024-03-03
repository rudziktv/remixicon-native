import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFilterFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M21 4V6H20L14 15V22H10V15L4 6H3V4H21Z" />
  </AnimatedSvg>
);

export default SvgFilterFill;
