import * as React from 'react';
import type { IconProps } from '../IconProps';
import { AnimatedPath, AnimatedSvg } from '../AnimatedSvg';
const SvgFlag2Fill = ({ svg, path }: IconProps) => (
  <AnimatedSvg viewBox="0 0 24 24" {...svg}>
    <AnimatedPath
      {...path}
      d="M2 3H21.1384C21.4146 3 21.6385 3.22386 21.6385 3.5C21.6385 3.58701 21.6157 3.67252 21.5725 3.74807L18 10L21.5725 16.2519C21.7095 16.4917 21.6262 16.7971 21.3865 16.9341C21.3109 16.9773 21.2254 17 21.1384 17H4V22H2V3Z"
    />
  </AnimatedSvg>
);

export default SvgFlag2Fill;
