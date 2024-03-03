import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgArrowRightDownFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M11.6366 13.0515L5.97974 7.39468L7.39395 5.98047L13.0508 11.6373L18.0006 6.68758V18.0013H6.68684L11.6366 13.0515Z"
    />
  </AnimatedSvg>
);

export default SvgArrowRightDownFill;
