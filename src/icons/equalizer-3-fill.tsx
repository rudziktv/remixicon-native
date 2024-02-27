import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgEqualizer3Fill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M7 3V6H3V8H7V11H10V3H7ZM12 8H21V6H12V8ZM17 13V16H21V18H17V21H14V13H17ZM12 18H3V16H12V18Z" />
  </Svg>
);

export default SvgEqualizer3Fill;
