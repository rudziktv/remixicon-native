import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgBarricadeLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M6.49323 19H17.5068L16.8401 16H7.1599L6.49323 19ZM19.5556 19H21V21H3V19H4.44444L7.82598 3.78307C7.92766 3.32553 8.33347 3 8.80217 3H15.1978C15.6665 3 16.0723 3.32553 16.174 3.78307L19.5556 19ZM7.60434 14H16.3957L15.5068 10H8.49323L7.60434 14ZM8.93768 8H15.0623L14.3957 5H9.60434L8.93768 8Z"
    />
  </AnimatedSvg>
);

export default SvgBarricadeLine;
