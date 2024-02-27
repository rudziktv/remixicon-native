import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgSkipRightFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M17 6 17 18H15L15 6 17 6ZM13 12 7 18V6L13 12Z" />
  </Svg>
);

export default SvgSkipRightFill;
