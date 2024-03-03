import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgExpandDiagonalFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 3H13.5L16.5429 6.04289L13.2929 9.29289L14.7071 10.7071L17.9571 7.45711L21 10.5V3ZM3 21H10.5L7.45711 17.9571L10.7071 14.7071L9.29289 13.2929L6.04289 16.5429L3 13.5V21Z"
    />
  </AnimatedSvg>
);

export default SvgExpandDiagonalFill;
