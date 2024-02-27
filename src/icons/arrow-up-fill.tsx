import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowUpFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13 12V20H11V12H4L12 4L20 12H13Z" />
  </Svg>
);

export default SvgArrowUpFill;
