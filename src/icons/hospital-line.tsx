import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgHospitalLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8 20V14H16V20H19V4H5V20H8ZM10 20H14V16H10V20ZM21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM11 8V6H13V8H15V10H13V12H11V10H9V8H11Z"
    />
  </AnimatedSvg>
);

export default SvgHospitalLine;
