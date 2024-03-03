import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgBox3Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M20.5021 5.92225 12 1 3.49793 5.92225 12 10.8445 20.5021 5.92225ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555ZM13 22.4211 21.5 17.5V7.6555L13 12.5765V22.4211Z"
    />
  </AnimatedSvg>
);

export default SvgBox3Fill;
