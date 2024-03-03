import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgHeading = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z" />
  </AnimatedSvg>
);

export default SvgHeading;
