import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgVuejsLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M3.31677 3L12.001 18L20.6852 3H23.001L12.001 22L1.00098 3H3.31677ZM7.65887 3L12.001 10.5L16.3431 3H18.6589L12.001 14.5L5.34308 3H7.65887Z"
    />
  </AnimatedSvg>
);

export default SvgVuejsLine;
