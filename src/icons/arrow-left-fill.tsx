import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgArrowLeftFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M12 13V20L4 12L12 4V11H20V13H12Z" />
  </AnimatedSvg>
);

export default SvgArrowLeftFill;
