import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgCharacterRecognitionFill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M20.998 3V21H2.99805V3H20.998ZM12.997 6H10.997L6.59805 17H8.75205L9.95105 14H14.041L15.242 17H17.397L12.997 6ZM11.997 8.88517L13.242 12H10.75L11.997 8.88517Z"
    />
  </AnimatedSvg>
);

export default SvgCharacterRecognitionFill;
