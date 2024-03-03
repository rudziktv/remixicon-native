import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgPentagonFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12.0004 0.700195L22.7473 8.5083L18.6423 21.1421H5.35838L1.25342 8.5083L12.0004 0.700195Z"
    />
  </AnimatedSvg>
);

export default SvgPentagonFill;
