import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgLayoutRowFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M19 12H5V19H19V12ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" />
  </Svg>
);

export default SvgLayoutRowFill;
