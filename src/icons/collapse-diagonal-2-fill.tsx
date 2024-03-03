import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCollapseDiagonal2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3.50008 11.0001H11.0001V3.50008L7.95718 6.54297L4.70718 3.29297L3.29297 4.70718L6.54297 7.95718L3.50008 11.0001ZM20.5 13H13V20.5L16.0429 17.4571L19.2929 20.7071L20.7071 19.2929L17.4571 16.0429L20.5 13Z"
    />
  </AnimatedSvg>
);

export default SvgCollapseDiagonal2Fill;
