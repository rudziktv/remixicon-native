import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSkipDownFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M18 17 6 17 6 15 18 15 18 17ZM12 13 18 7H6L12 13Z"
    />
  </AnimatedSvg>
);

export default SvgSkipDownFill;
