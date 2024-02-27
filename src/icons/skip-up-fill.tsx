import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSkipUpFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M6 7 18 7V9L6 9 6 7ZM12 11 6 17H18L12 11Z" />
  </Svg>
);

export default SvgSkipUpFill;
