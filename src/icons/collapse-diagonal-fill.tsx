import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCollapseDiagonalFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M20.5 11.0001H13V3.50008L16.0429 6.54297L19.2929 3.29297L20.7071 4.70718L17.4571 7.95718L20.5 11.0001ZM3.50008 13H11.0001V20.5L7.95718 17.4571L4.70718 20.7071L3.29297 19.2929L6.54297 16.0429L3.50008 13Z"
    />
  </AnimatedSvg>
);

export default SvgCollapseDiagonalFill;
