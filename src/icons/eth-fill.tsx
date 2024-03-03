import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgEthFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M11.9999 0 4.62988 12.2201 11.9999 16.5743 19.3699 12.2201 11.9999 0ZM11.9999 24 4.62988 13.6172 11.9999 18 19.3699 13.6172 11.9999 24Z"
    />
  </AnimatedSvg>
);

export default SvgEthFill;
