import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLayoutVerticalFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4ZM6.99993 16.9999V6.99993H8.99993V16.9999H6.99993ZM10.9999 6.99993H12.9999V16.9999H10.9999V6.99993ZM14.9999 6.99993H16.9999V16.9999H14.9999V6.99993Z"
    />
  </AnimatedSvg>
);

export default SvgLayoutVerticalFill;
