import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgGenderlessFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M11 7.06609V1H13V7.06609C16.6694 7.55498 19.5 10.6969 19.5 14.5C19.5 18.6421 16.1421 22 12 22C7.85786 22 4.5 18.6421 4.5 14.5C4.5 10.6969 7.33064 7.55498 11 7.06609Z"
    />
  </AnimatedSvg>
);

export default SvgGenderlessFill;
