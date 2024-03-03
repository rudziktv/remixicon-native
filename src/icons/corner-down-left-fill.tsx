import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCornerDownLeftFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M19.0001 13.9999L19.0002 5L17.0002 4.99997L17.0001 11.9999L9.41405 11.9999V6.58578L2.99985 13L9.41405 19.4142L9.41406 13.9999L19.0001 13.9999Z"
    />
  </AnimatedSvg>
);

export default SvgCornerDownLeftFill;
