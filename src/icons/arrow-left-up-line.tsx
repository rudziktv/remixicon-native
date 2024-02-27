import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgArrowLeftUpLine = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M9.41421 8L18.0208 16.6066L16.6066 18.0208L8 9.41421V17H6V6H17V8H9.41421Z" />
  </Svg>
);

export default SvgArrowLeftUpLine;
