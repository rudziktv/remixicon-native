import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgTornadoFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M2 3H22V5H2V3ZM4 7H20V9H4V7ZM8 11H22V13H8V11ZM10 15H18V17H10V15ZM8 19H14V21H8V19Z"
    />
  </AnimatedSvg>
);

export default SvgTornadoFill;
