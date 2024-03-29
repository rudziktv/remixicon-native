import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCrop2Line = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8.41421 17H15V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V15.5858L15.5858 7H9V5H17.5858L20.1421 2.44365L21.5563 3.85786L19 6.41421V17H22V19H19V22H17V8.41421L8.41421 17Z"
    />
  </AnimatedSvg>
);

export default SvgCrop2Line;
