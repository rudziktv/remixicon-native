import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgBuilding3Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M10 10.1111V1L21 7V21H3V7L10 10.1111ZM12 4.36908V13.1886L5 10.0775V19H19V8.18727L12 4.36908Z"
    />
  </AnimatedSvg>
);

export default SvgBuilding3Line;
