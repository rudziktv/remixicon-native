import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgShutDownLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M6.26489 3.80698L7.41191 5.44558C5.34875 6.89247 4 9.28873 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 9.28873 18.6512 6.89247 16.5881 5.44558L17.7351 3.80698C20.3141 5.61559 22 8.61091 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.61091 3.68594 5.61559 6.26489 3.80698ZM11 12V2H13V12H11Z"
    />
  </AnimatedSvg>
);

export default SvgShutDownLine;
