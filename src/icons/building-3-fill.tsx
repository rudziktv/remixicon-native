import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgBuilding3Fill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M10 10.1111V1L21 7V21H3V7L10 10.1111Z" />
  </Svg>
);

export default SvgBuilding3Fill;
