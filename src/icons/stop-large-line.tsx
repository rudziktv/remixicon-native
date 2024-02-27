import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgStopLargeLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M5 5H19V19H5V5ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4Z" />
  </Svg>
);

export default SvgStopLargeLine;
