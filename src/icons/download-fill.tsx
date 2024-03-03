import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgDownloadFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"
    />
  </AnimatedSvg>
);

export default SvgDownloadFill;
