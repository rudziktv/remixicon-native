import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgAddFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
  </AnimatedSvg>
);

export default SvgAddFill;
