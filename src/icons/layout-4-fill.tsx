import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgLayout4Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M11 13V21H4C3.44772 21 3 20.5523 3 20V13H11ZM13 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H13V3ZM3 4C3 3.44772 3.44772 3 4 3H11V11H3V4Z"
    />
  </AnimatedSvg>
);

export default SvgLayout4Fill;
