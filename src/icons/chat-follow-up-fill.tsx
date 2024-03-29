import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgChatFollowUpFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM17 7H15V15H17V7ZM11 8H9V9.999L7 10V12L9 11.999V14H11V11.999L13 12V10L11 9.999V8Z"
    />
  </AnimatedSvg>
);

export default SvgChatFollowUpFill;
