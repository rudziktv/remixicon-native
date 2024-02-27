import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgExpandLeftRightFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M9 6 3 12 9 18V6ZM15 18 21 12 15 6V18Z" />
  </Svg>
);

export default SvgExpandLeftRightFill;
