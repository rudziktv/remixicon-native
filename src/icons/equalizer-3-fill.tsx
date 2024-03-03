import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgEqualizer3Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M7 3V6H3V8H7V11H10V3H7ZM12 8H21V6H12V8ZM17 13V16H21V18H17V21H14V13H17ZM12 18H3V16H12V18Z"
    />
  </AnimatedSvg>
);

export default SvgEqualizer3Fill;
