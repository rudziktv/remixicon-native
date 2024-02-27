import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowTurnBackFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M17 16H13L18 22L23 16H19V11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11V20H5V11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11V16Z" />
  </Svg>
);

export default SvgArrowTurnBackFill;
