import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgXingLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M20.4443 3.5L13.8099 14.9901L17.8573 22H15.5473L11.5021 14.9914L11.5003 14.9904L18.1343 3.5H20.4443ZM8.31033 7L10.7324 11.1962L10.7305 11.1973L7.66933 16.5H5.36133L8.42215 11.1951L6.00133 7H8.31033Z"
    />
  </AnimatedSvg>
);

export default SvgXingLine;
