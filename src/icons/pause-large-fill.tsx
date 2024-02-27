import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgPauseLargeFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z" />
  </Svg>
);

export default SvgPauseLargeFill;
