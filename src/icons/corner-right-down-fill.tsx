import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCornerRightDownFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13.9999 4.99989L5.00001 4.99976L4.99998 6.99976L11.9999 6.99986L12 14.5859H6.5858L13 21.0001L19.4142 14.5859L14 14.5859L13.9999 4.99989Z" />
  </Svg>
);

export default SvgCornerRightDownFill;
