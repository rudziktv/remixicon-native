import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSkipRightLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M10.0858 12L5.29291 16.7929L6.70712 18.2071L12.9142 12L6.70712 5.79291L5.29291 7.20712L10.0858 12ZM17 6.00002L17 18H15L15 6.00002L17 6.00002Z"
    />
  </AnimatedSvg>
);

export default SvgSkipRightLine;
