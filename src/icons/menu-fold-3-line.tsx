import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgMenuFold3Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 4H7V6H21V4ZM21 11H11V13H21V11ZM21 18H7V20H21V18ZM9.01041 8.81412L7.59619 7.3999L3 11.9961L7.59619 16.5923L9.01041 15.1781L5.82843 11.9961L9.01041 8.81412Z"
    />
  </AnimatedSvg>
);

export default SvgMenuFold3Line;
