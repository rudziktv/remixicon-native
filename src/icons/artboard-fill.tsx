import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgArtboardFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8.58579 17H3V15H21V17H15.4142L18.6569 20.2426L17.2426 21.6569L13 17.4142V20H11V17.4142L6.75736 21.6569L5.34315 20.2426L8.58579 17ZM5 3H19C19.5523 3 20 3.44772 20 4V14H4V4C4 3.44772 4.44772 3 5 3Z"
    />
  </AnimatedSvg>
);

export default SvgArtboardFill;
