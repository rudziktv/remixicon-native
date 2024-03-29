import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgHospitalFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM11 8H9V10H11V12H13V10H15V8H13V6H11V8ZM14 20H16V14H8V20H10V16H14V20Z"
    />
  </AnimatedSvg>
);

export default SvgHospitalFill;
