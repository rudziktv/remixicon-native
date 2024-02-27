import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgFlickrFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M11 12C11 14.7615 8.76146 17 5.99998 17 3.23849 17 1 14.7615 1 12 1 9.23899 3.23849 7 5.99998 7 8.76146 7 11 9.23899 11 12ZM23 12C23 14.7615 20.7615 17 18 17 15.2385 17 13 14.7615 13 12 13 9.23899 15.2385 7 18 7 20.7615 7 23 9.23899 23 12Z" />
  </Svg>
);

export default SvgFlickrFill;
