import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgReservedFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13 15V19H16V21H8V19H11V15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V14C21 14.5523 20.5523 15 20 15H13ZM8 8V10H16V8H8Z" />
  </Svg>
);

export default SvgReservedFill;
