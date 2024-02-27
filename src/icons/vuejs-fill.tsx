import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgVuejsFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M1.00098 3H5.00098L12.001 15L19.001 3H23.001L12.001 22L1.00098 3ZM9.66764 3L12.001 7L14.3343 3H18.3694L12.001 14L5.63256 3H9.66764Z" />
  </Svg>
);

export default SvgVuejsFill;
