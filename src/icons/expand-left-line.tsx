import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgExpandLeftLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M10.071 4.92902L11.4852 6.34323L6.82834 11.0001L16.0002 11.0002L16.0002 13.0002L6.82839 13.0001L11.4852 17.6569L10.071 19.0712L2.99994 12.0001L10.071 4.92902ZM18.0001 19V5.00003H20.0001V19H18.0001Z"
    />
  </AnimatedSvg>
);

export default SvgExpandLeftLine;
