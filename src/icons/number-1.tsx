import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgNumber1 = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z" />
  </Svg>
);

export default SvgNumber1;
