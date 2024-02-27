import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFontMono = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M6 4H19V6H8V12H18V14H8V21H6V4Z" />
  </Svg>
);

export default SvgFontMono;
