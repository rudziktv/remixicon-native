import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgIndentDecrease = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM3 12.5L7 9V16L3 12.5Z" />
  </Svg>
);

export default SvgIndentDecrease;
