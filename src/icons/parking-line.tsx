import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgParkingLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M6 3H13C16.3137 3 19 5.68629 19 9C19 12.3137 16.3137 15 13 15H8V21H6V3ZM8 5V13H13C15.2091 13 17 11.2091 17 9C17 6.79086 15.2091 5 13 5H8Z"
    />
  </AnimatedSvg>
);

export default SvgParkingLine;
