import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgOverline = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M15.2459 18H8.75407L7.15407 22H5L11 7H13L19 22H16.8459L15.2459 18ZM14.4459 16L12 9.88516L9.55407 16H14.4459ZM4 3H20V5H4V3Z"
    />
  </AnimatedSvg>
);

export default SvgOverline;
