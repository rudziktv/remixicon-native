import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13 12H20L12 20L4 12H11V4H13V12Z" />
  </Svg>
);

export default SvgArrowDownFill;
