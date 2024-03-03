import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFlutterLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M14.5979 10.6843H17.4264L11.7688 16.3419L17.4264 21.998H14.5979L8.94108 16.3412L14.5979 10.6843ZM14.4044 2.00439H17.2328L5.9191 13.3181L4.50488 11.9039L14.4044 2.00439Z"
    />
  </AnimatedSvg>
);

export default SvgFlutterLine;
