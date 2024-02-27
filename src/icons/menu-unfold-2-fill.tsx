import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgMenuUnfold2Fill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M21 3.5V13.5L16 8.49955L21 3.5ZM21 19.9995V17.9995H3V19.9995H21ZM12 12.9995V10.9995H3V12.9995H12ZM12 5.99951V3.99951H3V5.99951H12Z" />
  </Svg>
);

export default SvgMenuUnfold2Fill;
