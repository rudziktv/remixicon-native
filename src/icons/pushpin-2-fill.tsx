import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgPushpin2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18Z"
    />
  </AnimatedSvg>
);

export default SvgPushpin2Fill;
