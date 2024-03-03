import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgMistFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H12V11H2V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H22V16H12V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z"
    />
  </AnimatedSvg>
);

export default SvgMistFill;
