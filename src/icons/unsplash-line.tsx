import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgUnsplashLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M10.001 10V14H14.0002L14.0012 10H21.0012L21.0002 14L21.001 21H3.00098V10H10.001ZM8.00098 12H5.00098V19H19.001V16L19.0007 12H16.0007L15.9997 16H8.00098V12ZM16.001 3V9H8.00098V3H16.001ZM14.001 5H10.001V7H14.001V5Z"
    />
  </AnimatedSvg>
);

export default SvgUnsplashLine;
