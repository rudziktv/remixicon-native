import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgNetflixLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M15.9853 17.2079L16.001 2H18.001V22C17.3209 21.7333 16.6476 21.5667 15.9809 21.5L8.00098 6.30216V21.5C7.33431 21.5667 6.66764 21.7333 6.00098 22V2H8.00098L15.9853 17.2079Z" />
  </Svg>
);

export default SvgNetflixLine;
