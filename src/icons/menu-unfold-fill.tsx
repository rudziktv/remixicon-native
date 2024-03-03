import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgMenuUnfoldFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 17.9996V19.9996H3V17.9996H21ZM17 3.5L22 8.49955L17 13.5V3.5ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z"
    />
  </AnimatedSvg>
);

export default SvgMenuUnfoldFill;
