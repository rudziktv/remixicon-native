import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFilter2Fill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" />
  </Svg>
);

export default SvgFilter2Fill;
