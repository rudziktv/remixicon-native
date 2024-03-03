import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgContractUpDownFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M18 5 12 11 6 5H18ZM18 19 12 13 6 19H18Z" />
  </AnimatedSvg>
);

export default SvgContractUpDownFill;
