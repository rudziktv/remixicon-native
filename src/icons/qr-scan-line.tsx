import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgQrScanLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 16V21H3V16H5V19H19V16H21ZM3 11H21V13H3V11ZM21 8H19V5H5V8H3V3H21V8Z"
    />
  </AnimatedSvg>
);

export default SvgQrScanLine;
