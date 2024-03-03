import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFile4Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 15H14V22H3.99826C3.44694 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.44892 21 3.00748V15ZM21 17L16 21.9968V17H21Z"
    />
  </AnimatedSvg>
);

export default SvgFile4Fill;
