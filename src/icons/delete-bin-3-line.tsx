import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgDeleteBin3Line = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M20 7V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V7H2V5H22V7H20ZM6 7V20H18V7H6ZM11 9H13V11H11V9ZM11 12H13V14H11V12ZM11 15H13V17H11V15ZM7 2H17V4H7V2Z" />
  </Svg>
);

export default SvgDeleteBin3Line;
