import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgUser4Line = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16Z" />
  </Svg>
);

export default SvgUser4Line;
