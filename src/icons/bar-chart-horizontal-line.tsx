import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgBarChartHorizontalLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z"
    />
  </AnimatedSvg>
);

export default SvgBarChartHorizontalLine;
