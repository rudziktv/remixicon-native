import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgExpandUpDownLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M18.2072 9.0428 12.0001 2.83569 5.79297 9.0428 7.20718 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79282 14.9572 11.9999 21.1643 18.207 14.9572 16.7928 13.543 11.9999 18.3359 7.20703 13.543 5.79282 14.9572Z"
    />
  </AnimatedSvg>
);

export default SvgExpandUpDownLine;
