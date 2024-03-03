import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCropLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M15 17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V17H15ZM17 22V7H9V5H18C18.5523 5 19 5.44772 19 6V17H22V19H19V22H17Z"
    />
  </AnimatedSvg>
);

export default SvgCropLine;
