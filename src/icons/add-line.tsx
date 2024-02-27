import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgAddLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
  </Svg>
);

export default SvgAddLine;
