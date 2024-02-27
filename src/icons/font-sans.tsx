import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFontSans = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M7 4H19V6H10V12H18V14H10V21H7V4Z" />
  </Svg>
);

export default SvgFontSans;
