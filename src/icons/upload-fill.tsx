import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgUploadFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z"
    />
  </AnimatedSvg>
);

export default SvgUploadFill;
