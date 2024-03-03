import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSchoolLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M12 0.585693L18 6.58569V9H22V19H23V21H1V19H2V9H6V6.58569L12 0.585693ZM18 19H20V11H18V19ZM6 11H4V19H6V11ZM8 7.41412V18.9999H11V12H13V18.9999H16V7.41412L12 3.41412L8 7.41412Z"
    />
  </AnimatedSvg>
);

export default SvgSchoolLine;
