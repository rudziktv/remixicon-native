import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFlagFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3 3H12.382C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3Z"
    />
  </AnimatedSvg>
);

export default SvgFlagFill;
