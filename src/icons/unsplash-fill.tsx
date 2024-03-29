import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgUnsplashFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8.50098 11V16H15.501V11H21.001V21H3.00098V11H8.50098ZM15.501 3V8H8.50098V3H15.501Z"
    />
  </AnimatedSvg>
);

export default SvgUnsplashFill;
