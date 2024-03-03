import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFontSans = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M7 4H19V6H10V12H18V14H10V21H7V4Z" />
  </AnimatedSvg>
);

export default SvgFontSans;
