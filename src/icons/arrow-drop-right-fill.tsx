import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowDropRightFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M14 12L10 16V8L14 12Z" />
  </Svg>
);

export default SvgArrowDropRightFill;
