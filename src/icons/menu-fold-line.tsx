import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgMenuFoldLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M21 17.9995V19.9995H3V17.9995H21ZM6.59619 3.90332L8.01041 5.31753L4.82843 8.49951L8.01041 11.6815L6.59619 13.0957L2 8.49951L6.59619 3.90332ZM21 10.9995V12.9995H12V10.9995H21ZM21 3.99951V5.99951H12V3.99951H21Z" />
  </Svg>
);

export default SvgMenuFoldLine;
