import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgTrademarkLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M10 6V8H6V18H4V8H0V6H10ZM12 6H14.5L17.4999 11.196L20.5 6H23V18H21V9.133L17.4999 15.196L14 9.135V18H12V6Z"
    />
  </AnimatedSvg>
);

export default SvgTrademarkLine;
