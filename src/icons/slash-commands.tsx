import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSlashCommands = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M3 3H5V7H3V3ZM9.78839 21H7.66003L14.2115 3H16.3398L9.78839 21ZM21 3H19V7H21V3Z" />
  </Svg>
);

export default SvgSlashCommands;
