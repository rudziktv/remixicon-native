import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSkipLeftFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M7 18V6H9V18H7ZM11 12 17 6V18L11 12Z" />
  </Svg>
);

export default SvgSkipLeftFill;
