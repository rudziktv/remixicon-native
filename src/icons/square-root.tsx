import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSquareRoot = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M15.382 4H22V6H16.618L9 21.2361L5.38197 14H2V12H6.61803L9 16.7639L15.382 4Z" />
  </Svg>
);

export default SvgSquareRoot;
