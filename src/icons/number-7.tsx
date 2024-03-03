import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgNumber7 = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M19 2V3.5L10.763 21.9995H8.574L16.587 4H6V2H19Z"
    />
  </AnimatedSvg>
);

export default SvgNumber7;
