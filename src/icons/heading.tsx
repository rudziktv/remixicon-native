import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgHeading = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z" />
  </Svg>
);

export default SvgHeading;
