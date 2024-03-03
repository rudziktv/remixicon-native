import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgStrikethrough2 = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M13 9H11V6H5V4H19V6H13V9ZM13 15V20H11V15H13ZM3 11H21V13H3V11Z"
    />
  </AnimatedSvg>
);

export default SvgStrikethrough2;
