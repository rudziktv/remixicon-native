import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSlashCommands = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3 3H5V7H3V3ZM9.78839 21H7.66003L14.2115 3H16.3398L9.78839 21ZM21 3H19V7H21V3Z"
    />
  </AnimatedSvg>
);

export default SvgSlashCommands;
