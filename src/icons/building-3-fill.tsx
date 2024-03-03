import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgBuilding3Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M10 10.1111V1L21 7V21H3V7L10 10.1111Z" />
  </AnimatedSvg>
);

export default SvgBuilding3Fill;
