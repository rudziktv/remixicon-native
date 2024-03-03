import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSkipLeftLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M13.9142 12L18.7071 7.20712L17.2929 5.79291L11.0858 12L17.2929 18.2071L18.7071 16.7929L13.9142 12ZM7 18V6.00001H9V18H7Z"
    />
  </AnimatedSvg>
);

export default SvgSkipLeftLine;
