import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCloudyFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M9 20.9855C4.53831 20.7267 1 17.0266 1 12.5C1 7.80558 4.80558 4 9.5 4C12.5433 4 15.2131 5.59939 16.7146 8.00348C20.2051 8.11671 23 10.982 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811V21H9V20.9855Z"
    />
  </AnimatedSvg>
);

export default SvgCloudyFill;
