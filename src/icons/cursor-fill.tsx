import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgCursorFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M13.9093 12.3603L17.0007 20.8537L14.1816 21.8798L11.0902 13.3864L6.91797 16.5422L8.4087 1.63318L19.134 12.0959L13.9093 12.3603Z" />
  </Svg>
);

export default SvgCursorFill;
