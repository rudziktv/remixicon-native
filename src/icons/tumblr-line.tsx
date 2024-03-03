import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgTumblrLine = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M8.00098 8C9.07612 8 11.4983 7.32669 11.4983 3.5V2H12.9982V8H18.001V10H12.9982V12.9091C13.0013 15.3906 13.0013 16.596 13.001 17C12.9992 19.2084 14.6163 20.4 17.7861 20.4V22C17.1509 21.9992 16.4034 21.9992 15.5437 22C13.1417 22.0023 10.9982 19.9649 10.9982 17.4545V10H7.00098V8H8.00098Z"
    />
  </AnimatedSvg>
);

export default SvgTumblrLine;
