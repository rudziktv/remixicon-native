import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFlashlightFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13 10H20L11 23V14H4L13 1V10Z" />
  </Svg>
);

export default SvgFlashlightFill;
