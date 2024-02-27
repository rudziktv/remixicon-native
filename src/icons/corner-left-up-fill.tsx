import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCornerLeftUpFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M10.0001 19.0001L19 19.0002L19 17.0002L12.0001 17.0001L12 9.41405H17.4142L11 2.99985L4.58578 9.41405L10 9.41406L10.0001 19.0001Z" />
  </Svg>
);

export default SvgCornerLeftUpFill;
