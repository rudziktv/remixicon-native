import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFontMono = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M6 4H19V6H8V12H18V14H8V21H6V4Z" />
  </AnimatedSvg>
);

export default SvgFontMono;
