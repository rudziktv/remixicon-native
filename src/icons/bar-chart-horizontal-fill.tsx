import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgBarChartHorizontalFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12 3V7H3V3H12ZM16 17V21H3V17H16ZM22 10V14H3V10H22Z"
    />
  </AnimatedSvg>
);

export default SvgBarChartHorizontalFill;
