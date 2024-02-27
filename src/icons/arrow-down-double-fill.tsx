import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowDownDoubleFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M12 19.1642L18.2071 12.9571L16.7929 11.5429L12 16.3358L7.20711 11.5429L5.79289 12.9571L12 19.1642ZM12 13.5143L18.2071 7.30722L16.7929 5.89301L12 10.6859L7.20711 5.89301L5.79289 7.30722L12 13.5143Z" />
  </Svg>
);

export default SvgArrowDownDoubleFill;
