import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowUpDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 8H8.001L8 20H6V8H2L7 3L12 8ZM22 16L17 21L12 16H16V4H18V16H22Z" />
  </Svg>
);

export default SvgArrowUpDownFill;
