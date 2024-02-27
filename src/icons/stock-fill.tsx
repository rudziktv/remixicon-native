import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgStockFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M8.00488 5.00281H11.0049V14.0028H8.00488V17.0028H6.00488V14.0028H3.00488V5.00281H6.00488V2.00281H8.00488V5.00281ZM18.0049 10.0028H21.0049V19.0028H18.0049V22.0028H16.0049V19.0028H13.0049V10.0028H16.0049V7.00281H18.0049V10.0028Z" />
  </Svg>
);

export default SvgStockFill;
