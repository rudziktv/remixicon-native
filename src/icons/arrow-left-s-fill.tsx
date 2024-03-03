import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgArrowLeftSFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M8 12L14 6V18L8 12Z" />
  </AnimatedSvg>
);

export default SvgArrowLeftSFill;
