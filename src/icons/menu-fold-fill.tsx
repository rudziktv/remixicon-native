import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgMenuFoldFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 17.9996V19.9996H3V17.9996H21ZM7 3.5V13.5L2 8.49955L7 3.5ZM21 10.9996V12.9996H12V10.9996H21ZM21 3.99955V5.99955H12V3.99955H21Z"
    />
  </AnimatedSvg>
);

export default SvgMenuFoldFill;
