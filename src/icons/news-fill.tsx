import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgNewsFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM18 9H14V7H18V9ZM14 13V11H18V13H14ZM6 17V15L18 15V17L6 17Z" />
  </Svg>
);

export default SvgNewsFill;
