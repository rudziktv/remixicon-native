import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFilter2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" />
  </AnimatedSvg>
);

export default SvgFilter2Fill;
