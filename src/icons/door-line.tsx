import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgDoorLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M17.998 3C18.5503 3 18.998 3.44772 18.998 4V20C18.998 20.5523 18.5503 21 17.998 21H5.99805C5.44576 21 4.99805 20.5523 4.99805 20V4C4.99805 3.44772 5.44576 3 5.99805 3H17.998ZM16.998 5H6.99805V19H16.998V5ZM14.998 11V13H12.998V11H14.998Z"
    />
  </AnimatedSvg>
);

export default SvgDoorLine;
