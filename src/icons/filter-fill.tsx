import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFilterFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M21 4V6H20L14 15V22H10V15L4 6H3V4H21Z" />
  </Svg>
);

export default SvgFilterFill;
