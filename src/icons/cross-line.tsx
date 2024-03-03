import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCrossLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M9 2H15V7H20V13H15V22H9V13H4V7H9V2ZM11 4V9H6V11H11V20H13V11H18V9H13V4H11Z"
    />
  </AnimatedSvg>
);

export default SvgCrossLine;
