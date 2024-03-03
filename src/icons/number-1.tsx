import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgNumber1 = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z"
    />
  </AnimatedSvg>
);

export default SvgNumber1;
