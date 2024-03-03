import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLayout2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M11 3V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H11ZM21 13V20C21 20.5523 20.5523 21 20 21H13V13H21ZM20 3C20.5523 3 21 3.44772 21 4V11H13V3H20Z"
    />
  </AnimatedSvg>
);

export default SvgLayout2Fill;
