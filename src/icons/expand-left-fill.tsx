import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgExpandLeftFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M9.99994 4.99982V10.9998L16.0002 11.0002L16.0002 13.0002L9.99994 12.9998V18.9998L2.99994 12L9.99994 4.99982ZM18.0001 19V4.99999H20.0001V19H18.0001Z"
    />
  </AnimatedSvg>
);

export default SvgExpandLeftFill;
