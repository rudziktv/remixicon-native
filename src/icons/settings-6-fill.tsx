import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgSettings6Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M17.5 2.47363L23 11.9999L17.5 21.5262H6.5L1 11.9999L6.5 2.47363H17.5ZM8.63398 8.16979L13.634 16.83L15.366 15.83L10.366 7.16979L8.63398 8.16979Z"
    />
  </AnimatedSvg>
);

export default SvgSettings6Fill;
