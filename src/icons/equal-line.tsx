import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgEqualLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z" />
  </Svg>
);

export default SvgEqualLine;
