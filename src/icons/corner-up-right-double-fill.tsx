import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCornerUpRightDoubleFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3.99966 19.0001 3.9998 10.0002 9.58585 10.0002V4.58588L16.0001 11.0001 9.58585 17.4143V12.0002L5.99977 12.0002 5.99966 19.0001 3.99966 19.0001ZM13.8363 6.05023 15.2505 4.63601 21.6144 11 15.2505 17.3639 13.8363 15.9497 18.786 11 13.8363 6.05023Z"
    />
  </AnimatedSvg>
);

export default SvgCornerUpRightDoubleFill;
