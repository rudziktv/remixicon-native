import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgContractUpDownLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M5.79282 5.20718 11.9999 11.4143 18.207 5.20718 16.7928 3.79297 11.9999 8.58586 7.20703 3.79297 5.79282 5.20718ZM18.2072 18.7928 12.0001 12.5857 5.79297 18.7928 7.20718 20.207 12.0001 15.4141 16.793 20.207 18.2072 18.7928Z"
    />
  </AnimatedSvg>
);

export default SvgContractUpDownLine;
