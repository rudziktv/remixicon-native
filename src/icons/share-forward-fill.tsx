import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgShareForwardFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"
    />
  </AnimatedSvg>
);

export default SvgShareForwardFill;
