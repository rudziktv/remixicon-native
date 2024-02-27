import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCornerRightUpFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13.9999 19.0001L5.00003 19.0002L5 17.0002L11.9999 17.0001L12 9.41405H6.58581L13 2.99985L19.4142 9.41405L14 9.41406L13.9999 19.0001Z" />
  </Svg>
);

export default SvgCornerRightUpFill;
