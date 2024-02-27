import * as React from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '../IconProps';

const SvgHexagonFill = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" ref={props.reference} {...props}>
    <Path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5Z" />
  </Svg>
);

export default SvgHexagonFill;
