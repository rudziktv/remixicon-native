import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCrossFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" />
  </Svg>
);

export default SvgCrossFill;
