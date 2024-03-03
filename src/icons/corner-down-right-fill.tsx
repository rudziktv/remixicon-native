import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCornerDownRightFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4.99989 13.9999L4.99976 5L6.99976 4.99997L6.99986 11.9999L14.5859 11.9999V6.58578L21.0001 13L14.5859 19.4142L14.5859 13.9999L4.99989 13.9999Z"
    />
  </AnimatedSvg>
);

export default SvgCornerDownRightFill;
