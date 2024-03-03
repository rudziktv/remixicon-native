import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgExpandDiagonal2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3 3H10.5L7.45711 6.04289L10.7071 9.29289L9.29289 10.7071L6.04289 7.45711L3 10.5V3ZM21 21H13.5L16.5429 17.9571L13.2929 14.7071L14.7071 13.2929L17.9571 16.5429L21 13.5V21Z"
    />
  </AnimatedSvg>
);

export default SvgExpandDiagonal2Fill;
