import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCss3Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M5.00006 3L4.35006 6.34H17.9401L17.5001 8.5H3.92006L3.26006 11.83H16.8501L16.0901 15.64L10.6101 17.45L5.86006 15.64L6.19006 14H2.85006L2.06006 18L9.91006 21L18.9601 18L20.1601 11.97L20.4001 10.76L21.9401 3H5.00006Z"
    />
  </AnimatedSvg>
);

export default SvgCss3Fill;
