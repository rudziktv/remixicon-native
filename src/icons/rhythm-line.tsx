import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgRhythmLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M2 9H4V21H2V9ZM8 3H10V21H8V3ZM14 12H16V21H14V12ZM20 6H22V21H20V6Z" />
  </Svg>
);

export default SvgRhythmLine;
