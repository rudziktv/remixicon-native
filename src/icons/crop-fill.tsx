import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCropFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M19 17H22V19H19V22H17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V5H18C18.5523 5 19 5.44772 19 6V17Z" />
  </Svg>
);

export default SvgCropFill;
