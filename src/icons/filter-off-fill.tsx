import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFilterOffFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M6.92893 0.514648L21.0711 14.6568L19.6569 16.071L15.834 12.2486L14 14.9999V21.9999H10V14.9999L4 5.99993H3V3.99993L7.585 3.99965L5.51472 1.92886L6.92893 0.514648ZM21 3.99993V5.99993H20L18.085 8.87193L13.213 3.99993H21Z" />
  </Svg>
);

export default SvgFilterOffFill;
