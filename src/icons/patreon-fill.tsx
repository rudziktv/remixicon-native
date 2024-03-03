import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgPatreonFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M15.001 17C10.8588 17 7.50098 13.6421 7.50098 9.5C7.50098 5.35786 10.8588 2 15.001 2C19.1431 2 22.501 5.35786 22.501 9.5C22.501 13.6421 19.1431 17 15.001 17ZM2.00098 2H6.00098V22H2.00098V2Z"
    />
  </AnimatedSvg>
);

export default SvgPatreonFill;
