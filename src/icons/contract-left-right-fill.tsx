import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgContractLeftRightFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath {...path} d="M5 18 11 12 5 6V18ZM19 6 13 12 19 18V6Z" />
  </AnimatedSvg>
);

export default SvgContractLeftRightFill;
