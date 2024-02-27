import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCornerLeftDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M10.0001 4.99989L19 4.99976L19 6.99976L12.0001 6.99986L12 14.5859H17.4142L11 21.0001L4.58578 14.5859L10 14.5859L10.0001 4.99989Z" />
  </Svg>
);

export default SvgCornerLeftDownFill;
