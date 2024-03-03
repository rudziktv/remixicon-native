import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFileMarkedFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 2.9918V21.0082C21 21.5447 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44476 2 3.9934 2H20.0066C20.5551 2 21 2.44405 21 2.9918ZM7 4V13L10.5 11L14 13V4H7Z"
    />
  </AnimatedSvg>
);

export default SvgFileMarkedFill;
