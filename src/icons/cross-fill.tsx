import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCrossFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" />
  </AnimatedSvg>
);

export default SvgCrossFill;
