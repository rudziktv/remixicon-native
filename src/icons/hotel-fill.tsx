import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgHotelFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M17 19H19V11H13V19H15V13H17V19ZM3 19V4C3 3.44772 3.44772 3 4 3H18C18.5523 3 19 3.44772 19 4V9H21V19H22V21H2V19H3ZM7 11V13H9V11H7ZM7 15V17H9V15H7ZM7 7V9H9V7H7Z"
    />
  </AnimatedSvg>
);

export default SvgHotelFill;
