import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgExpandUpDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z" />
  </Svg>
);

export default SvgExpandUpDownFill;
